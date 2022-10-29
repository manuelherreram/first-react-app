import { Link } from 'react-router-dom';
import ThunderIcon from './assets/icons/thunder.svg';
import UserCircleIcon from './assets/icons/user.png';

function NavBar({onLogoClick, onProfileClick}) {
  
    return (
      <nav className="d-flex navbar bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="navbar-brand mb-0 h1"><img className="icon" src={ThunderIcon} alt="" /> Three pics</span>
          </Link>
          <Link className="navbar-brand" to="/profile" ><img className="icon" src={UserCircleIcon} alt="" /></Link>           
        </div>
      </nav>
    );
  }
  
  export default NavBar;