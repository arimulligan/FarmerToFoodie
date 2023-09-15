import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Route,
  Routes
} from "react-router-dom";
import CustomerProfile from './Components/CustomerProfile';
import FarmerProfile from './Components/FarmerProfile';
import FarmersNearMe from './Components/FarmersNearMe';
import Landing from './Components/Landing';
import { UserProvider } from './Components/UserProfile';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="566860835341-i48ssiqgpt4crt4j8bpslpbs4r3ampb3.apps.googleusercontent.com">
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/CustomerProfile" element={<CustomerProfile/>} />
          <Route path="/FarmerProfile" element={<FarmerProfile/>} />
          <Route path="/FarmersNearMe" element={<FarmersNearMe/>} />
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>,
);

