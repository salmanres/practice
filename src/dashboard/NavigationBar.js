import React, { Fragment } from 'react'
import { Link} from 'react-router-dom'

function NavigationBar() {

     

    return (
        <Fragment>
            <div className='mynav'>
                <Link to="/about">about </Link>
                <Link to="/services">SERVICES</Link>
            </div>
        </Fragment>
    )
}

export default NavigationBar