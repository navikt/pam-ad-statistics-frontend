import React from 'react';
import Chart from "react-apexcharts";

const ReferrerChart = (props) => {

  var options = {
    series: props.pageviews,
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: props.referrals,
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  return (
    <div>
      <Chart
        options={options}
        labels={options.labels}
        series={options.series}
        type="pie"
        width="500"
      />
    </div>
     
  );
};

export default ReferrerChart;