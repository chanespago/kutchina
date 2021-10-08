
import React, { Component } from 'react'

class OrderForm extends Component {
  
    render() {

        return (
            <div id="success_container">
                <div id="success_header">
                    <span className="context__container__header">Transaction Receipt</span>
                </div>
                <div id="success_body">
                    <div id="success_body_container">
                        <div className="success__row">
                            <table className="customTable">
                                <thead>
                                    <tr>
                                        <th>Customer Information</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="success__row">
                            <table className="customTable">
                                <tbody>
                                    <tr>
                                        <th>Transaction ID :</th>
                                        <td>{this.props.transID}</td>
                                    </tr>
                                    <tr>
                                        <th>Full Name :</th>
                                        <td>{this.props.dataFullName}</td>
                                    </tr>
                                    <tr>
                                        <th>Contact Number :</th>
                                        <td>{this.props.dataContactNum}</td>
                                    </tr>
                                    <tr>
                                        <th>Email Address :</th>
                                        <td>{this.props.dataEmailAdd}</td>
                                    </tr>
                                    <tr>
                                        <th>Address 1 :</th>
                                        <td>{this.props.dataAddress1}</td>
                                    </tr>
                                    <tr>
                                        <th>Address 2 :</th>
                                        <td>{this.props.dataAddress2}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="success__row">
                            <table className="customTable">
                                <thead>
                                    <tr>
                                        <th>Payment Information</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="success__row">
                            <table className="customTable">
                                <tbody>
                                    <tr>
                                        <th>Payment Method :</th>
                                        <td>{
                                                this.props.dataPaymentMethod === "cod" ? " Cash On Delivery" : " GCash Payment"                                                
                                            }</td>
                                    </tr>
                                    <tr>
                                        <th>Payment Details :</th>
                                        <td>{
                                            this.props.dataPaymentMethod === "cod" ? this.props.dataPaymentDetails : " GCash Reference Number : " + this.props.dataPaymentDetails + ""
                                        }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="success__row">
                            <table className="customTable">
                                <thead>
                                    <tr>
                                        <th>Order Information</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="success__row">
                            <table className="customTable">
                                <tbody>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Product QTY</th>
                                        <th>Unit Price</th>
                                        <th>Sub Total</th>
                                    </tr>
                                    {this.props.dataOrderItems.map((order) => (
                                        <tr>
                                            <td>{order.prodName}</td>
                                            <td>{order.prodQTY}</td>
                                            <td>{order.prodPrice}</td>
                                            <td>{Number(Number(order.prodQTY) * Number(order.prodPrice)).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="success__row">
                            <table className="customTable">
                                <thead>
                                    <tr>
                                        <th>Order Summation</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="success__row">
                            <table className="customTable">
                                <tbody>
                                    <tr>
                                        <th>Sub-total :</th>
                                        <td className="text__right">{Number(this.props.dataSubtotal).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>Value Added Tax :</th>
                                        <td className="text__right">{Number(this.props.dataTaxPrice).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>Delivery Fee :</th>
                                        <td className="text__right">{Number(this.props.dataShippingPrice).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <th>Total :</th>
                                        <td className="text__right">PHP {Number(this.props.dataTotal).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderForm;