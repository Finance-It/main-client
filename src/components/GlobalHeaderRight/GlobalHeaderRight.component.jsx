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
                <Link to='/'>Home</Link>
                <Link to='/login'>Log Out</Link>
            </Space>
        )
    }

    if(sessionStorage.getItem('token') === null){
        return(
            <></>
        )
    }

    return(
        <Space size='medium'>
            <Link to='/investments'>My Investments</Link>
            <Link to='/login'>Log Out</Link>
        </Space>
    )

}

export default GlobalHeaderRight