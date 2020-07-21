import React, {useContext} from 'react'
import {AdContext} from '../../AdContext'


const AverageChart = () => {

    const { data } = useContext(AdContext);

    var minute = Math.floor(data.average / 60)
    var seconds = Math.floor(data.average - minute * 60)

    return(
        <div>
            <h1>Gjejjonsnittlig visningstid</h1>
            <h2>{minute} m {seconds} sek</h2>
        </div>
    );

};

export default AverageChart;