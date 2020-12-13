import React from 'react';
import './campaign.css';
import {Button, Form, Input, Select, Typography} from 'antd';
import {
    UserOutlined,
    UsergroupAddOutlined,
    DotChartOutlined,
    CalendarOutlined,
    NumberOutlined,
    BankOutlined,
    DollarOutlined,
    LinkOutlined
} from '@ant-design/icons';
import axios from 'axios'
import TextArea from 'antd/lib/input/TextArea';


const NewCampaign = (props) => {
    const [status, setStatus] = React.useState('')
    const [type, setType] = React.useState(null)

    const onFinish = async values => {
        if (sessionStorage.getItem('token'))
            axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;
        console.log('oni')
        setStatus('validating')
        values.end_date = new Date(values.end_date)
        try {
            const res = await axios.post(`${process.env.REACT_APP_MAIN_SERVER}/campaigns/`, values)
            setStatus('success')
            console.log(res.data);
            props.history.push('/mycampaigns')
        } catch (e) {
            setStatus('error')
        }
    };

    return (
        <div className='campaign-container'>
            <br /><br /><br /><br /><br /><br />
            <Form
                name="new_campaign"
                className="campaign-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}

            >
                <Typography.Title align={'center'}>Add a new Campaign</Typography.Title>
                <br /><br />
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Campaign Name!',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Campaign Name" />
                </Form.Item>
                <Form.Item
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Description',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <TextArea size='large' type='text' placeholder="Short Description" />
                </Form.Item>
                <Form.Item
                    name="image_url"
                    rules={[
                        {
                            required: false,
                            message: 'Please input Image URL!',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' prefix={<LinkOutlined className="site-form-item-icon" />} placeholder="Banner Image URL" />
                </Form.Item>
                <Form.Item
                    name="pitch"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Pitch',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <TextArea size='large' type='text' placeholder="Pitch" />
                </Form.Item>
                <Form.Item
                    name="business_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Business Name!',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' prefix={<UsergroupAddOutlined className="site-form-item-icon" />} placeholder="Business Name" />
                </Form.Item>
                <Form.Item
                    name="business_type"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Business Type!',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Select size='large' prefix={<DotChartOutlined className="site-form-item-icon" />} placeholder="Business Type">
                        <Select.Option value={'private_limited'} >Private Limited</Select.Option>
                        <Select.Option value={'proprietorship'} >Proprietorship</Select.Option>
                        <Select.Option value={'partnership'} >Partnership</Select.Option>
                        <Select.Option value={'individual'} >Individual</Select.Option>
                        <Select.Option value={'public_limited'} >Public Limited</Select.Option>
                        <Select.Option value={'llp'} >LLP</Select.Option>
                        <Select.Option value={'trust'} >Trust</Select.Option>
                        <Select.Option value={'society'} >Society</Select.Option>
                        <Select.Option value={'ngo'} >NGO</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="account_no"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Account No.',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' prefix={<NumberOutlined className="site-form-item-icon" />} placeholder="xxxxx-xxxx-xxxxx" />
                </Form.Item>
                <Form.Item
                    name="ifsc_code"
                    rules={[
                        {
                            required: true,
                            message: 'Please input IFSC Code',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' prefix={<BankOutlined className="site-form-item-icon" />} placeholder="BANK0123456" />
                </Form.Item>
                <Form.Item
                    name="beneficiary_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Beneficiary Name',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Beneficiary Name" />
                </Form.Item>
                <Form.Item
                    name="target_amount"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Target Amount',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' type={'number'} prefix={<DollarOutlined className="site-form-item-icon" />} placeholder="Target Amount" />
                </Form.Item>
                <Form.Item
                    name="min_investment"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Minimum investment',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' type={'number'} prefix={<DollarOutlined className="site-form-item-icon" />} placeholder="Minimum investment" />
                </Form.Item>
                End Date
                <Form.Item
                    name="end_date"
                    rules={[
                        {
                            required: true,
                            message: 'Please input End Date',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' type='date' prefix={<CalendarOutlined className="site-form-item-icon" />} placeholder="End Date" />
                </Form.Item>
                <Form.Item
                    name="type"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Campaign Type!',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Select onChange={val=>setType(val)} size='large' prefix={<DotChartOutlined className="site-form-item-icon" />} placeholder="Campaign Type">
                        <Select.Option value={'Reward'} >Reward Based</Select.Option>
                        <Select.Option value={'Donation'} >Donation Based</Select.Option>
                        <Select.Option value={'Debt'} >Debt Based</Select.Option>
                        <Select.Option value={'Equity'} >Equity Based</Select.Option>
                    </Select>
                </Form.Item>
                {type === 'Reward' && <Form.Item
                    name="reward"
                    rules={[
                        {
                            required: true,
                            message: 'Please input reward',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' prefix={<DollarOutlined className="site-form-item-icon"/>}
                           placeholder="Reward"/>
                </Form.Item>}
                {type === 'Debt' && <Form.Item
                    name="debt_interest"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Debt Interest',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' prefix={<DollarOutlined className="site-form-item-icon"/>}
                           placeholder="Debt Interest"/>
                </Form.Item>}
                {type === 'Debt' && <Form.Item
                    name="debt_period"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Debt Period',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' prefix={<DollarOutlined className="site-form-item-icon"/>}
                           placeholder="Debt Period"/>
                </Form.Item>}

                <Form.Item>
                    <Button size='large' type="primary" htmlType="submit" className="campaign-form-button">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <br /><br />
        </div>

    );
};

export default NewCampaign