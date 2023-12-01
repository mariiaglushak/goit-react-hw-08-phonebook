import AddContactBtn from "components/Button/AddContactBtn";

import { FofmBasic,Input,LabelText,Wrapper } from "components/UtiliteStyle/UtiliteStyle";



const Register=()=>{
  const hendlSubmitRegisterForm = e =>{
    const email=e.currentTarget.elements.userEmail.value;
    const password=e.currentTarget.elements.userPassword.value;
    const name=e.currentTarget.elements.userName.value;
    console.log(email,password,name)
   
    e.preventDefault();
    
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
       <AddContactBtn text='Sign up'/>               
    </FofmBasic>
  
  </Wrapper>
}

export default Register;