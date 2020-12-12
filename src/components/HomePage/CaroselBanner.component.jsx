import React from 'react'
import {Button, Card, Space, Typography} from 'antd'

const {Title} = Typography

const CaroselBanner = () => {


    return (
        <div className="carousel-banner">
            <Card hoverable>
                <Title level={2}>Crowd Funding Platform for Startups and
                    SMEs</Title>
                <Space><Button type='primary' size='large'>SIGN UP</Button></Space>
            </Card>
        </div>
    )
}

export default CaroselBanner