import React from 'react'
import {useSelector} from 'react-redux'

const TotalPageviews = () => {

    const data = useSelector(
        (state) => {
            return state.AdReducer
        }
    );


    return(
        <div className = "text-component">
            <div className = "text-component__top-left">{data.pageViews}</div>
            <div className = "text-component__bot-left">Klikk på annonsen</div>
        </div>
        
    );

};

export default TotalPageviews;