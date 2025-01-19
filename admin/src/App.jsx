import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './admin/AdminLogin';
import AdminSignup from './admin/AdminSignup';
import CreateEvents from './admin/CreateEvents';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/signup" element={<AdminSignup />} />
          <Route path="/createevent" element={<CreateEvents />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
