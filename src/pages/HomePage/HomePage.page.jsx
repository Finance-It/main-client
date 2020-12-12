import {Carousel, Col, Row} from 'antd';
import CaroselBanner from "../../components/HomePage/CaroselBanner.component";
import React, {useEffect, useState} from 'react'
import axios from "axios";
import CardComponent from "../../components/HomePage/card.component";
import ProSkeleton from '@ant-design/pro-skeleton';
import TopComponent from "../../components/CampaignPage/top.component";

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const campaign = {
    id: 1,
    type: 'Donation',
    name: 'PICT IoT Lab Fundraiser',
    business_name: 'Pune Inst of Computer Tech',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a',
    total_amount: 7676,
    target_amount: 97675
}


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
        <div className='App'>

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
                <ProSkeleton/>) : (
                <Row gutter={[0, 32]} justify="center" style={{justifyContent: "center", marginLeft: "8%"}}>
                    {campaigns.map((campaign) => (
                    <Col  key={campaign.id} sm={24} md={8} lg={6}>
                        <CardComponent id={campaign.id} name={campaign.name} type={campaign.type}
                                       description={'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a'}
                                       total_amount={campaign.total_amount} target_amount={campaign.target_amount} end_date={campaign.end_date}/>
                    </Col>
                    ))}
                </Row>
            )}
            <TopComponent {...campaign} />
        </div>
    )
}

export default HomePage