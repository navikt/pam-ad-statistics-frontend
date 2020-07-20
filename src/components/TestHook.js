import React, { useState, useEffect } from 'react';
import axios from "axios";


const TestHook = ({setData, data}) => {
    

    //const path = window.location.pathname.split("/").pop()
    //keep for using when not utilizing local host

    const path = 'd1508053-0982-401d-985d-e9660d2a0cbc'

    console.log(data)

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios(
        'http://localhost:8080/ad/' + path,
        );
        console.log(result.data.referrals.google)
        setData(result.data);
    };
    
    fetchData();
    }, []);

    const referralsAsList = () => {

    };

    return (
        <div>
            <h1>
                <p>{path}</p>
            </h1>
            <p>sidevisninger: {data.sidevisninger}</p>
            <p>average: {data.average}</p>
            <p>referrals: {referralsAsList()}</p>
        </div>
      );

};

export default TestHook;

