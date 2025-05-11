import React, { Fragment, useState } from 'react'

function DetailComp({mydata}) {
    console.log('mydata', mydata);
  return (
    <Fragment>
        <h1>{mydata && mydata.name}</h1>
    </Fragment>
  )
}

export default DetailComp