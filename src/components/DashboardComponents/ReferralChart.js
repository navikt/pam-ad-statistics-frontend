import React, {useContext} from 'react';
import Chart from "react-apexcharts";
import {AdContext} from '../../AdContext';

const ReferralChart = () => {

  const { data } = useContext(AdContext);
  const shortenedReferrals = data.referrals.map(e => e.split('/')[0]);


  const sortingAndRemovingOfDuplicate = (referrals,numberOfViewsList) => {
    var list = [];
    for (var j = 0; j < referrals.length; j++) 

        list.push({'path': referrals[j], 'views': numberOfViewsList[j]});
  
    var accValue = list.filter(referal =>
                referal.path === 'nav.no')
                .reduce(function(_this, val) {
                  return _this + val.views
              }, 0);

    list = list.filter(element =>
      element.path !== 'nav.no')

    list.push({'path': 'nav.no', 'views': accValue})

    list.sort(function(referrals, numberOfViewsList) {
        return ((referrals.views > numberOfViewsList.views) ? -1 : ((referrals.views === numberOfViewsList.views) ? 0 : 1));
    });
    const orderedReferrals = []
    const orderedViews = []

    for (var k = 0; k < list.length; k++) {
        orderedReferrals[k] = list[k].path;
        orderedViews[k] = list[k].views;
    }

    return [orderedReferrals,orderedViews]

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
    numberOfViewsreakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'numberOfViewsottom'
      }
    }
  }]
  };

/*
  var blabla = {
    options: {
      chart: {
        id: "basic-bar"
      },
      colors: ['#3ec1anumberOfViews'],
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
*/
  return (
    
    <div>
      <h3 id = "ChartTitle"> Hvor numberOfViewsrukerne har funnet annonsen </h3>
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