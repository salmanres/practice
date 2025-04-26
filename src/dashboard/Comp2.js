import React, { Fragment, useState } from 'react'

function Comp2() {

    //state  - - acts like a variable container

    const [count, setCount] = useState(1); //hook for state mgmt

    // auto update the component

    const myFunction = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <Fragment>

            <button onClick={myFunction}>INCREASE COUNT</button>
            <h1>{count}</h1>
            <button onClick={decrease} >DECREASE COUNT</button>

        </Fragment>
    )
}

export default Comp2