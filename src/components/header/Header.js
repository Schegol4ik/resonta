import React from 'react';
import './Header.scss'
import Navbar from "../navbar/Navbar";
import logo from '../../assets/images/logo.svg'
import favorites from '../../assets/images/favorites.svg'
import basket from '../../assets/images/basket.svg'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="wrapper_header">
                    <div className="logo_header">
                        <img src={logo} alt="logo"/>
                        <span>Колбасы и мясные <br/>деликатесы</span>
                    </div>
                    <div className="others_header">
                        <div className='favorites_star'>
                            <img src={favorites} alt="star"/>
                        </div>
                        <div className="favorites_header">
                            <div className='basket_favorites'>
                                <img src={basket} alt="basket"/>
                            </div>
                            <div className='count_favorites'>
                                <span>Товаров: </span>
                                <span className='count_goods'>0</span>
                                <br/>
                                <span className='count_price'>21 321</span>
                                <span className='count_currency'>₽</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar/>
            </div>
        </header>
    );
};

export default Header;