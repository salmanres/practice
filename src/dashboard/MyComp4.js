import React, { Fragment, lazy, Suspense } from 'react'
const UserList = lazy(() => import('./UserList')); //we are lazily importing this component

function MyComp4() {
    return (
        <Fragment>
            <Suspense fallback={<p>loading list</p>}>
                <UserList />
            </Suspense>
        </Fragment>
    )
}

export default MyComp4