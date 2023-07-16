import { NavLink } from 'react-router-dom';
import './style/NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="container">
            <div className="nav-elements">
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/SearchLocalProduce">Products</NavLink>
                </li>
                <li>
                <NavLink to="/About">About</NavLink>
                </li>
                <li>
                <NavLink to="/FarmersNearMe">Explore</NavLink>
                </li>
                <img src={require("./style/defaultProfilePic.png")} alt="" width="800px" height="55px"/>
            </ul>
            
            </div>
            
        </div>
        
        </nav>
    )
}
  
export default Navbar;