import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";

export const CandidateDataContext = createContext({});

export const CandidateDataProvider = props => {

    const [data, setData] = useState({
        "pageViews": 0
    });

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const id = parseInt(urlSearchParams.get('candidateID'));
        const fetchData = async () => {
            const result = await axios(
            'http://localhost:9000/api/candidate/' + id,
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