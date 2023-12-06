import LogoutBtn from "components/Button/LogoutBtn";
import { useSelector,useDispatch } from "react-redux";
import { selectUserData } from "redux/auth/auth.selectors";
import { UserMenuWrap,UserMenuName } from "./UserMenuStyle";
import { fetchLogOutThunk } from "redux/auth/auth.reducer";


const UserMenu=()=>{
  const userData=useSelector(selectUserData);
  const dispatch=useDispatch();

  const onLogoutClick=()=>{
   dispatch(fetchLogOutThunk());
  }
  
  return (
     <UserMenuWrap>
    <UserMenuName >Hello... {userData.email}</UserMenuName>
    <LogoutBtn LogoutClick={onLogoutClick} text="Logout" />
  </UserMenuWrap>
 );
};

export default UserMenu;