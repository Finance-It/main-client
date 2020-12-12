import React from 'react'
import {Alert, Button, Col, Form, Input, Row} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import axios from "axios";

export default function FundComponent(props){
    const [view, setView] = React.useState(0)
    const [amount, setAmount] = React.useState(0)
    const [isAmountValid, setAmountValid] = React.useState(true)
    const [paymentLink, setPaymentLink] = React.useState(null)

    function handleAmountChange(e){
        const amt = e.target.value
        if(!isNaN(amt)) {
            setAmountValid(amt >= props.minAmount)
            setAmount(amt)
        }
    }

    async function handleFund(){
        setView(2)
        const data = {
            campaign: props.campaignId,
            amount
        }
        try {
            const res = await axios.post(`${process.env.REACT_APP_MAIN_SERVER}/investments/invest`, data)
            const investmentId = res.data.id
            setView(3)
            const res1 = await axios.post(`${process.env.REACT_APP_MAIN_SERVER}/payments/investments/${investmentId}`, {})
            console.log(res1.data)
            setPaymentLink(res1.data.link)
            setView(4)
        } catch(e){
            alert('Some error occurred')
        }
    }

    return <div style={{width: '100%', maxWidth: '15rem', marginTop: '1.5rem'}}>
        {view === 0 && <div>
            <Button block type={'primary'} onClick={_=>setView(1)}>Fund</Button>
        </div>}
        {view === 1 && <div>
            <Form>
                <Row gutter={8}>
                    <Col span={20}>
                        <Form.Item hasFeedback validateStatus={!isAmountValid ? 'error' : 'success'} help={!isAmountValid && `Amount should be at-least ${props.minAmount}`}>
                            <Input prefix={<>&#8377;</>} placeholder={'Amount'} value={amount} onChange={handleAmountChange} />
                        </Form.Item>
                    </Col>
                    <Col span={2}>
                        <Form.Item>
                            <Button type={'primary'} disabled={!isAmountValid} onClick={handleFund} >
                                Fund
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>}
        {view === 2 && <div>
            <Alert message={<><LoadingOutlined />&nbsp; Processing your request</>} />
        </div>}
        {view === 3 && <div>
            <Alert message={<><LoadingOutlined />&nbsp; Generating Payment Link</>} />
        </div>}
        {view === 4 && <div>
            <Button href={paymentLink} type={'primary'} color={'success'}>Proceed to Pay</Button>
        </div>}
    </div>
}