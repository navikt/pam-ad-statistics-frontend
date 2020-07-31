import React from 'react'
import AverageChart from './DashboardComponents/AverageChart';
import {AdDataProvider} from '../AdDataContext';
import TotalPageViews from './DashboardComponents/TotalPageViews'
import '../App.css';
import ChartButton from './DashboardComponents/ChartButton';

export const Dashboard = () => {

  
    return (
        <AdDataProvider>
            <div className = "dashboard">

                <div className = "text-components">
                    
                        <TotalPageViews/>
                    
                    
                        <AverageChart/>
                    
                </div>

                <ChartButton/>

            </div>
        </AdDataProvider>
    );
  }
  
  export default Dashboard;