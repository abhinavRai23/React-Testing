import React from 'react';
import logo from "../../images/Sendinblue.png";
import './style.scss';

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="SendInBlue" />
                </div>
            </div>
        </header>
    )
}

export default Header;