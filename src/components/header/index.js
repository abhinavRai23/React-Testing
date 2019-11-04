import React from 'react';
import logo from "../../images/Sendinblue.png";
import './style.scss';

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="logo">
                    <img data-test="logo" src={logo} alt="SendInBlue" />
                </div>
            </div>
        </header>
    )
}

export default Header;