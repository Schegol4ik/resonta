import React from 'react';
import './Header.scss'
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="wrapper_header">
                    <div className="logo_header">
                        <img src="" alt="logo"/>
                        <span>Колбасы и мясные деликатесы</span>
                    </div>
                    <div className="others_header">
                        <div>
                            <img src="" alt="star"/>
                            <img src="" alt="ellipse"/>
                        </div>
                        <div>
                            <img src="" alt="basket"/>
                            <p>
                                <span>Товаров</span>
                                <h6>0</h6>
                            </p>
                        </div>
                    </div>
                </div>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;