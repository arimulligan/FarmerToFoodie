import NavBar from './NavBar';

function CustomerProfile({ profile, onLogOut }) {
  return (
    <div className="farmer">
      <NavBar/>
      <h1 className="h-1">My Customer Profile</h1>
      <div className="overlap-group">
        <div className="text-wrapper-2">Edit Profile</div>
      </div>
      {profile && (
        <div>
          <div className="text-wrapper-3">{profile.name}</div>
          <a className="text-wrapper-4" href={`mailto:${profile.email}`} rel="noopener noreferrer" target="_blank">
            {profile.email}
          </a>
        </div>
      )}
      <a href="./FarmersNearMe">
        <span className="rectangle-2">
          <span className="div">Farmers Near Me</span>
        </span>
      </a>
      <a href="./SearchLocalProduce">
        <span className="rectangle" >
        <span className="div">Search Local Produce</span>
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
      <div className="city-country">City, Country</div>
      <div className="text-wrapper-5">Farmer to Foodie</div>
    </div>
    );
}

export default CustomerProfile;