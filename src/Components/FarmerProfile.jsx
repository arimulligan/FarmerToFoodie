import NavBar from './NavBar';

function FarmerProfile({ profile, onLogOut }) {
  return (
    <div className="farmer">
      <NavBar/>
      <h1 className="h-1">My Farmer Profile</h1>
      <div className="overlap-group">
      <button className="text-wrapper-2" onClick={onLogOut} >Log Out</button>
      </div>
        <div>
          <div className="text-wrapper-3">{profile.name}</div>
          <a className="text-wrapper-4" href={`mailto:${profile.email}`} rel="noopener noreferrer" target="_blank">
            {profile.email}
          </a>
        </div>
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
            alt="Users profile"
            src={profile.picture}
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