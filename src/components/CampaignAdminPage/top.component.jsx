import React from 'react'
import {Col, Image, Row, Tag, Typography} from "antd";
import {typeTagColor} from "../../utils/utils";

export default function TopAdminComponent(props) {
    // const percent = Math.round((props.total_amount / props.target_amount) * 100)

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
                <br/>
                <Typography.Text strong style={{fontSize: '1.2rem'}}>
                    Status: {props.status}
                </Typography.Text>
                <br/><br/>


            </div>
        </Col>
    </Row>
}