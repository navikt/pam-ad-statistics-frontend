import React, { useState, useEffect } from 'react';
import { useData } from "../hooks/BackendData.js";
import axios from "axios";

const TestHook = () => {

    /*
    const data = useData();

    useEffect(() => {
        data.getData();
    }, []);
*/

    const [data, setData] = useState("hei");

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios(
        'http://localhost:8080/ad/d1508053-0982-401d-985d-e9660d2a0cbc',
        );
    
        setData(result.data);
    };
    
    fetchData();
    }, []);

    return (
        <div>
            <h1>d1508053-0982-401d-985d-e9660d2a0cbc</h1>
            <p>sidevisninger: {data.sidevisninger}</p>
            <p>average: {data.average}</p>
        </div>
      );

};

export default TestHook;

