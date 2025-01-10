import React, { useContext, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import './Profile.css'
import profileImage from '../AboutCompany/MT2024123.jpg'
import UpdateProfile from '../UpdateProfile/UpdateProfile'
import { ShopContext } from '../../Context/ShopContext'
function Profile() {
    const { EditProfileInformati } = useContext(ShopContext)
    const [editProfile, setEditProfile] = useState()
    console.log("edit profile information", EditProfileInformati)

    if (editProfile === 'Editprofile') return <UpdateProfile></UpdateProfile>
    return (

        <div class="profile-container">
            <div class="profile-header">
                <div class="profile-img">
                    <img src={profileImage} alt="Profile Picture" />
                    <div class="edit-photo-btn">
                        <input type="file" id="file-upload" hidden />
                        {/* <label for="file-upload" class="btn">Change Photo</label> */}

                    </div>

                </div>
                <div class="profile-info">
                    <h1>{EditProfileInformati.uname || 'Ramji Kumar'}</h1>
                    <p>Premium Member</p>
                    {/* <button class="edit-profile-btn">Edit Profile</button> */}

                </div>
                <FaEdit onClick={() => {
                    setEditProfile('Editprofile')
                }} size={20} style={{ cursor: 'pointer', margin: '-5px 0px' }} />
            </div>
            <div class="profile-body">
                <div class="profile-section">
                    <h2>Personal Information</h2>
                    <p><strong>Email:</strong> {EditProfileInformati.uemail || 'ramjik708@gmail.com'}</p>
                    <p><strong>Phone:</strong> {EditProfileInformati.uphone || '9939442473'}</p>
                    <p><strong>Address:</strong> {EditProfileInformati.uaddress || 'Veersandra Electroninncity, Bengaluru(560100), India'}</p>
                </div>
                <div class="profile-section">
                    <h2>Order History</h2>
                    <ul class="order-list">
                        <li>Order #12345 - Delivered</li>
                        <li>Order #12346 - In Transit</li>
                        <li>Order #12347 - Pending</li>
                    </ul>
                </div>
                <div class="profile-section">
                    <h2>Payment Method</h2>
                    <ul class="payment-list">
                        <li>PhonePe</li>
                        <li>+919939442473@ybl</li>
                    </ul>
                    <button class="add-payment-btn">Add Payment Method</button>
                </div>
            </div>
        </div>


    )
}

export default Profile