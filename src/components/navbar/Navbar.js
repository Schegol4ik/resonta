import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="wrapper_navbar">
                    <div className='navbar_content'>
                        <span>О ресноте</span>
                        <span>Каталог</span>
                        <span>Наши магазины</span>
                        <span>Контакты</span>
                    </div>
                    <input type="text" placeholder='Поиск по сайту'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;