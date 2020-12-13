import React from 'react'
import {Col, Image, Progress, Row, Tag, Typography} from "antd";
import {days_difference, typeTagColor} from "../../utils/utils";
import FundComponent from "./fund.component";

export default function TopComponent(props) {
    const percent = Math.round((props.total_amount / props.target_amount) * 100)

    return <Row gutter={64} style={{padding: '2rem'}}>
        <Col span={12} style={{textAlign: 'center'}}>
            <Image caption={'Representation Image'}
                   src={props.image_url}/>
        </Col>
        <Col span={12}>
            <div style={{position: 'relative', top: '50%', transform: "translateY(-50%)"}}>
                <Tag color={typeTagColor[props.type]} style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>{props.type} Based</Tag>
                <Typography.Title style={{marginBottom: 0}}>{props.name}</Typography.Title>
                <Typography.Text disabled
                                 style={{cursor: 'default', fontSize: '1.7rem'}}>{props.business_name}</Typography.Text>
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
                        <br/><br/>
                        <Typography.Text strong style={{fontSize: '1.2rem'}}>
                            Ends on: {new Date(props.end_date).toDateString()}
                        </Typography.Text>
                        <Typography.Text  style={{fontSize: '1.2rem'}}>
                            &nbsp; ({days_difference(new Date(props.end_date), new Date())} days left)
                        </Typography.Text>
                        <FundComponent minAmount={100} campaignId={props.id}/>
                    </Col>
                    <Col span={8}>
                        <Progress type={'circle'} percent={percent}/>
                    </Col>
                </Row>
            </div>
        </Col>
    </Row>
}