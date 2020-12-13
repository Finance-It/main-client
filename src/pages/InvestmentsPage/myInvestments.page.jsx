import React, {useEffect, useState} from 'react'
import {Col, Row} from "antd";
import axios from "axios";
import ProSkeleton from '@ant-design/pro-skeleton';
import MyInvestmentCard from "../../components/Investments/myinvestmentcard.component";


function MyInvestmentsPage(props) {

    useEffect(() => {
        getInvestments();
    }, []);

    const [investments, setInvestments] = useState([])
    const [loading, setLoading] = useState(true)

    const getInvestments = () => {
        const AuthStr = 'Bearer '.concat(sessionStorage.getItem('token'));
        axios
            .get(process.env.REACT_APP_MAIN_SERVER + "/investments/",
                {headers: {Authorization: AuthStr}}
            )
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    setInvestments(res.data);
                    console.log(res.data)
                    setLoading(true)
                }
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            {
                loading ? (
                    <ProSkeleton/>) : (
                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <Row gutter={[0, 32]} justify="center" style={{justifyContent: "center", marginLeft: "8%"}}>

                            {investments.map((investment) => (
                                <Col key={investment.id} sm={24} md={8} lg={6}>
                                    <MyInvestmentCard campaign={investment.campaign} status={investment.status}
                                                      amount={investment.amount} type={investment.campaign.type}
                                                      paymentLink={investment.razorpay_payment_link}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                )
            }

        </div>
    )
}

export default MyInvestmentsPage

