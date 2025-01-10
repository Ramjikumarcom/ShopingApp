import React, { useContext, useRef, useState } from 'react'
import './UpdateProfile.css'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
function UpdateProfile() {

    const { EditProfileInformation } = useContext(ShopContext)
    // const navigatorProfile = useNavigate();
    const navigatetoProfilePage = useNavigate();
    const [Lattitude, setlattitude] = useState(null);
    const [Longitude, setlongitude] = useState(null);
    const [userAddress, setUserAddress] = useState();

    const pName = useRef()
    const pEmail = useRef()
    const pAddress = useRef()
    const pPhone = useRef()


    const HandleOnSubmitProfile = async (e) => {
        e.preventDefault();
        const pNameElement = pName.current.value;
        const pEmailElement = pEmail.current.value;
        const pAddressElement = pAddress.current.value;
        const pPhoneElement = pPhone.current.value;
        // console.log(pEmailElement)

        EditProfileInformation(pNameElement, pEmailElement, pAddressElement, pPhoneElement);

        navigatetoProfilePage('/profile');


    }




    const geo = navigator.geolocation;
    geo.getCurrentPosition(userCoords)
    function userCoords(position) {

        let userLatitude = position.coords.latitude;
        console.log(userLatitude)
        let userLongitude = position.coords.longitude
        setlattitude(userLatitude)
        setlongitude(userLongitude)

    }

    const getAddress = async () => {
        const url = `https://api.opencagedata.com/geocode/v1/json?key=e520461b7930431b99db33b4f4d82599&q=${Lattitude}%2C+${Longitude}&pretty=1&no_annotations=1`
        const loc = await fetch(url)
        const data = await loc.json();
        setUserAddress(data.results[0].formatted)
        // console.log(data)

    }


    return (

        <div className="u-container">


            <div className="u-profile-container">
                <h1>Update Profile Information</h1>
                <form className="u-profile-form" onSubmit={HandleOnSubmitProfile} >

                    <label for="name">Name</label>
                    <input type="text" id="name" ref={pName} placeholder="Enter your name" />

                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" ref={pEmail} />

                    <label for="address">Address</label>
                    <input type="text" value={userAddress} id="address" placeholder="Enter your address" ref={pAddress} /> <span style={{ fontSize: '10px', border: '1px solid black', padding: '5px', display: 'inline-block', borderRadius: '10px', marginBottom: '20px', cursor: "pointer", backgroundColor: '#f4f4f9' }} onClick={() => {
                        getAddress();
                    }}> Add Address</span>

                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Enter your phone number" ref={pPhone} />

                    <button type="button" className="u-btn-save" >Save Changes</button>
                </form>
            </div>
        </div>

    )
}

export default UpdateProfile