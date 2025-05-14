import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParentDashboard from './pages/ParentDashboard';
import StudentDashboard from './pages/StudentDashboard';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;