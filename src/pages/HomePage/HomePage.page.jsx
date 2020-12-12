import {Carousel} from 'antd';
import React from 'react'
import CaroselBanner from "../../components/HomePage/CaroselBanner.component";

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const HomePage = () => {

    return (
        <div>
            <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
            </Carousel>
            <CaroselBanner/>
        </div>

    )
}

export default HomePage