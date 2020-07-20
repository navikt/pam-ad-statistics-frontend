import React, { useState, useEffect } from 'react';
import axios from "axios";

const BackendHook = () => {

    const [data, setData] = useState("hei");

    //const path = window.location.pathname.split("/").pop()
    //keep for using when not utilizing local host

    const path = 'd1508053-0982-401d-985d-e9660d2a0cbc'

    const fetchData = async () => {
        const result = await axios(
        'http://localhost:8080/ad/' + path,
        );
        console.log(result.data.referrals.google)
        setData(result.data);
    };
}

export default BackendHook;