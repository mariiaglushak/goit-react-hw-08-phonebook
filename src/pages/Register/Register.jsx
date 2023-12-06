import AddContactBtn from "components/Button/AddContactBtn";
import { useDispatch } from "react-redux";
import { fetchRegisterThunk } from "redux/auth/auth.reducer";

import { FofmBasic,Input,LabelText,Wrapper,ButtonWrap } from "components/UtiliteStyle/UtiliteStyle";



const Register=()=>{
  const dispatch=useDispatch();



  const hendlSubmitRegisterForm = e =>{
    e.preventDefault();

    const name=e.currentTarget.elements.userName.value;
    const email=e.currentTarget.elements.userEmail.value;
    const password=e.currentTarget.elements.userPassword.value;
 
    const formData={
      name,
      email,
      password,
    };
   
    dispatch(fetchRegisterThunk(formData))
    
  };
  return <Wrapper>
    <FofmBasic onSubmit={hendlSubmitRegisterForm}>
    <label>
       <LabelText>Name:</LabelText>
       <Input 
        type="text" 
        name="userName" 
        placeholder="Name"
        required
        />
       </label>
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
       <ButtonWrap><AddContactBtn text='Sign up'/></ButtonWrap>
                      
    </FofmBasic>
  
  </Wrapper>
}

export default Register;