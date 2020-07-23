import React, {useContext} from 'react';
import Chart from "react-apexcharts";
import {AdContext} from '../../AdContext';

const ReferralChart = () => {

  const { data } = useContext(AdContext);

  var options = {
    options: {
      chart: {
        id: "basic-bar"
      },
      colors: ['#3ec1ab'],
      xaxis: {
        categories: data.referrals
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
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
      <h3 id = "chart-title"> Hvor brukerne har funnet annonsen </h3>

      <Chart
      options={options.options}
      series={options.series}
      type="bar"
      width="500"
    />
    </div> 
  );
};

export default ReferralChart;