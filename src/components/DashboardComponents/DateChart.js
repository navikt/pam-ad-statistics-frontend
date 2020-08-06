import React from 'react';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

const DateChart = () => {

  const data = useSelector(
    (state) => {
        return state.AdReducer
    }
);


  const dateify = (date) => {
    return date.slice(6,8) +'.'+ date.slice(4,6)
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