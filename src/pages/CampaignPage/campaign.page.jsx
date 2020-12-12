import React, {useEffect, useState} from 'react'
import {Col, Row} from "antd";
import TabComponent from "../../components/CampaignPage/tab.component";
import axios from "axios";
import ProSkeleton from '@ant-design/pro-skeleton';


function CampaignPage(props) {

    useEffect(() => {
        getCampaign();
    }, []);

    const [campaign, setCampaign] = useState()
    const [loading, setLoading] = useState(true)

    const getCampaign = () => {
        axios
            .get(process.env.REACT_APP_MAIN_SERVER + `/campaigns/${props.match.params.id}`)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data, '----------fronnsdj3fns=---------')
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
            {
                loading ? (
                    <ProSkeleton/>) : (
                    <div>

                        <Row>
                            <Col span={24}>

                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <br/>
                        <Row>

                            <Col span={12} offset={6}>
                                <TabComponent campaign={campaign}/>
                            </Col>
                        </Row>
                    </div>
                )
            }

        </div>
    )
}

export default CampaignPage

// {loading ? (
//     <ProSkeleton/>) : (
//     <Row gutter={[0, 32]} justify="center" style={{justifyContent: "center", marginLeft: "8%"}}>
//         {campaigns.map((campaign) => (
//             <Col  key={campaign.id} sm={24} md={8} lg={6}>
//                 <CardComponent id={campaign.id} name={campaign.name} type={campaign.type}
//                                description={'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a'}
//                                total_amount={campaign.total_amount} target_amount={campaign.target_amount} end_date={campaign.end_date}/>
//             </Col>
//         ))}
//     </Row>
// )}