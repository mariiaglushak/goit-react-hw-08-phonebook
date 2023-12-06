import { ContactBtn } from "./AddContactStyle";

const LogoutBtn=({text,LogoutClick})=>{
  return(
    <ContactBtn onClick={LogoutClick} type="button">{text}</ContactBtn>
  )
};
export default LogoutBtn;