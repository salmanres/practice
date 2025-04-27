import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

    const [userdata, setUserdata] = useState({});
    const navigate = useNavigate();

    const getuserdata = (event) => { // ... is spred operator which keeps old data intact in an object when we update the data inside object
        setUserdata({
            ...userdata,
            [event.target.name]: event.target.value
        })
        console.log(userdata);
    };

    const register = () => {
        if(userdata) {
            if(userdata.password === userdata.confirmpass) {
            localStorage.setItem('userdata', JSON.stringify(userdata));
            alert('user registration successful!');
            navigate('/login');
        } else {
            alert('pssword mismatch!');
        }
    }else {
        alert('all fields are required!');
}
        
    };

return (
    <Fragment>
        <div className='register'>
            <div>
                <input type='text' placeholder='enter username' name='username' onInput={getuserdata} />
                <input type='email' placeholder='enter email' name='email' onInput={getuserdata} />
                <input type='password' placeholder='enter password' name='password' onInput={getuserdata} />
                <input type='text' placeholder='confirm password' name='confirmpass' onInput={getuserdata} />
                <button onClick={register} >REGISTER</button>
            </div>
        </div>
    </Fragment>
)
}

export default RegisterPage