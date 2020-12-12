import React from 'react'
import {Typography} from "antd";

export default function PayoutAccComponent(props){
    return <div style={{fontSize: '1rem', marginTop: '2rem'}}>
        <Typography.Text strong>Account No.: </Typography.Text> <Typography.Text copyable>{props.campaign.account_no}</Typography.Text><br/>
        <Typography.Text strong>IFSC Code: </Typography.Text> <Typography.Text copyable>{props.campaign.ifsc_code}</Typography.Text><br/>
        <Typography.Text strong>Beneficiary Name: </Typography.Text> <Typography.Text copyable>{props.campaign.beneficiary_name}</Typography.Text><br/>
    </div>
}