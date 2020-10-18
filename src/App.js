import React from 'react';
import './App.css';
import Header from './Header';
import JobSeker from './JobSeker';
import Recutier from './Recutier';

function App() {
  return (
    <div className="App">
      <div>
        <Header /> 
      </div>
      <div className="select_option">
     
            <input type="radio" value="keepSite" /><span>If Job Seker</span>
      <br />  
            <input type="radio" value="NewSite" /><span>If Recutier</span>
       
      </div>
      <div className="app_body">
      <JobSeker />
      <Recutier />
      </div>
     </div>
  );
}

export default App;
