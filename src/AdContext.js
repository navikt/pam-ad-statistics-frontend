import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";

export const AdContext = createContext({});

export const AdProvider = props => {

    const [data, setData] = useState({
        "ID": "",
        "tittel": "",
        "sidevisninger": 0,
        "avgerage": 0,
        "referrals": [
        ],
        "viewsPerReferral": [
        ],
        "date" : [
        ],
        "viewsPerDate" : [
        ] 
    });

    //const path = window.location.pathname.split("/").pop()
    //keep for using when not utilizing local host

    const path = 'd1508053-0982-401d-985d-e9660d2a0cbc'

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios(
        'http://localhost:8080/ad/' + path,
        );
        setData(result.data);
    };

    
    fetchData();
    }, []);

    return (
        <AdContext.Provider value = {{data}}>
             {props.children}
        </AdContext.Provider>
    );
}