import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TestChart from './components/DateChart';
import TestHook from './components/TestHook';
import adJSON from './testJSON/adJSON'
import DateChart from './components/DateChart';
import BackendHook from './hooks/BackendHook';

function App() {

  const [data, setData] = useState({
    "ID": "49823y89hds89489312",
    "tittel": "jobb",
    "pageviews": 24,
    "avg": 0,
    "referrals": [
    ],
    "viewsPerReferral": [
    ]});
  console.log(data)

  return (
    <div className="App">
      <DateChart date = {data.referrals} pageviews = {[12,14,17,7,4]} avg = {adJSON.avg} />
      <TestHook setData = {setData} data = {data}/>
    </div>
  );
}

export default App;
