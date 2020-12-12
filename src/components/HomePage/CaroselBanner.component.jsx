import React from 'react'
import {Button, Card, Space, Typography} from 'antd'
import { useHistory } from "react-router";

const {Title} = Typography

const CaroselBanner = () => {

    const history = useHistory();
    return (
        <div className="carousel-banner">
            <Card hoverable>
                <Title level={2}>Crowd Funding Platform for Startups and
                    SMEs</Title>
                <Space><Button onClick={()=>{history.push('/signup')}} type='primary' size='large'>SIGN UP</Button></Space>
            </Card>
        </div>
    )
}

export default CaroselBanner