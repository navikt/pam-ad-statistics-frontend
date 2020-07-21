import React, {useContext} from 'react'
import {AdContext} from '../../AdContext'


const TotalPageviews = () => {

    const { data } = useContext(AdContext);


    return(
        <div>
            <h1>Totalt antall visninger</h1>
            <h2>{data.sidevisninger}</h2>
        </div>
        
    );

};

export default TotalPageviews;