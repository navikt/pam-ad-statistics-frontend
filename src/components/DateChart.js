import React from 'react';
import Chart from "react-apexcharts";

const DateChart = (props) => {

  const test = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: props.date 
      }
    },
    series: [
      {
        name: "series-1",
        data: props.pageviews 
      }
    ]
  };

  return (
    <div>
      <Chart
        options={test.options}
        series={test.series}
        type="bar"
        width="500"
      />
    </div>
     
  );
};

export default DateChart;