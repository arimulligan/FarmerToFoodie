import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const FarmerProfile = () =>{
  const location = useLocation();
  const { user } = location.state || {};
  return (
    <div className="farmer">
      <NavBar/>
      <h1 className="h-1">{user.name}</h1>
      <div className="overlap-group">
        <div className="text-wrapper-2">Edit Profile</div>
      </div>
      {user && (
        <div>
          <div className="text-wrapper-3">{user.name}</div>
          <a className="text-wrapper-4" href={`mailto:${user.email}`} rel="noopener noreferrer" target="_blank">
            {user.email}
          </a>
        </div>
      )}
      <a href="./ViewMyProducts">
        <span className="rectangle-2">
          <span className="div">View My Products</span>
        </span>
      </a>
      <a href="./AddNewProduct">
        <span className="rectangle" >
        <span className="div">Add New Product</span>
        </span>
      </a>
      <div className="profile-photo">
        <div className="overlap-group-2">
          <div className="ellipse" />
          <img
            className="mask-group"
            alt="Mask group"
            src="https://generation-sessions.s3.amazonaws.com/eaa870d1b7bc3cebc7fd219e158236df/img/mask-group@2x.png"
          />
        </div>
      </div>
      <p className="p">You have 0.0 star ratings!</p>
      <div className="city-country">City, Country</div>
      <div className="text-wrapper-5">Farmer to Foodie</div>
    </div>
    );
}

export default FarmerProfile;