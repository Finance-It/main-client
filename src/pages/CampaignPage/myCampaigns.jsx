import React, {useEffect, useState} from 'react'
import {Button, Col, Row, Space} from "antd";
import axios from "axios";
import ProSkeleton from '@ant-design/pro-skeleton';
import AdminCardComponent from "../../components/HomePage/adminCard.component";
import {PlusOutlined} from "@ant-design/icons";


function MyCampaignsPage(props) {

    useEffect(() => {
        getInvestments();
    }, []);

    const [campaigns, setCampaigns] = useState([])
    const [loading, setLoading] = useState(true)

    const getInvestments = () => {
        const AuthStr = 'Bearer '.concat(sessionStorage.getItem('token'));

        axios
            .get(process.env.REACT_APP_MAIN_SERVER + "/campaigns/myCampaign",
                {headers: {Authorization: AuthStr}}
            )
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    setCampaigns(res.data);
                    console.log(res.data)
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

            {loading ? (
                <ProSkeleton/>) : (
                <div>
                    <br/><br/>

                    <Space size="middle">
                        <Button type={'primary'} size='large' onClick={() => {
                            props.history.push('/campaigns/new')
                        }} icon={<PlusOutlined/>} style={{marginLeft:'25%'}}>New Campaign</Button>
                    </Space>
                    <br/><br/>
                    <br/>

                    <Row gutter={[0, 32]} justify="center" style={{justifyContent: "center", marginLeft: "8%"}}>
                        {campaigns.map((campaign) => (
                            <Col key={campaign.id} sm={24} md={8} lg={6}>
                                <AdminCardComponent id={campaign.id} name={campaign.name} type={campaign.type}
                                                    description={campaign.description}
                                                    total_amount={campaign.total_amount}
                                                    target_amount={campaign.target_amount}
                                                    end_date={campaign.end_date}
                                                    image_url={campaign.image_url}

                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            )}

        </div>
    )
}

export default MyCampaignsPage




