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




    //window.location.pathname
    //keep for using when not utilizing local host

    useEffect(() => {
        const pathList = ('nav.no/stillinger/stilling/66480c7a-4a3a-45ce-9781-b0832c0145ca').split("/")
        const id = pathList.pop()
        var type = 'ad'
        const fetchData = async () => {
            const result = await axios(
            'http://localhost:9000/'+ type + '/' + id,
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
