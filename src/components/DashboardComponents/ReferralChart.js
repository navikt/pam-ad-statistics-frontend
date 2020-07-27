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
  
  var optionsPie = {
    series:  referralsAndViews[1],
    chart: {
    width: 380,
    type: 'pie',
  },
  legend: {
    position: 'bottom'
  },
  plotOptions: {
    pie: {
      donut: {
        size: '55%'
      },
      dataLabels: {
        minAngleToShowLabel: 15
      }
    }
  },
  labels: referralsAndViews[0],
  responsive: [{
    numberOfViewsreakpoint: 480,
    options: {
      chart: {
        width: 200
      },
    }
  }]
  };

  var optionsBar = {
    options: {
      chart: {
        id: "basic-bar"
      },
      colors: ['#3ec1ab'],
      xaxis: {
        categories: referralsAndViews[0]
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
        data: referralsAndViews[1]
      }
    ]
  };

  console.log()

  return (
    <div className = "chart-components__child">
      <div className = "chart-title"> Hvor leserene har funnet annonsen </div>
      <Chart
        options={optionsPie}
        labels={optionsPie.labels}
        series={optionsPie.series}
        type="donut"
        width="100%"
      />
    </div> 
  );
};
/*
  <Chart
  options={optionsBar.options}
  series={optionsBar.series}
  type="bar"
  width="100%"
/>
*/
export default ReferralChart;