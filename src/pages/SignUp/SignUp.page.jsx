import React from 'react';
import '../Login/login.css';
import {Button, notification, Form, Input, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import axios from 'axios'


const SignUp = (props) => {
    const [errors, setErrors] = React.useState('')
    const [status, setStatus] = React.useState('')

    const onFinish = async values => {
        setStatus('validating')
        setErrors('')

        if(values.password !== values.confirm_password)
        {
            notification['warning']({
                message: 'Passwords not matched'
            });
            setStatus('error')

            return;
        }
        try {
            console.log(values)
            values.email = values.username
            await axios.post(`${process.env.REACT_APP_MAIN_SERVER}/auth/users/`, values)
            setStatus('success')
            setErrors('')
            props.history.replace('/login')
            notification['success']({
                message: 'User Registered',
                description:
                    'Please Login Now!',
            });
            setStatus('error')
        } catch (e) {
            console.log(e.response)
            let errors = '\n'
            if(e.response.data.username){
                errors += e.response.data.username.join("\n")
            }
            if(e.response.data.password){
                errors += e.response.data.password.join("\n")
            }
            setStatus('error')
            setErrors(errors)
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
                <Typography.Title align={'center'}>Sign Up</Typography.Title>
                <br/><br/>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                    validateStatus={status}
                    hasFeedback={true}
                >
                    <Input type="email"
                           size='large' prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"
                           errors={'dd'}/>
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

                >
                    <Input
                        size='large'
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="confirm_password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password again!',
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
                        placeholder="Confirm Password"
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

export default SignUp