import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Landing = () => {
    googleLogout();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '', // Initialize with empty values
        name: '',
    });

    const farmerLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log('Farmer Login onSuccess callback called');
        // Assuming you receive user data from Google login
        const decodedToken = jwt_decode(codeResponse);
        console.log(decodedToken);
        const userData = {
            email: decodedToken.email,
            name: decodedToken.name,
        };
        setUser(userData);
        

        // Redirect to the Farmer page
        navigate('/FarmerProfile');
        },
        onError: (error) => console.log('Farmer Login Failed:', error),
    });
    
    const customerLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
        // Assuming you receive user data from Google login
        const decodedToken = jwt_decode(codeResponse);
        const userData = {
            email: decodedToken.email,
            name: decodedToken.name,
        };
        setUser(userData);
        
        // Redirect to the Customer page
        navigate('/CustomerProfile');
        },
        onError: (error) => console.log('Customer Login Failed:', error),
    });
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