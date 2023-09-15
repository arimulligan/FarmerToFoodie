import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserProfile } from './UserProfile';

const Landing = () => {
    console.log('Farmer Login');
    googleLogout();
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [ profile ] = useState([]);
    const { setProfile } = useUserProfile();

    const farmerLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse)
            // Redirect to the Farmer page
            navigate('/FarmerProfile');
        },
        onError: (error) => console.log('Farmer Login Failed:', error),
    });
    
    const customerLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse)
            // Redirect to the Customer page
            navigate('/CustomerProfile');
        },
        onError: (error) => console.log('Customer Login Failed:', error),
    });
    useEffect(
        () => {
            if (user.access_token) {
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
        [ user, setProfile ]
    );
    return (
        <div className="overlap">
        <div className="overlap-group">
            <h1 className="text-wrapper">Farmer to Foodie</h1>
            <img
            className="rectangle"
            alt="Rectangle"
            src="https://generation-sessions.s3.amazonaws.com/68eb6af8c3c87c795c724916e6e050ee/img/rectangle-1.png"
            />
            <p className="p">Discover the roots of your food: empowering farmers and enriching communities!</p>
        </div>
        <button onClick={farmerLogin}>
        <span className="p-wrapper">
            <p className="text-wrapper-2">I want to locally sell my farmed produce</p>
        </span>
        </button>
        <button onClick={customerLogin}>
        <span className="span">
            <p className="text-wrapper-3">I want to buy fresh, local produce</p>
        </span>
        </button>
        </div>
    );
}

export default Landing;