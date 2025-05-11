import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserdetailsPage() {

    const {id} = useParams();
    const [data, setData] = useState();

    const getdata = async()=> {
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log(response.data);
            setData(response.data);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getdata();
    }, []);

  return (
    <Fragment>
        <button> back</button>
        <h2>{data && data.name}</h2>
    </Fragment>
  )
}

export default UserdetailsPage