import React from 'react'
import AverageChart from './DashboardComponents/AverageChart.js';
import {AdProvider} from '../AdContext';
import TotalPageViews from './DashboardComponents/TotalPageViews.js'
import '../App.css';
import ChartButton from './DashboardComponents/ChartButton.js';

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