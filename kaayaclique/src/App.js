import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/LoginAuth';
import Dashboard from './Components/Dashboard';
import Error from './Components/Error';
import Header from './Components/Header';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
