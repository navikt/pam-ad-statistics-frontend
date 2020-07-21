import React from 'react'
import ReferralChart from './DashboardComponents/ReferralChart';
import AverageChart from './DashboardComponents/AverageChart';
import {AdProvider} from '../AdContext';
import TotalPageViews from './DashboardComponents/TotalPageViews'
import DateChart from './DashboardComponents/DateChart';

export const Dashboard = () => {

  
    return (
        <AdProvider>
            <div>
                <ReferralChart/>
                <TotalPageViews/>
                <AverageChart/> 
                <DateChart/>
            </div>
        </AdProvider>
    );
  }
  
  export default Dashboard;