import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <div className="wrapper_navbar">
                    <div className='navbar'>
                        <span>О ресноте</span>
                        <span>Каталог</span>
                        <span>Наши магазины</span>
                        <span>Контакты</span>
                    </div>
                    <input type="text"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;