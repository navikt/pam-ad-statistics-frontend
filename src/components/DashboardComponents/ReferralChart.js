import React, {useContext} from 'react';
import Chart from "react-apexcharts";
import {AdContext} from '../../AdContext';

const ReferralChart = () => {

  const { data } = useContext(AdContext);
  
  var options = {
    series:  data.viewsPerReferral,
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: data.referrals,
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


  var blabla = {
    options: {
      chart: {
        id: "basic-bar"
      },
      colors: ['#3ec1ab'],
      xaxis: {
        categories: data.referrals
      }
    },
    series: [
      {
        name: "series-1",
        data: data.viewsPerReferral
      }
    ]
  };

  return (
    
    <div>
      <Chart
        options={options}
        labels={options.labels}
        series={options.series}
        type="donut"
        width="500"
      />

    </div> 
  );

  /*
        <Chart
        options={blabla.options}
        series={blabla.series}
        type="bar"
        width="500"
      />
  */
};

export default ReferralChart;