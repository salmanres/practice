import React, { Fragment, use, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Comp2() {

    //state  - - acts like a variable container

    const [count, setCount] = useState(1); //hook for state mgmt

    const myref = useRef();

    const navigate = useNavigate();

    const gotocomp3 = () => {
        navigate('/about');
    };

    const selectinput = () => {
        myref.current.focus();
    };

    // auto update the component

    const myFunction = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    }

    const welcomeUser = () => {
        console.log('hello erveryone');
    };

    const showWelcomeMsg = () => {

    }

    useEffect(() => {
        console.log('element mounted');
        selectinput();
    }, []); // array erpresenting dependencies


    const [number, setNumber] = useState(0);
    return (
        <Fragment>

            <button onClick={myFunction}>INCREASE COUNT</button>
            <h1>{count}</h1>
            <button onClick={decrease} >DECREASE COUNT</button>
            <h1>new updated code</h1>
            <br />
            <label>username: </label>
            <input ref={myref} type='text' />
            <Link to={`/about/${count}`}>about page</Link>
            <button onClick={gotocomp3}>about</button>
            <br/>
            <br/>
            <ul>
                <li><Link to='/register'>register</Link> </li>
            </ul>

        </Fragment>
    )
}

export default Comp2