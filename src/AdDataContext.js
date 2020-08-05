import React, { createContext, useEffect} from 'react';
//import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import {fetchAdAction} from './store/AdActions'


export const AdDataContext = createContext({});

export const AdDataProvider = props => {

    /*
    const [data, setData] = useState({
        "pageViews": 0,
        "averageTimeOnPage": [0],
        "referrals": [],
        "viewsPerReferral": [],
        "dates": [],
        "viewsPerDate": []
    });
    */
   const dispatch = useDispatch()


    const data = useSelector(
        (state) => {
            console.log(state.AdReducer)
            return state.AdReducer
        })

    useEffect (() => {
        dispatch(fetchAdAction())
    }, [dispatch])


    /*
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
    */

    return (
        <AdDataContext.Provider value = {{data}}>
             {props.children}
        </AdDataContext.Provider>
    );
}
