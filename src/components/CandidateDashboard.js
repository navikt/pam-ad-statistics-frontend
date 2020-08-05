import React from 'react'
import CandidateSearchHits from './DashboardComponents/CandidateSearchHits';
import {CandidateStore} from '../store/index';
import { Provider } from 'react-redux';

const CandidateDashboard = () => {

    return (

        <Provider store={CandidateStore()}>
            <CandidateSearchHits/>
        </Provider>

    )

};

export default CandidateDashboard;