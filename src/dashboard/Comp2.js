import React, { Fragment, use, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SliderPage from './SliderPage';
import logo from '../images/image20.jpg';

function Comp2() {

    return (
        <Fragment>
           <SliderPage/>

            <img src='myimg.jpg' alt='...' width={'100%'}/>
            <img src={logo} alt='...' width={'100%'}/>
            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOVPULx8u-B1EtrgYCuSQmcvPo2VsYhH9zw09f1sJpanAeiskos5LPes5P844Wot0LZbPFdiDvBA0lVSBsofrCfCS9l26xQ3uIrJVV7A' alt='...' width={'100%'}/>

        </Fragment>
    )
}

export default Comp2