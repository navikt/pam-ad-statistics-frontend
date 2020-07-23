import React from 'react';
import Chart from "react-apexcharts";

const DateChart = () => {

  const test = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["19.02","20.02","21.02","17.05"]
      },
      colors: ['#3ec1ab'],
    },
    series: [
      {
        name: "Sidevisninger",
        data: [56,34,45,12]
      }
    ]
  };

  return (
    <div>
      <h3 id = "chart-title"> Visninger etter dato </h3>
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