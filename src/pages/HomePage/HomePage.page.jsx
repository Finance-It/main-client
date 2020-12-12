import {Card, Carousel, Col, Row} from 'antd';

import React from 'react'

const {Meta} = Card;
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



            <Row gutter={[8, 32]} justify="center" style={{ justifyContent:"center", marginLeft:"10%" }}>
                <Col sm={24} md={8} lg={6}>
                    <Card
                        hoverable
                        style={{width: 240}}
                        cover={<img alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                </Col>
                <Col sm={24} md={8} lg={6}>
                    <Card
                        hoverable
                        style={{width: 240}}
                        cover={<img alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                </Col>
                <Col sm={12} md={8} lg={6}>
                    <Card
                        hoverable
                        style={{width: 240}}
                        cover={<img alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                </Col>

            </Row>

        </div>
    )
}

export default HomePage