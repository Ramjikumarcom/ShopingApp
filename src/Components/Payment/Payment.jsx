import React, { useContext } from "react";
import "./Payment.css"; // Include your CSS file here
import gpay from '../Assets/gpay.png'
import phonepay from '../Assets/phonepe.png'
import paytm from '../Assets/paytm.png'
import qrCode from '../Assets/qrCode.png'
import upi from '../Assets/upi.jpg'
import { ShopContext } from "../../Context/ShopContext";
function Payment() {
    const { getTotalAmount, pcodeDiscount, getSubTotalAmount } = useContext(ShopContext)
    return (
        <div className="PaymnetContainer">
            <div className="checkout-container">
                <div className="left-side">
                    <div className="text-box">
                        <h1 className="home-heading">Modern Home</h1>
                        <p className="home-price"><em>${ } </em>/  night</p>
                        <hr className="left-hr" />
                        <p className="home-desc"><em>Entire home </em>for <em>2 guests</em></p>
                        <p className="home-desc">
                            <em>Tue, July 23, 2022 </em>to <em>Thu, July 25, 2022</em>
                        </p>
                    </div>
                </div>

                <div className="right-side">
                    <div className="receipt">
                        <h2 className="receipt-heading">Receipt Summary</h2>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Total Amount</td>
                                    <td className="price">${getSubTotalAmount()}</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td className="price">{pcodeDiscount}</td>
                                </tr>
                                <tr>
                                    <td>Subtotal</td>
                                    <td className="price">${0}</td>
                                </tr>
                                <tr>
                                    <td>Platform Fee</td>
                                    <td className="price">${0}</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td className="price">{0}%</td>
                                </tr>
                                <tr className="total">
                                    <td>Total</td>
                                    <td className="price">${getTotalAmount(getSubTotalAmount())}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="payment-info" >
                        <h3 className="payment-heading" >Payment Method</h3>
                        <div className="paymentOption"  >
                            <img src={gpay} alt="Gpay" style={{ height: '40px', width: '40px', margin: '0px 10px', borderRadius: '50% 50%', cursor: 'pointer' }} />
                            <img src={phonepay} alt="PhonePe" style={{ height: '40px', width: '40px', margin: '0px 10px', borderRadius: '50% 50%', cursor: 'pointer' }} />
                            <img src={paytm} alt="Paytm" style={{ height: '40px', width: '40px', borderRadius: '50% 50%', cursor: 'pointer', margin: '0px 10px' }} />
                            <img src={upi} alt="Paytm" style={{ height: '40px', width: '40px', borderRadius: '50% 50%', cursor: 'pointer', margin: '0px 10px' }} />

                        </div>
                        <form className="form-box">
                            <div>
                                <label htmlFor="full-name">Full Name</label>
                                <input
                                    id="full-name"
                                    name="full-name"
                                    placeholder="Enter Card Name"
                                    required
                                    type="text"
                                />
                            </div>

                            <div>
                                <label htmlFor="credit-card-num">
                                    Card Number
                                    <span className="card-logos" style={{ margin: '20px' }}>
                                        <i style={{ margin: '0px 5px' }} className="fa-brands fa-cc-visa"></i>
                                        <i style={{ margin: '0px 5px' }} className="fa-brands fa-cc-amex"></i>
                                        <i style={{ margin: '0px 5px' }} className="fa-brands fa-cc-mastercard"></i>
                                        <i style={{ margin: '0px 5px' }} className="fa-brands fa-cc-discover"></i>
                                    </span>
                                </label>
                                <input
                                    id="credit-card-num"
                                    name="credit-card-num"
                                    placeholder="1111-2222-3333-4444"
                                    required
                                    type="text"
                                />
                            </div>

                            <div>
                                <p className="expires">Expires on:</p>
                                <div className="card-expiration">
                                    <label htmlFor="expiration-month">Month</label>
                                    <select id="expiration-month" name="expiration-month" required>
                                        <option value="">Month</option>
                                        <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>

                                    <label className="expiration-year">Year</label>
                                    <select id="expiration-year" name="expiration-year" required>
                                        <option value="">Year</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    id="cvv"
                                    name="cvv"
                                    placeholder="415"
                                    type="text"
                                    required
                                />
                                <a className="cvv-info" href="https://www.cvvnumber.com/">What is CVV?</a>
                            </div>

                            <button className="btn">
                                <i className="fa-solid fa-lock"></i>Payment
                            </button>
                        </form>

                        <p className="footer-text">
                            <i className="fa-solid fa-lock"></i>
                            Your credit card information is encrypted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
