import React, {useEffect, useState} from 'react'
import {Col, Row} from "antd";
import TabComponent from "../../components/CampaignPage/tab.component";
import axios from "axios";
import ProSkeleton from '@ant-design/pro-skeleton';
import TopComponent from "../../components/CampaignPage/top.component";
import TopAdminComponent from "../../components/CampaignAdminPage/top.component";
import TabAdminComponent from "../../components/CampaignAdminPage/tab.component";

function CampaignAdminPage(props) {

    useEffect(() => {
        getCampaign();
    }, []);

    const [campaign, setCampaign] = useState()
    const [loading, setLoading] = useState(true)

    const getCampaign = () => {
        axios
            .get(process.env.REACT_APP_MAIN_SERVER + `/campaigns/${props.match.params.id}/admin`)
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
                        <TopAdminComponent {...campaign} />
                        <br/>
                        <br/>
                        <br/>
                        <Row>

                            <Col span={12} offset={6}>
                                <TabAdminComponent campaign={campaign}/>
                            </Col>
                        </Row>
                    </div>
                )
            }

        </div>
    )
}

export default CampaignAdminPage
