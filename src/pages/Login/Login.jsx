import AddContactBtn from "components/Button/AddContactBtn";
import { useDispatch } from "react-redux";

import { fetchLoginThunk } from "redux/auth/auth.reducer";
import { FofmBasic,Input,LabelText,Wrapper } from "components/UtiliteStyle/UtiliteStyle";

const Login=()=>{
  
  const dispatch = useDispatch();

  const hendlSubmitLoginForm = e =>{
    e.preventDefault();
    const email=e.currentTarget.elements.userEmail.value;
    const password=e.currentTarget.elements.userPassword.value;
    console.log(email,password)
    const formData={
      email,
      password
    };
    dispatch(fetchLoginThunk(formData));
    
    
    
  };
  return(
    <Wrapper>
      <FofmBasic onSubmit={hendlSubmitLoginForm}>
      <label>
       <LabelText>Email:</LabelText>
       <Input 
        type="email" 
        name="userEmail" 
        placeholder="E-mail"
        required
        />
       </label>
       <label>
        <LabelText>Password:</LabelText>
       <Input 
        type="password" 
        name="userPassword" 
        placeholder="*******"
        autoComplete="on"
        required
        minLength={8}
        />
       </label>
       <AddContactBtn text='Sign in'/>               
    </FofmBasic>
    </Wrapper>
    
  
)}
export default Login;