import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";

export const CandidateDataContext = createContext({});

export const CandidateDataProvider = props => {

    const [data, setData] = useState({
        "pageViews": 0
    });

    console.log(data)

 


    //window.location.pathname
    //keep for using when not utilizing local host

    useEffect(() => {
        const pathList = ('nav.no/stillinger/stilling/IK473409').split("/")
        const id = pathList.pop()
        const type = 'candidate'
        const fetchData = async () => {
            const result = await axios(
            'http://localhost:9000/api/'+ type + '/' + id,
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