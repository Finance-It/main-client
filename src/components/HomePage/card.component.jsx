import React from 'react'
import {Card, Progress, Tag, Typography} from "antd";
import {FieldTimeOutlined} from "@ant-design/icons";
import {days_difference} from "../../utils/utils";

//TODO: Add image link
function CardComponent(props) {
    const percent = Math.round((props.total_amount / props.target_amount) * 100)
    const campaignLink = `/campaign/${props.id}`
    const days_remaining = days_difference(new Date(props.end_date), new Date())

    const typeTagColor = {
        Reward: 'success',
        Debt: 'warning',
        Donation: 'blue'
    }

    return <a href={campaignLink}><Card
        style={{width: 300}}
        cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        }
        hoverable
    >
        <Card.Meta
            title={<Typography.Title level={4}>{props.name}<br/>
                <Tag color={typeTagColor[props.type]}>{props.type} Based</Tag></Typography.Title>}
            description={props.description}
        />
        <br/>
        <div style={{fontWeight: 'bold', display: 'inline'}}>Funds Raised:</div>
        &nbsp;&nbsp;
        <div style={{display: 'inline'}}>&#8377; {props.total_amount}</div>
        <Progress percent={percent}/>
        <br/><br/>
        <Typography.Text disabled style={{fontSize: '1rem'}}><FieldTimeOutlined/> Campaign Ends in {days_remaining} days</Typography.Text>
    </Card>
    </a>
}

export default CardComponent

// Usage
// <CardComponent id={2} name={'Execute It Fundraiser'} type={'Donation'} description={'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a'} total_amount={88} target_amount={123} end_date={'2020-12-17T19:55:30Z'} />