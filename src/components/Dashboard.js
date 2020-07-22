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
            <div className = "Dashboard">
                <div className = "TextComponents">
                        <TotalPageViews/>
                        <AverageChart/>
                    </div>
                <div className = "Components">
                    <div id = "MainTitle">
                        <h3>Din oversikt</h3>
                    </div>
                    <DateChart/>
                    <ReferralChart/>
                </div>
            </div>
        </AdProvider>
    );
  }
  
  export default Dashboard;