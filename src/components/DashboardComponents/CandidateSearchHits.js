import React from 'react'

const CandidateSearchHits = () => {

    var hits = 5;

    return (
        <div> {hits ? 
            <React.Fragment>
                <div className = "text-component__top-left"> {hits} </div>
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