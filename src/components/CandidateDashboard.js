import React from 'react'
import CandidateSearchHits from './DashboardComponents/CandidateSearchHits';
import { CandidateDataContext, CandidateDataProvider } from '../CandidateDataContext';

const CandidateDashboard = () => {

    return (

        <CandidateDataProvider>
            <CandidateSearchHits/>
        </CandidateDataProvider>

    )

};

export default CandidateDashboard;