import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Css/LoginSignup.css'
import { ShopContext } from '../Context/ShopContext'
import LoginData from '../Components/Assets/LoginData';
const LoginSignup = () => {

    const { emailValidation } = useContext(ShopContext)
    const CustomerName = useRef()
    const CustomerEmail = useRef()
    const CustomerPassword = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState('');
    const handleonSubmit = (item) => {
        const customerNameData = CustomerName.current.value;
        const CustomerEmailData = CustomerEmail.current.value;
        const CustomerPasswordData = CustomerPassword.current.
            value;

        item.preventDefault();
        if (!CustomerEmailData.includes('@')) {
            setError("please enter valid Email !!!!")
            return;
        }
        if (!agreeToTerms) {
            setError('You must agree to the terms of use and privacy policy.');
            return;
        }
        setError('');

        if (emailValidation(customerNameData, CustomerEmailData, CustomerPasswordData))
            navigate('/')
        else {
            setError("please enter valid Email  and Password!!")
            CustomerName.current.value = ''
            CustomerEmail.current.value = ''
            CustomerPassword.current.value = ''
            // navigate('/login')
        }





    }

    return (
        <div className='loginsignup' >
            <div className="loginsignup-container">
                <h1>Sign Up</h1> <span style={{ color: 'red' }}><h3>{error}</h3></span>
                <form onSubmit={handleonSubmit} >
                    <div className="loginsignup-fileds">
                        <input type="text" ref={CustomerName} placeholder='Enter Your Name' />
                        <input type="email" ref={CustomerEmail} placeholder='Enter Your Email' />
                        <input type="password" ref={CustomerPassword} placeholder='Enter Your Password' />
                    </div>
                    <button> Continue</button>
                </form>
                <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" onChange={() => setAgreeToTerms(!agreeToTerms)} />
                    <p>by continuing ,i agree to the terms of use &privacy policy.</p>

                </div>
            </div>
        </div>
    )
}

export default LoginSignup