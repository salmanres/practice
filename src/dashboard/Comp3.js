import React, { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Comp3() {

  const navigate = useNavigate();
  const mynumber = useParams();
  console.log(mynumber);

  const register = () => {
    alert('user registered');
    navigate('/');
  }

  const back = () => {
    navigate(-1);
  }

  return (
    <Fragment>
        <h1>{mynumber.id}</h1>
        <h1>register</h1>
        <input type='text' placeholder='username'/>
        <br/>
        <button onClick={register}>register</button>
        <button onClick={back}>back</button>
    </Fragment>
  )
}

export default Comp3