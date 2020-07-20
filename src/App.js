import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestChart from './components/TestChart';
import TestHook from './components/TestHook';
import adJSON from './testJSON/adJSON'

function App() {

  var dates = [];
  var datePageviews = [];

  for(var data in adJSON.date){
      dates.push(data);
      datePageviews.push(adJSON);
  }
  console.log(dates,datePageviews)

  return (
    <div className="App">
      <TestChart date = {["17.07","18.07","19.07","20.07","21.07"]} pageviews = {[12,14,17,7,4]} avg = {adJSON.avg}/>
      <TestHook/>
    </div>
  );
}

export default App;
