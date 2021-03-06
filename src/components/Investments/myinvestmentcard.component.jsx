import React from 'react'
import {Button, Card, Tag, Typography} from "antd";
import {days_difference} from "../../utils/utils";

function MyInvestmentCard(props) {

    // const investmentLink = `/investments/${props.id}`
    // const campaignLink = `/campaign/`
    // const days_remaining = days_difference(new Date(props.end_date), new Date())

    const typeTagColor = {
        PAID: 'success',
        PENDING: 'warning',
        INITIATED: 'blue',
        NOTPAID: 'danger',
        REFUNDINITIATED: 'info',
        REFUNDSUCCESS: 'success'
    }

    const typeTagColorCampaign = {
        Reward: 'success',
        Debt: 'warning',
        Donation: 'blue'
    }

    return (
        <div>
            <Card
                style={{width: 300}}

                actions={props.status === 'INITIATED' && [<Button href={props.paymentLink}>Pay Now</Button>]}
            >
                <Card.Meta
                    title={<Typography.Title
                        style={{marginRight: 'auto', fontWeight: '400'}}
                        level={4}>{props.campaign.name}<br/>
                        <Tag color={typeTagColorCampaign[props.type]}>{props.type}</Tag>
                    </Typography.Title>}
                />
                <br/><br/>
                <div style={{fontWeight: 'bold', display: 'inline'}}>Amount:</div>
                &nbsp;&nbsp;
                <div style={{display: 'inline'}}>&#8377; {props.amount}</div>
                <br/><br/>
                <div style={{fontWeight: 'bold', display: 'inline'}}>Status:</div>
                &nbsp;&nbsp;
                <div style={{display: 'inline'}}><Tag color={typeTagColor[props.status]}>{props.status}</Tag></div>
                <br/><br/>
                {/* <Typography.Text disabled style={{fontSize: '1rem'}}><FieldTimeOutlined/> Campaign Ends in {days_remaining} days</Typography.Text> */}
            </Card>
        </div>
    )
}

export default MyInvestmentCard

// Usage
// <CardComponent id={2} name={'Execute It Fundraiser'} type={'Donation'} description={'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a'} total_amount={88} target_amount={123} end_date={'2020-12-17T19:55:30Z'} />