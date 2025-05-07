import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParentDashboard from './components/ParentDashboard';
import StudentDashboard from './components/StudentDashboard';
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