import React, { useState } from 'react'
import DateChart from './DashboardComponents/DateChart'
import TestHook from '../hooks/TestHook'
import ReferrarChart from './DashboardComponents/ReferrerChart';

function Dashboard() {

    const [data, setData] = useState({
        "ID": "49823y89hds89489312",
        "tittel": "jobb",
        "pageviews": 24,
        "avg": 0,
        "referrals": [
        ],
        "viewsPerReferral": [
        ],
        "date" : [

        ],
        "viewsPerDate" : [

        ]
        
    });

    //<DateChart date = {data.date} pageviews = {data.viewsPerDate} />
  
    return (
        <div>
            <ReferrarChart referrals = {data.referrals} pageviews = {data.viewsPerReferral} />
            <TestHook setData = {setData} data = {data} />
        </div>
        
    );
  }
  
  export default Dashboard;