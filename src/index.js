import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './App.css';
import { UserProfileProvider } from './Components/UserProfile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="566860835341-i48ssiqgpt4crt4j8bpslpbs4r3ampb3.apps.googleusercontent.com">
    <BrowserRouter>
      <UserProfileProvider>
        <App />
      </UserProfileProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>,
);

