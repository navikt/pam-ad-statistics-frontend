import React from 'react';
import './App.css';
import CompanyDashboard from './components/CompanyDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import { Provider } from 'react-redux';
import AdStore from './store';

function App() {

  return (
    <Provider store={AdStore()}>
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
    </Provider>
  );
}

export default App;

/*

*/
