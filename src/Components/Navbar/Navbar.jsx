import React, { useContext, useState } from 'react';
import './Navbar.css';
import { CiSearch } from "react-icons/ci";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('Shop');
    const profileNavigate = useNavigate();
    const { getTotalCartItems, setSearchTerm } = useContext(ShopContext);
    const navigator = useNavigate();
    return (
        <div className="Navbar">
            {/* Logo Section */}
            <div className="nav-logo" style={{ cursor: 'pointer' }} onClick={() => {
                navigator("/")
            }}>
                <img src={logo} alt="Logo" />
                <p>FUNSHOP</p>
            </div>

            {/* Navigation Menu */}
            <ul className="nav-menu">
                <li onClick={() => setMenu('Shop')}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#626262' }}>
                        Shop
                    </Link>
                    {menu === 'Shop' && <hr />}
                </li>
                <li onClick={() => setMenu('Men')}>
                    <Link to="/men" style={{ textDecoration: 'none', color: '#626262' }}>
                        Men
                    </Link>
                    {menu === 'Men' && <hr />}
                </li>
                <li onClick={() => setMenu('Women')}>
                    <Link to="/women" style={{ textDecoration: 'none', color: '#626262' }}>
                        Women
                    </Link>
                    {menu === 'Women' && <hr />}
                </li>
                <li onClick={() => setMenu('Kids')}>
                    <Link to="/kids" style={{ textDecoration: 'none', color: '#626262' }}>
                        Kids
                    </Link>
                    {menu === 'Kids' && <hr />}
                </li>
            </ul>

            {/* Search Bar */}
            <div className="searchitem">
                <input type="text" placeholder="Search Item.." onChange={(event) => {
                    setSearchTerm(event.target.value)
                }} />
                <CiSearch
                    className="searchIcon"
                    style={{
                        marginLeft: '-50px',
                        padding: '5px',
                        cursor: 'pointer',
                    }}
                    size={40}
                />
            </div>

            {/* Login and Cart Section */}
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="Cart Icon" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

            {/* Profile Icon */}
            <div className="profileImage">
                <FaUser
                    onClick={() => profileNavigate('/profile')}
                    size={45}
                    color="gray"
                    style={{
                        border: '1px solid white',
                        borderRadius: '50%',
                        cursor: 'pointer',
                    }}
                />
            </div>
        </div>
    );
};

export default Navbar;
