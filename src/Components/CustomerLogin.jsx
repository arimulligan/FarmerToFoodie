import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { default as React, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const CustomerLogin = ()=> {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const navigate = useNavigate();

  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
      setProfile(null);
      navigate('/'); // Redirect to the landing page
  };

  return (
      <div>
          <h2>React Google Login</h2>
          <br />
          <br />
          {profile ? (
              <div>
                  <img src={profile.picture} alt="Profile Picture" />
                  <h3>User Logged in</h3>
                  <p>Name: {profile.name}</p>
                  <p>Email Address: {profile.email}</p>
                  <br />
                  <br />
                  <button onClick={logOut}>Log out</button>
              </div>
          ) : (
              <button onClick={() => login()}>Sign in with Google 🚀 </button>
          )}
      </div>
  );
}

export default CustomerLogin;
