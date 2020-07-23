import React, {useContext} from 'react';
import Chart from "react-apexcharts";
import {AdContext} from '../../AdContext';

const ReferralChart = () => {

  const { data } = useContext(AdContext);
  const shortenedReferrals = data.referrals.map(e => e.split('/')[0]);

  console.log(shortenedReferrals)


  const sortingAndRemovingOfDuplicate = (a,b) => {
    var list = [];
    for (var j = 0; j < a.length; j++) 
        list.push({'path': a[j], 'views': b[j]});
  
    var accValue = list.filter(referal =>
                referal.path == 'nav.no')
                .reduce(function(_this, val) {
                  return _this + val.views
              }, 0);

    list = list.filter(element =>
      element.path != 'nav.no')
    list.push({'path': 'nav.no', 'views': accValue})
    list.sort(function(a, b) {
        return ((a.views > b.views) ? -1 : ((a.views === b.views) ? 0 : 1));
    });
    const c = []
    const d = []

    for (var k = 0; k < list.length; k++) {
        c[k] = list[k].path;
        d[k] = list[k].views;
    }

    return [c,d]

  }

  const referralsAndViews = sortingAndRemovingOfDuplicate(shortenedReferrals,data.viewsPerReferral)
  var options = {
    series:  referralsAndViews[1],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: referralsAndViews[0],
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
        categories: referralsAndViews[0]
      }
    },
    series: [
      {
        name: "series-1",
        data: referralsAndViews[1]
      }
    ]
  };

  return (
    
    <div>
      <h3 id = "ChartTitle"> Hvor brukerne har funnet annonsen </h3>
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