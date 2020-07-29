import React from 'react'

const CandidateSearchHits = () => {

    //var hits = 0;

    var hits = 3;

    return (
        <div> {hits ? 
            <React.Fragment>
                <div className = "text-component__top-left"> {hits} </div>
                <div className = "text-component__bot-left"> forekomster i kandidatsøk de siste 2 ukene </div>
            </React.Fragment> : 
            (<>(Insert: ressurser hvor hvordan dukke opp i flere søk)</>)} </div>
    )

}

export default CandidateSearchHits;