import React, {useContext} from 'react'
import {AdContext} from '../../AdContext'


const AverageChart = () => {

  const { data } = useContext(AdContext);

  const averageTimeOnPage = data.averageTimeOnPage
´
  var totalTimeOnPage = data.averageTimeOnPage.reduce((acc, val)=>
  acc + val)

  const totalAverage = totalTimeOnPage/averageTimeOnPage.length

  var minute = Math.floor(totalAverage / 60)
  var seconds = Math.floor(totalAverage - minute * 60)

  return(
    <div>
      <h1>{minute} m {seconds} sek</h1>
      <h2>Gjennomsnittlig tid sett på annonsen</h2>
    </div>
  );
};

export default AverageChart;