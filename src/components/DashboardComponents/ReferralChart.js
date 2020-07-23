import React, {useContext} from 'react';
import Chart from "react-apexcharts";
import {AdContext} from '../../AdContext';

const ReferralChart = () => {

  const { data } = useContext(AdContext);

  const shortenedReferrals = data.referrals.map(e => e.split('/')[0]);

  const referralMap = shortenedReferrals.map((e, i) => [e, data.viewsPerReferral[i]]);

  console.log(referralMap);

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
  
  /*
  <Chart
    options={options}
    labels={options.labels}
    series={options.series}
    type="donut"
    width="500"
  />
  */
};

export default ReferralChart;