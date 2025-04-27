import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserDataPage() {

    const [data, setData] = useState({});
    const navigate = useNavigate();

    const getdata = () => {
        
        setData(JSON.parse(localStorage.getItem('userdata')));
    };

    useEffect(()=>{
        getdata();
    }, []);

  return (
    <Fragment>
        <button onClick={()=>navigate(-1)}> back button</button>
        <h1>name: {data.username}</h1>
        <h1>email: {data.email}</h1>
        <h1>password: {data.password}</h1>
    </Fragment>
  )
}

export default UserDataPage