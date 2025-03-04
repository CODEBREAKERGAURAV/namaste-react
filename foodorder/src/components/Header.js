import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    let [btnNameReact,setBtnName]= useState("Login")
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="App Logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="Login"?
                        setBtnName("Logout"): setBtnName("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
