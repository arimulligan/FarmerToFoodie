import React from 'react';
import './App.css';
import {
  Routes, Route,
} from 'react-router-dom';
import Landing from './Components/Landing';
import FarmerLogin from './Components/FarmerLogin';
import CustomerLogin from './Components/CustomerLogin';

export default function App (){
  return (
    <Routes>
      <Route path="/FarmerLogin" element={<FarmerLogin/>} />
      <Route path="/CustomerLogin" element={<CustomerLogin/>} />
      <Route path="/" element={<Landing />}></Route>
    </Routes>
  );
};
