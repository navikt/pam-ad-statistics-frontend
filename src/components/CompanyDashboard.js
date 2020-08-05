import React from 'react'
import AverageChart from './DashboardComponents/AverageChart';
import TotalPageViews from './DashboardComponents/TotalPageViews'
import '../App.css';
import ChartButton from './DashboardComponents/ChartButton';
import { Provider } from 'react-redux';
import {AdStore} from '../store/index';

export const Dashboard = () => {

  
    return (
        <Provider store={AdStore()}>
            <div className = "dashboard">

                <div className = "text-components">
                    
                        <TotalPageViews/>
                    
                    
                        <AverageChart/>
                    
                </div>

                <ChartButton/>

            </div>
        </Provider>
    );
  }
  
  export default Dashboard;