import React from 'react';
import './App.css';
import CompanyDashboard from './components/CompanyDashboard';
import CandidateDashboard from './components/CandidateDashboard';

function App() {

  return (
    <div className="App">

      <div className = "dashboard_company">
        <div className = "title"> For bedrift </div>
        <CompanyDashboard/>
      </div>

      <div className = "dashboard_candidate">
        <div className = "title"> For kandidat </div>
        <CandidateDashboard/>
      </div>

    </div>
  );
}

export default App;

/*

*/
