import React, { useState } from 'react'
import OrderForm from '../components/OrderForm'
import fireDB from '../util/firebase'
import StatusBall from './StatusBall';

function Track() {

    let retDataStatus = "";

    const[isSearch, setIsSearch] = useState(false);
    const[targetTransId, setTargetTransID] = useState();
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
    const[targetStatus,setTargetStatus] = useState();
    const[retStatus,setRetStatus] = useState();

    const handleTransID = (event) => setTargetTransID(event.target.value)

    const searchTransID = () => {
        fireDB.orderByChild("dataTransactionID").equalTo(targetTransId).on("child_added", function(data) {

            setIsSearch(true)
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
            setTargetStatus(data.val().dataStatus);


            if (data.val().dataStatus === 0) {
                retDataStatus = "We are preparing your order. Please wait.";
            }
            if (data.val().dataStatus === 1) {
                retDataStatus = "We are packing your order. Please wait.";
            }
            if (data.val().dataStatus === 2) {
                retDataStatus = "Your order has been shipped Please wait.";
            }
            if (data.val().dataStatus === 3) {
                retDataStatus = "You got your order. Thank you.";
            }
            setRetStatus(retDataStatus)
            console.log (data.val().dataStatus)
            console.log (retDataStatus)

        }, function (error) {
            console.log("Error: " + error.code);
        });
        
    }

    return (
        <div className="track__container">  
            <div className="track__header">
                <label htmlFor="name">Tracking Order</label>
                <form className="track__form">
                    <input type="text" placeholder="ktchnrpp-XXXX-XXXX-XXXXXX" onChange={handleTransID}/>
                    <span onClick={searchTransID}><i className='bx bx-search'></i></span>
                </form>
            </div>
            {
                isSearch ? (
                    <>
                        <div className="track__body">
                            <OrderForm
                                transID = {targetTransId}
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
                            />
                            <label>{retStatus}</label>
                            <div className="track__content">
                            
                                <StatusBall
                                    ballStatus={targetStatus}
                                    ballIndex = '0'
                                    >
                                    <i className='bx bx-restaurant'></i>
                                </StatusBall>

                                <StatusBall
                                    ballStatus={targetStatus}
                                    ballIndex = '1'
                                    >
                                    <i className='bx bxs-basket'></i>
                                </StatusBall>

                                <StatusBall
                                    ballStatus={targetStatus}
                                    ballIndex = '2'
                                    >
                                    <i className='bx bx-cycling'></i>
                                </StatusBall>

                                <StatusBall
                                    ballStatus={targetStatus}
                                    ballIndex = '3'
                                    >
                                    <i className='bx bxs-shopping-bag-alt'></i>
                                </StatusBall>

                            </div>
                        </div>
                        
                    </>
                ) : null   
            }           
        </div>
    )
}

export default Track
