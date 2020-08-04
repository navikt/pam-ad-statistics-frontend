import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";

export const AdDataContext = createContext({});

export const AdDataProvider = props => {

    const [data, setData] = useState({
        "pageViews": 0,
        "averageTimeOnPage": [0],
        "referrals": [],
        "viewsPerReferral": [],
        "dates": [],
        "viewsPerDate": []
    });

    useEffect(() => {

        const urlSearchParams = new URLSearchParams(window.location.search);
        const id = urlSearchParams.get('adID');
        const fetchData = async () => {
            const result = await axios(
            'http://localhost:9000/api/ad/' + id,
            );
            setData(result.data);
    };

    
    fetchData();
    }, []);

    return (
        <AdDataContext.Provider value = {{data}}>
             {props.children}
        </AdDataContext.Provider>
    );
}
