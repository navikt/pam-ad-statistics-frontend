import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";

export const DataContext = createContext({});

export const DataProvider = props => {

    const [data, setData] = useState({
        "pageViewsAd": 0,
        "pageViewsCandidate": 0,
        "averageTimeOnPage": [0
        ],
        "referrals": [
        ],
        "viewsPerReferral": [
        ],
        "dates" : [
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
        'http://localhost:9000/ad/' + path,
        );
        setData(result.data);
    };

    
    fetchData();
    }, []);

    return (
        <DataContext.Provider value = {{data}}>
             {props.children}
        </DataContext.Provider>
    );
}
