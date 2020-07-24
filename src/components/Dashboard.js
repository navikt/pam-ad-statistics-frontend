import React from 'react'
import ReferralChart from './DashboardComponents/ReferralChart';
import AverageChart from './DashboardComponents/AverageChart';
import {AdProvider} from '../AdContext';
import TotalPageViews from './DashboardComponents/TotalPageViews'
import DateChart from './DashboardComponents/DateChart';
import '../App.css';
import ChartButton from './DashboardComponents/ChartButton';

export const Dashboard = () => {

  
    return (
        <AdProvider>
            <div className = "dashboard">

                <div className = "text-components">
                    
                        <TotalPageViews/>
                    
                    
                        <AverageChart/>
                    
                </div>

                <ChartButton/>

            </div>
        </AdProvider>
    );
  }
  
  export default Dashboard;