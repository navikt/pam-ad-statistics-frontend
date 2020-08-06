import React, {useContext} from 'react'
import {AdDataContext} from '../../AdDataContext'


const AverageChart = () => {

  const { data } = useContext(AdDataContext);

  var totalTimeOnPage = data.averageTimeOnPage.reduce((acc, val, idx) => {
        return acc + val*(data.viewsPerReferral[idx])
    }, 0)

  const totalAverage = totalTimeOnPage/data.pageViews

  var minute = Math.floor(totalAverage / 60)
  var seconds = Math.floor(totalAverage - minute * 60)

  return(
    <div className = "text-component">
      {minute === 0 ? 
      ( <div className = "text-component__top-right">{seconds} sek</div> ) :
      ( <div className = "text-component__top-right">{minute} m {seconds} sek</div> )
      }
      <div className = "text-component__bot-right">Gjennomsnittlig tid sett på annonsen</div>
    </div>
  );
};

export default AverageChart;