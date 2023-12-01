import { NavLink } from 'react-router-dom';
import { ListNav,ListNavItemBox,ListNavItem } from './LayoutStyle';

const Layout=({ children })=>{
  return<div>
     <ListNav>
      <li>
        <ListNavItemBox>
        <ListNavItem>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </ListNavItem>
        <ListNavItem>
          <NavLink className="nav-link" to="/contacts">
            Contacts
          </NavLink>
        </ListNavItem>
        </ListNavItemBox>
       
        </li>
      <li>
      <ListNavItemBox>
      <ListNavItem>
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </ListNavItem>
        <ListNavItem>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </ListNavItem>
       
        </ListNavItemBox>
        </li>
      
      
      
        
        
      </ListNav>
      <main>{children}</main>

  </div>
}

export default Layout;