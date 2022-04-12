import './App.css';
import Navbar from './Frontend/Pages/Components/NavBar';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './Frontend/Pages/Home';
import Overview from './Frontend/Pages/Overview';
import Trends from './Frontend/Pages/Trends';
import DatabaseBrowsing from './Frontend/Pages/DatabaseBrowsing';

import { render } from '@testing-library/react';



function App() {

  return (
<Router>
     
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/Trends" element={<Trends />} />
          <Route path="/DatabaseBrowsing" element={<DatabaseBrowsing />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
