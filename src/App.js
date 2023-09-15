import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import CustomerProfile from './Components/CustomerProfile';
import FarmerProfile from './Components/FarmerProfile';
import FarmersNearMe from './Components/FarmersNearMe';
import Landing from './Components/Landing';

export default function App (){
  return (
    <Routes>
      <Route path="/CustomerProfile" element={<CustomerProfile/>} />
      <Route path="/FarmerProfile" element={<FarmerProfile/>} />
      <Route path="/FarmersNearMe" element={<FarmersNearMe/>} />
      <Route path="/" element={<Landing />}></Route>
    </Routes>
  );
};
