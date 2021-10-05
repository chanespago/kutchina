import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import fireDB from '../util/firebase'
import * as htmlToImage from 'html-to-image';

import Footer from '../components/Footer'
import Section from '../components/Section'
import OrderForm from '../components/OrderForm'
import download from 'downloadjs';

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
            setDataTotal(data.val().dataTotal);
            setDataStatus(data.val().dataStatus);
        }, function (error) {
            console.log("Error: " + error.code);
        });

    },[transID])

    const handlePrint = () =>{
        htmlToImage.toPng(document.getElementById('success_container'))
        .then(function (dataUrl) {
            download(dataUrl, transID + '.png');
        });
    }

    const refreshPage = ()=> {
        setTimeout(()=>{
            window.location.reload(false);
        }, 500);
        console.log('page to reload')
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
                            dataTotal = {dataTotal}
                            dataStatus = {dataStatus}
                        />
                        <div className="success__row">
                            <button className="btn btn__Save" onClick={handlePrint}>Save a Copy</button>
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
