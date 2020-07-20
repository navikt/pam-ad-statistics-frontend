import React from 'react';
import Chart from "react-apexcharts";

const ReferrarChart = (props) => {

  const test = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: props.referrals 
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

export default ReferrarChart;