import React from 'react';
import './Main.scss'
import Slider from "../../components/slidebar/Slider";
import Card from "../../components/cards/Card";

const Main = () => {
    return (
        <section>
            <div className="container">
                <div className="wrapper_main">
                    <Slider/>
                    <div className="wrapper_cards">
                        <Card title='Hello' about='56 njdfhjd'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;