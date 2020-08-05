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
            return state.AdReducer
        })

    useEffect (() => {
        dispatch(fetchAdAction())
    }, [dispatch])

    //window.location.pathname
    //keep for using when not utilizing local host

    /*
    useEffect(() => {
        const pathList = ('nav.no/stillinger/stilling/d1508053-0982-401d-985d-e9660d2a0cbc').split("/")
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
    */

    return (
        <AdDataContext.Provider value = {{data}}>
             {props.children}
        </AdDataContext.Provider>
    );
}
