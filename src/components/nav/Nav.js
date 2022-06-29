import {Link} from 'react-router-dom';
import owl from '../assets/owl.png'
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';

const Navbar = () => {

  return ( 
    <nav className="navbar">
      <div className="navbar-topic">
        <Link to="/">
          <div className='navbar-left'>
            <img src={owl} alt="logo" />
            <h1>Twin Peaks</h1>
          </div>
        </Link>
      </div>
      <Navigation />
      <NavigationMobile />
    </nav>
  )
}

export default Navbar