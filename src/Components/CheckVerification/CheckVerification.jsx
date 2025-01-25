import React, { useContext, useRef, useState } from 'react'
import './CheckVerification.css'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
function CheckVerification() {

    const { userValidation } = useContext(ShopContext);
    const navigater = useNavigate();
    const [warning, setWarning] = useState()

    const userId = useRef()
    const Upassword = useRef();

    const CheckValidUser = (e) => {
        const userIdElement = userId.current.value;
        const UpasswordElement = Upassword.current.value;
        if (userValidation(userIdElement, UpasswordElement)) {
            navigater("/payment")
        }

        else {
            e.preventDefault();
            setWarning("Please Enter Valid UserId and password")
            // navigater("/CheckVerification")
        }
    }
    return (
        <div className="cmainContainer">
            <div className="clogin-container">
                <div className="clogin-card">
                    <h2>Check For Credentials</h2>

                    <form className='Cform' onSubmit={CheckValidUser}>
                        <h3 style={{ color: "red", marginLeft: "40px", marginBottom: "10px" }}>{warning}</h3>
                        <div className="cform-group">
                            <label htmlFor="userId">User Id:</label>
                            <input type="text" ref={userId} id="usrId" placeholder="Enter your UserId" required />
                        </div>
                        <div className="cform-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" ref={Upassword} id="password" placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className="clogin-button">Check</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckVerification