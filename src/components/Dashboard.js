import React from 'react'
import AverageChart from './DashboardComponents/AverageChart';
import {DataProvider} from '../DataContext';
import TotalPageViews from './DashboardComponents/TotalPageViews'
import '../App.css';
import ChartButton from './DashboardComponents/ChartButton';

export const Dashboard = () => {

  
    return (
        <DataProvider>
            <div className = "dashboard">

                <div className = "text-components">
                    
                        <TotalPageViews/>
                    
                    
                        <AverageChart/>
                    
                </div>

                <ChartButton/>

            </div>
        </DataProvider>
    );
  }
  
  export default Dashboard;