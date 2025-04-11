import React from 'react';
import CountryDetail from "../components/CountryDetail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";





function App(){
  return(
        <Router>
            <Routes>
                <Route path="/Countries-API/" element={<Home />} />
                <Route path="Countries-API/country/:name" element={<CountryDetail />} />
            </Routes>
        </Router>
  );
};


export default App;
