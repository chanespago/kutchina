import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import fireDB from '../util/firebase'

import Footer from '../components/Footer'
import Section from '../components/Section'
import OrderForm from '../components/OrderForm'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Transaction() {

    const location = useLocation();
    const {id} = location.state
    const transID = id.toString();

    const[dataFullName,setDataFullName] = useState();
    const[dataEmailAdd,setDataEmailAdd] = useState();
    const[dataContactNum,setDataContactNum] = useState();
    const[dataAddress1,setDataAddress1] = useState();
    const[dataAddress2,setDataAddress2] = useState();
    const[dataPaymentMethod,setDataPaymentMethod] = useState();
    const[dataPaymentDetails,setDataPaymentDetails] = useState();
    const[dataOrderItems,setDataOrderItems] = useState([]);
    const[dataSubtotal,setDataSubTotal] = useState();
    const[dataTaxPrice,setDataTaxPrice] = useState();
    const[dataShippingPrice,setDataShippingPrice] = useState();
    const[dataTotal,setDataTotal] = useState();
    const[dataStatus,setDataStatus] = useState();

    useEffect(() => {

        fireDB.orderByChild("dataTransactionID").equalTo(transID).on("child_added", function(data) {
            setDataFullName(data.val().dataFullName);
            setDataEmailAdd(data.val().dataEmailAdd);
            setDataContactNum(data.val().dataContactNum);
            setDataAddress1(data.val().dataAddress1);
            setDataAddress2(data.val().dataAddress2);
            setDataPaymentMethod(data.val().dataPaymentMethod);
            setDataPaymentDetails(data.val().dataPaymentDetails);
            setDataOrderItems(data.val().dataOrderItems);
            setDataSubTotal(data.val().dataSubtotal);
            setDataTaxPrice(data.val().dataTaxPrice);
            setDataShippingPrice(data.val().dataShippingPrice);
            setDataTotal(data.val().dataTotal);
            setDataStatus(data.val().dataStatus);
        }, function (error) {
            console.log("Error: " + error.code);
        });

    },[transID])

    const handlePrint = (rootElementId) =>{

        html2canvas(document.getElementById(rootElementId)).then(function(canvas){
            var wid, hgt;
            var img = canvas.toDataURL("image/png", wid = canvas.width, hgt = canvas.height);
            var hratio = hgt/wid
            var doc = new jsPDF('p','pt','a4');
            var width = doc.internal.pageSize.width;    
            var height = width * hratio
            doc.addImage(img,'JPEG',0,0, width, height);
            doc.save(transID+'.pdf');
        });
        
    }

    const refreshPage = ()=> {
        setTimeout(()=>{
            window.location.reload(false);
        }, 500);
    }

    return (
        <div className="wrapper">
            <Section
                titleClass="fdir__col"
                titleContent={
                <>
                    <span className="section__title">Order Success!</span>
                </>
                }
                bodyContent={
                    <>
                        <OrderForm
                            transID = {transID}
                            dataFullName = {dataFullName}
                            dataContactNum = {dataContactNum}
                            dataEmailAdd = {dataEmailAdd}
                            dataAddress1 = {dataAddress1}
                            dataAddress2 ={dataAddress2}
                            dataPaymentMethod = {dataPaymentMethod}
                            dataPaymentDetails = {dataPaymentDetails}
                            dataOrderItems = {dataOrderItems}
                            dataSubtotal = {dataSubtotal}
                            dataTaxPrice = {dataTaxPrice}
                            dataShippingPrice = {dataShippingPrice}
                            dataTotal = {dataTotal}
                            dataStatus = {dataStatus}
                        />
                        <div className="success__row">
                            <button className="btn btn__Save" onClick={()=> handlePrint("success_container")}>Save a Copy</button>
                            <Link to={{pathname:"/"}} onClick={refreshPage} className="btn btn__Close">Close</Link>
                        </div>
                    </>
                }
            />
            <Footer/>
        </div>
    )
}

export default Transaction
