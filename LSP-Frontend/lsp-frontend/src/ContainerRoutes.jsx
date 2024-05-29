import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Login from './pages/login';
import Home from './pages/home';
import NewClient from './pages/newClient';
import NewProcess from './pages/newProcess';

export default function ContainerRoutes() {
  return (
    
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/createClient" element={<NewClient />} />
      <Route exact path="/createProcess" element={<NewProcess />} />
    </Routes>
  );
}