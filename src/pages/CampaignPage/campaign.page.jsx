import React from 'react'
import {Col, Row} from "antd";
import TabComponent from "../../components/CampaignPage/tab.component";

export default function CampaignPage(props) {
    return (
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
                    <TabComponent/>
                </Col>
            </Row>
        </div>
    )
}