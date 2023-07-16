import React from 'react';
import './App.css';
import {
  Routes, Route,
} from 'react-router-dom';
import Landing from './Components/Landing';
import FarmerLogin from './Components/FarmerLogin';
import CustomerLogin from './Components/CustomerLogin';
import CustomerProfile from './Components/CustomerProfile';
import FarmerProfile from './Components/FarmerProfile';
import FarmersNearMe from './Components/FarmersNearMe';

export default function App (){
  return (
    <Routes>
      <Route path="/FarmerLogin" element={<FarmerLogin/>} />
      <Route path="/CustomerLogin" element={<CustomerLogin/>} />
      <Route path="/CustomerProfile" element={<CustomerProfile/>} />
      <Route path="/FarmerProfile" element={<FarmerProfile/>} />
      <Route path="/FarmersNearMe" element={<FarmersNearMe/>} />
      <Route path="/" element={<Landing />}></Route>
    </Routes>
  );
};
