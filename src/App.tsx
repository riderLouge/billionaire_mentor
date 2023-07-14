import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LastWeekData from './Components/LastweekData';
import Home from './Components/Home';
import Login from './Components/Login';
import AboutUs from './Components/AboutUs';
import Pricing from './Components/Pricing';
import RegistrationPage from './Components/Registration';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/last-week-data" element={<LastWeekData />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
