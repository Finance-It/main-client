import {Carousel, Col, Row, Skeleton} from 'antd';
import CaroselBanner from "../../components/HomePage/CaroselBanner.component";
import React, {useEffect, useState} from 'react'
import axios from "axios";
import CardComponent from "../../components/HomePage/card.component";

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const HomePage = () => {
    useEffect(() => {
        getCampaigns();
    }, []);

    const [campaigns, setCampaign] = useState([])
    const [loading, setLoading] = useState(true)


    const getCampaigns = () => {
        axios
            .get(process.env.REACT_APP_MAIN_SERVER + "/campaigns/")
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    setCampaign(res.data);
                    setLoading(true)
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }

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
    <br/>    <br/>

            {loading ? (
                <Skeleton active/>) : (
                <Row gutter={[0, 32]} justify="center" style={{justifyContent: "center", marginLeft: "8%"}}>
                    {campaigns.map((campaign) => (
                    <Col sm={24} md={8} lg={6}>
                        <CardComponent key={campaign.id} id={campaign.id} name={campaign.name} type={campaign.type}
                                       description={'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a'}
                                       total_amount={campaign.total_amount} target_amount={campaign.target_amount} end_date={campaign.end_date}/>
                    </Col>
                    ))}
                </Row>
            )}
        </div>
    )
}

export default HomePage