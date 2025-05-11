import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function LoginPage() {
  const [data, setData] = useState({});
  const [prevdata, setPrevdata] = useState(JSON.parse(localStorage.getItem('userdata')) || []);
  const navigate = useNavigate();

  const getData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
    console.log(data);
  }

  const login = () => {
    const result = prevdata.filter((item) => item.email == data.email);
    console.log(result);
    if (result.password == data.password) {
      navigate('/userlist');
    } else {
      toast.error('ivalid username / password');
    }
  }
  return (
    <Fragment>
      <div className='container'>
        <div className='row mydiv3'>
          <div className='col-lg-4 mt-3 text-center'>
            <h2>LOGIN HERE</h2>
            <input type='email' className='form-control mb-2' placeholder='enter email' name='email' onInput={getData} />
            <input type='password' className='form-control mb-2' placeholder='enter password' name='password' onInput={getData} />
            <button onClick={login} type="button" className="btn btn-warning w-100 mt-3">LOGIN</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  )
}

export default LoginPage