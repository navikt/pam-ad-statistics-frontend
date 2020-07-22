import React, {useContext} from 'react'
import {AdContext} from '../../AdContext'


const TotalPageviews = () => {

    const { data } = useContext(AdContext);


    return(
        <div>
            <h1>{data.sidevisninger}</h1>
            <h2>Totalt antall visninger</h2>
        </div>
        
    );

};

export default TotalPageviews;