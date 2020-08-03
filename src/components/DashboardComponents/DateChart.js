import React, {useContext} from 'react';
import Chart from "react-apexcharts";
import {AdDataContext} from '../../AdDataContext'

const DateChart = () => {

  const { data } = useContext(AdDataContext);


  const dateify = (date) => {
    return date.slice(6,8) +'.'+ date.slice(4,6) +'.'+ date.slice(0,4)
  }

  const dates = data.dates.map(date =>
    dateify(date))

  const viewsPerDate = data.viewsPerDate

  
  const test = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: dates
      },
      colors: ['#3ec1ab'],
    },
    series: [
      {
        name: "Sidevisninger",
        data: viewsPerDate
      }
    ]
  };

  return (
    <div className = "chart-components__child">
      <div className = "chart-title"> Visninger etter dato </div>
      <Chart
        options={test.options}
        series={test.series}
        type="bar"
        width="100%"
      />
    </div>
     
  );
};

export default DateChart;