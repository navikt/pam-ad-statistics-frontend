import React from 'react'
import ReferralChart from './DashboardComponents/ReferralChart';
import AverageChart from './DashboardComponents/AverageChart';
import {AdProvider} from '../AdContext';
import TotalPageViews from './DashboardComponents/TotalPageViews'
import DateChart from './DashboardComponents/DateChart';
import './Dashboard.scss';

export const Dashboard = () => {

  
    return (
        <AdProvider>
            <div>
                <div className = "textComponents">
                    <TotalPageViews id = "pageviews"/>
                    <AverageChart/>
                </div>
                <ReferralChart id="referralChart"/>
                <DateChart/>
            </div>
        </AdProvider>
    );
  }
  
  export default Dashboard;