import React, {useContext} from 'react'
import {DataContext} from '../../DataContext'


const TotalPageviews = () => {

    const { data } = useContext(DataContext);

    console.log()


    return(
        <div className = "text-component">
            <div className = "text-component__top-left">{data.pageViewsAd}</div>
            <div className = "text-component__bot-left">Klikk på annonsen</div>
        </div>
        
    );

};

export default TotalPageviews;