import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CustomerProfile from './CustomerProfile';
import FarmerProfile from './FarmerProfile';
import { useUser } from './UserProfile';

const Landing = () => {
    console.log('Farmer Login');
    const [ user, setUser ] = useUser();
    const [ profile, setProfile ] = useState([]);
    const [showFarmerProfile, setShowFarmerProfile] = useState(false);
    const [showCustomerProfile, setShowCustomerProfile] = useState(false);

    const farmerLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse)
            setShowFarmerProfile(true);
            setShowCustomerProfile(false);
        },
        onError: (error) => console.log('Farmer Login Failed:', error),
    });
    
    const customerLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse)
            setShowCustomerProfile(true);
            setShowFarmerProfile(false);
        },
        onError: (error) => console.log('Customer Login Failed:', error),
    });

    const logOut = () => {
        googleLogout();
        setProfile(null);
        setShowFarmerProfile(false);
        setShowCustomerProfile(false);
    };

    useEffect(
        () => {
            if (user && user.access_token) {
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
    return (
        <div>
            {(showFarmerProfile && profile) ? (
                <FarmerProfile profile={profile} onLogOut={logOut} />
            ) : (showCustomerProfile && profile) ? (
                <CustomerProfile profile={profile} onLogOut={logOut} />
            ) : (
                <div>
                    <div>
                        <h1 className="text-wrapper">Farmer to Foodie</h1>
                        <img
                            className="rectangle"
                            alt=""
                            src="https://generation-sessions.s3.amazonaws.com/68eb6af8c3c87c795c724916e6e050ee/img/rectangle-1.png"
                        />
                        <p className="p">Discover the roots of your food: empowering farmers and enriching communities!</p>
                    </div>
                    <button onClick={farmerLogin} className="p-wrapper">
                        <p className="text-wrapper-2">I want to locally sell my farmed produce</p>
                    </button>
                    <button onClick={customerLogin} className="span">
                        <p className="text-wrapper-3">I want to buy fresh, local produce</p>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Landing;