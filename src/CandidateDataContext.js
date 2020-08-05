import React, { createContext, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCandidateAction } from './store/CandidateActions';

export const CandidateDataContext = createContext({});

export const CandidateDataProvider = props => {

    const dispatch = useDispatch()

    const data = useSelector(
        (state) => {
            return state.CandidateReducer 
        }
    );


 
    useEffect(()=> {
        dispatch(fetchCandidateAction())
    }, [dispatch]);

    /*
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
    */

    return (
        <CandidateDataContext.Provider value = {{data}}>
             {props.children}
        </CandidateDataContext.Provider>
    );
}