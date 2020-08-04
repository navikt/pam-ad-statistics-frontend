import React, {useContext} from 'react'
import {AdContext} from '../../AdContext'


const TotalPageviews = () => {

    const { data } = useContext(AdContext);

    return(
        <div className = "text-component">
            <div className = "text-component__top-left">{data.pageViews}</div>
            <div className = "text-component__bot-left">Klikk på annonsen</div>
        </div>
        
    );

};

export default TotalPageviews;