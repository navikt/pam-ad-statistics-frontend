import React, {useContext} from 'react'
import {AdDataContext} from '../../AdDataContext'


const TotalPageviews = () => {

    const { data } = useContext(AdDataContext);

    console.log()


    return(
        <div className = "text-component">
            <div className = "text-component__top-left">{data.pageViews}</div>
            <div className = "text-component__bot-left">Klikk på annonsen</div>
        </div>
        
    );

};

export default TotalPageviews;