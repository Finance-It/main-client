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
            const res = await axios.post('/login', values)
            setStatus('success')
            setErrors('')
            const token = res.data.token
            sessionStorage.setItem('token', token)
            props.history.replace('/')
        } catch (e) {
            setStatus('error')
            setErrors('\nInvalid Email or Password!')
        }
    };

    return (
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
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
                validateStatus={status}
                hasFeedback={true}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email" errors={'dd'}/>
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
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                <br/><br/>
                {/*Or <a href="/register">register now!</a>*/}
            </Form.Item>
        </Form>
    );
};

export default Login