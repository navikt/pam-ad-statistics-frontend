import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";

export const CandidateDataContext = createContext({});

export const CandidateDataProvider = props => {

    const [data, setData] = useState({
        "pageViews": 0
    });


    const pathList = ('nav.no/stillinger/stilling/d1508053-0982-401d-985d-e9660d2a0cbc').split("/")
    const id = pathList.pop()
    const type = 'candidate'

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
        <CandidateDataContext.Provider value = {{data}}>
             {props.children}
        </CandidateDataContext.Provider>
    );
}