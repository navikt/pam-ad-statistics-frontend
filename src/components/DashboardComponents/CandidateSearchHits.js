import React, { useContext } from 'react'
import { CandidateDataContext } from '../../CandidateDataContext';

const CandidateSearchHits = () => {

    const {data} = useContext(CandidateDataContext);

    return (
        <div> {data.pageViews ? 
            <React.Fragment>
                <div className = "text-component__top-left"> {data.pageViews} </div>
                <div className = "text-component__bot-left"> forekomster i kandidatsøk denne uken </div>
            </React.Fragment> 
            : null
            } 
        </div>
    )

}
/*
            <React.Fragment>
                <div>Tips til hvordan du kan dukke opp i flere kandidatsøk:</div>
                <a href = "https://arbeidsplassen.nav.no/slik-skriver-du-en-god-cv"> Slik skriver du en god cv </a>
            </React.Fragment>
*/

export default CandidateSearchHits;