import {Link} from 'react-router-dom';

const NavBarLinks = (props) => {

  return (
    <ul className={`navbar-links ${props.isMobile ? 'mobile' : ''}`}>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/characters">Characters</Link>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to="/episodes">Episodes</Link>
      </li>
    </ul>
  )
}
 
export default NavBarLinks;