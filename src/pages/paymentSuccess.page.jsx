import React from 'react'
import {Button, Result} from "antd";

export default function PaymentSuccessPage(props){
    return <>
        <Result
            status="success"
            title="Payment Successful!"
            extra={[
                <Button href={'/investments'} type="primary" key="console">
                    Go to My Investments
                </Button>
            ]}
        />,
    </>
}