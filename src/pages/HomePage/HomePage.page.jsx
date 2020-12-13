import {Carousel, Col, Row} from 'antd';
import CaroselBanner from "../../components/HomePage/CaroselBanner.component";
import React, {useEffect, useState} from 'react'
import axios from "axios";
import CardComponent from "../../components/HomePage/card.component";
import ProSkeleton from '@ant-design/pro-skeleton';
// import c1 from "../../../public/assests/c1.jpeg"

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const HomePage = (props) => {
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
        <div className='App'>

            <Carousel autoplay>
                <div>
                    <img src="/assests/c1.jpeg" style={contentStyle} alt={'Alt'}/>
                </div>
                <div>
                    <img src="/assests/c2.jpeg" style={contentStyle} alt={'Alt'}/>
                </div>
                <div>
                    <img src="/assests/c1.jpeg" style={contentStyle} alt={'Alt'}/>
                </div>
                <div>
                    <img src="/assests/c2.jpeg" style={contentStyle} alt={'Alt'}/>
                </div>
            </Carousel>
            <CaroselBanner/>
            <br/> <br/>

            {loading ? (
                <ProSkeleton/>) : (
                <Row gutter={[0, 32]} justify="center" style={{justifyContent: "center", marginLeft: "8%"}}>
                    {campaigns.map((campaign) => (
                        <Col key={campaign.id} sm={24} md={8} lg={6}>
                            <CardComponent id={campaign.id} name={campaign.name} type={campaign.type}
                                            description={campaign.description}
                                           total_amount={campaign.total_amount} target_amount={campaign.target_amount}
                                           end_date={campaign.end_date}
                                           image_url={campaign.image_url}
                            />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    )
}

export default HomePage