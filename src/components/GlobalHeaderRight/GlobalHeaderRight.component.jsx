import React from 'react'
import {useHistory} from "react-router";
import {Space} from "antd"
import {Link} from 'react-router-dom'

const GlobalHeaderRight = ()=>{
    const history = useHistory();

    if(history.location.pathname === '/login' || history.location.pathname === '/signup'){
        return(
            <></>
        )
    }

    if(history.location.pathname === '/investments'){
        return(
            <Space size='medium'>
                <Link to='/' style={{color:"white", fontWeight:"bold"}}>Home</Link>
                <Link to='/login' style={{color:"white", fontWeight:"bold"}}>Log Out</Link>
            </Space>
        )
    }

    if(sessionStorage.getItem('token') === null){
        return(

            <Space size="middle" >
                <Link to='/login' style={{color:"white", fontWeight:"bold"}}>Sign In</Link>
                <Link to='/signup' style={{color:"white", fontWeight:"bold" }}>Sign Up</Link>
            </Space>
        )
    }

    return(
        <Space size="middle">
            <Link to='/investments' style={{color:"white", fontWeight:"bold"}}>My Investments</Link>
            <Link to='/mycampaigns' style={{color:"white", fontWeight:"bold"}}>My Campaign</Link>
            <Link to='/login' style={{color:"white", fontWeight:"bold"}}>Log Out</Link>
        </Space>
    )

}

export default GlobalHeaderRight