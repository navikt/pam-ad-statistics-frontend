import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";

export const DataContext = createContext({});

export const DataProvider = props => {

    const [data, setData] = useState({
        "pageViews": 0,
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


    const pathList = ('nav.no/stillinger/stilling/d1508053-0982-401d-985d-e9660d2a0cbc').split("/")
    const id = pathList.pop()
    var type = pathList.pop()

    if(type === 'stilling'){
        type = 'ad'
    }else{
        type = 'candidate'
    }

    console.log(id, type)

    //window.location.pathname
    //keep for using when not utilizing local host

    useEffect(() => {
    const fetchData = async () => {
        const result = await axios(
        'http://localhost:9000/'+ type + '/' + id,
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
