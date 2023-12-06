import { NavLink } from 'react-router-dom';
import { ListNav,ListNavItem,ListNavItemBox } from './LayoutStyle';
import { useSelector } from 'react-redux';
import { selectAauthenticated } from 'redux/auth/auth.selectors';
import UserMenu from 'components/UserMenu/UserMenu';


const Layout=({ children })=>{

  const authenticated=useSelector(selectAauthenticated);
 
 
  return(<div>
     <ListNav>
        <ListNavItem>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </ListNavItem>
        {authenticated &&(<> <ListNavItem>
          <NavLink className="nav-link" to="/contacts">
            Contacts
          </NavLink>
        </ListNavItem></>)}
       
       {authenticated ? (<li><UserMenu/></li>):(<><ListNavItemBox><ListNavItem>
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </ListNavItem>
        <ListNavItem>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </ListNavItem></ListNavItemBox></>)} 
        
      </ListNav>
      <main>{children}</main>

  </div>
)}

export default Layout;