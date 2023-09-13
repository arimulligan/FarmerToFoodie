import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import CustomerLogin from './Components/CustomerLogin';
import CustomerProfile from './Components/CustomerProfile';
import FarmerLogin from './Components/FarmerLogin';
import FarmerProfile from './Components/FarmerProfile';
import FarmersNearMe from './Components/FarmersNearMe';
import Landing from './Components/Landing';

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
