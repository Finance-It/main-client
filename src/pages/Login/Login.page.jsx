import React from 'react';
import './login.css';
import {Button, Form, Input, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import axios from 'axios'


const Login = (props) => {
    const [errors, setErrors] = React.useState('')
    const [status, setStatus] = React.useState('')

    const onFinish = async values => {
        setStatus('validating')
        setErrors('')
        try {
            const res = await axios.post(`${process.env.REACT_APP_MAIN_SERVER}/auth/jwt/create/`, values)
            setStatus('success')
            setErrors('')
            const token = res.data.access
            sessionStorage.setItem('token', token)
            props.history.push('/')
        } catch (e) {
            setStatus('error')
            setErrors('\nInvalid Email or Password!')
        }
    };

    return (
        <div className='login-container'>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}

            >
                <Typography.Title align={'center'}>Login</Typography.Title>
                <br/><br/>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input size='large' prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email" errors={'dd'}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                    help={errors}
                >
                    <Input
                        size='large'
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button size='large' type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <br/><br/>
                </Form.Item>
            </Form>
        </div>

    );
};

export default Login