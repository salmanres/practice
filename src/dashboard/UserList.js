import axios from 'axios';
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import { data, Link } from 'react-router-dom';
import DetailComp from './DetailComp';

function UserList() {

    const [mydata, setmydata] = useState();
    const [userdata, setuserdata] = useState();

    const getUserData = useCallback(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data);
                setmydata(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const getuserdata = async (id) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log('userdta', response.data);
            setuserdata(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const memoizedData = useMemo(() => mydata, [mydata]);

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <Fragment>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">PHONE</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">CITY</th>
                        <th scope="col">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        memoizedData ? memoizedData.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                {/* <td><Link to={`/userdetails/${item.id}`}>DETAILS</Link></td> */}
                                <td><button onClick={() => getuserdata(item.id)}>details</button></td>
                            </tr>
                        )) : <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }
                </tbody>
            </table>
            <DetailComp mydata={userdata} />
        </Fragment>
    )
}

export default UserList