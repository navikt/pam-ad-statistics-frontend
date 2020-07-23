import React from 'react'
import ReferralChart from './DashboardComponents/ReferralChart';
import AverageChart from './DashboardComponents/AverageChart';
import {AdProvider} from '../AdContext';
import TotalPageViews from './DashboardComponents/TotalPageViews'
import DateChart from './DashboardComponents/DateChart';
import '../App.css';

export const Dashboard = () => {

  
    return (
        <AdProvider>
            <div className = "dashboard">

                <div className = "text-components">
                    <div className = "text-component-child">
                        <TotalPageViews/>
                    </div>
                    <div className = "text-component-child">
                        <AverageChart/>
                    </div>
                </div>

                <div className = "chart-components">
                    <div id = "header">
                        <h3 id = "main-title">Din oversikt</h3>
                    </div>
                    <DateChart/>
                    <ReferralChart/>
                </div>
            </div>
        </AdProvider>
    );
  }
  
  export default Dashboard;