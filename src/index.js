import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './App.css';
import { UserProvider } from './Components/UserProfile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="566860835341-i48ssiqgpt4crt4j8bpslpbs4r3ampb3.apps.googleusercontent.com">
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>,
);

