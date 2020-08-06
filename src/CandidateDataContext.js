import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";

export const CandidateDataContext = createContext({});

export const CandidateDataProvider = props => {

    const [data, setData] = useState({
        "pageViews": 0
    });


 


    //window.location.pathname
    //keep for using when not utilizing local host

    useEffect(() => {
        const pathList = ('nav.no/stillinger/stilling/66480c7a-4a3a-45ce-9781-b0832c0145ca').split("/")
        const id = pathList.pop()
        const type = 'candidate'
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