import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestChart from './components/DateChart';
import TestHook from './components/TestHook';
import adJSON from './testJSON/adJSON'
import DateChart from './components/DateChart';
import BackendHook from './hooks/BackendHook';

function App() {

  console.log(BackendHook.data)

  return (
    <div className="App">
      <DateChart date = {["17.07","18.07","19.07","20.07","21.07"]} pageviews = {[12,14,17,7,4]} avg = {adJSON.avg}/>
      <TestHook/>
    </div>
  );
}

export default App;
