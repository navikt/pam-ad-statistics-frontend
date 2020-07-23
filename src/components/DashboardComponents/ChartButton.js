import React, {useState} from 'react'
import DateChart from './DateChart'
import ReferralChart from './ReferralChart'

const ChartButton = () => {

    var [showCharts, setShowCharts] = useState(false);

    const toggleHidden = () => {
        setShowCharts(!showCharts);
    }

    const charts = () => {
        return (
            <div className = "chart-components">
                <DateChart/>
                <ReferralChart/>
            </div>
        );
    };

    return (
    <div>
        <button id = "chart-button" onClick = {toggleHidden}>Din oversikt</button>
        {showCharts ? charts() : null }
    </div>
    );
};

export default ChartButton;