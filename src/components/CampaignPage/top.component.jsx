import React from 'react'
import {Col, Image, Progress, Row, Tag, Typography} from "antd";
import {typeTagColor} from "../../utils/utils";
import FundComponent from "./fund.component";

export default function TopComponent(props) {
    const percent = Math.round((props.total_amount / props.target_amount) * 100)

    return <Row gutter={8}>
        <Col span={12}>
            <Image caption={'Representation Image'} style={{padding: '2rem'}}
                   src={'https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_1.0,f_auto,h_460/squckgg3yuv7qlv26st2'}/>
        </Col>
        <Col span={12}>
            <Tag color={typeTagColor[props.type]}>{props.type} Based</Tag>
            <Typography.Title style={{marginBottom: 0}}>{props.name}</Typography.Title>
            <Typography.Text disabled style={{cursor: 'default', fontSize: '1.7rem'}}>{props.business_name}</Typography.Text>
            <br/><br/>
            <Typography.Text style={{fontSize: '1.2rem'}}>{props.description}</Typography.Text>
            <br/><br/><br/>
            <Row gutter={4}>
                <Col span={16}>
                    <Typography.Text strong>
                        &#8377; {props.total_amount} Raised of
                    </Typography.Text>
                    &nbsp;
                    <Typography.Text>
                        &#8377; {props.target_amount}
                    </Typography.Text>
                    <FundComponent minAmount={100} campaignId={props.id} />
                </Col>
                <Col span={8}>
                    <Progress type={'circle'} percent={percent} />
                </Col>
            </Row>
        </Col>
    </Row>
}