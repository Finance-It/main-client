import React from 'react'
import {Typography} from 'antd'

export default function DebtRepaymentComponent(props){
    return <div style={{fontSize: '1rem', marginTop: '2rem'}}>
        <Typography.Text strong>Account No.: </Typography.Text> <Typography.Text copyable>{props.campaign.virtual_acc_no}</Typography.Text><br/>
        <Typography.Text strong>IFSC Code: </Typography.Text> <Typography.Text copyable>{props.campaign.virtual_acc_ifsc}</Typography.Text><br/>
        <Typography.Text strong>Beneficiary Name: </Typography.Text> <Typography.Text copyable>{props.campaign.virtual_acc_name}</Typography.Text><br/>
        <br/><br/>
        <Typography.Text style={{fontSize: '1.4rem'}} strong>Amount Received: </Typography.Text> <Typography.Text>&#8377; {props.campaign.debt_amount_received}</Typography.Text><br/>
    </div>
}