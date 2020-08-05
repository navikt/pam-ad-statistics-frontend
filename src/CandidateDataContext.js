import React, {useState, createContext, useEffect} from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import CandidateReducer from './store/CandidateReducer'
import { fetchCandidateAction } from './store/CandidateActions';

export const CandidateDataContext = createContext({});

export const CandidateDataProvider = props => {

    const dispatch = useDispatch()

    const data = useSelector(
        (state) => {
            console.log(state.CandidateReducer)
            return state.CandidateReducer 
        }
    );


 
    useEffect(()=> {
        dispatch(fetchCandidateAction())
    }, []);

    //window.location.pathname
    //keep for using when not utilizing local host
    /*
    useEffect(() => {
        const pathList = ('nav.no/stillinger/stilling/d1508053-0982-401d-985d-e9660d2a0cbc').split("/")
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
    */

    return (
        <CandidateDataContext.Provider value = {{data}}>
             {props.children}
        </CandidateDataContext.Provider>
    );
}