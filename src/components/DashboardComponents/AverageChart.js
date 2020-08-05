import React from 'react'
import {useSelector} from 'react-redux'

const AverageChart = () => {

  const data = useSelector(
    (state) => {
        return state.AdReducer
    }
);

  const averageTimeOnPage = data.averageTimeOnPage
  
  var totalTimeOnPage = data.averageTimeOnPage.reduce((acc, val)=>
  acc + val)

  const totalAverage = totalTimeOnPage/averageTimeOnPage.length

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