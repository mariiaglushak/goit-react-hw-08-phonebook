import styled from 'styled-components';

export const Wrapper=styled.div`
 display:flex;
 height: 100%;
 justify-content:center;
 align-items:center;
 background: rgb(107,111,207);
 background: linear-gradient(90deg, rgba(107,111,207,0.4514180672268907) 7%, rgba(86,233,135,0.165703781512605) 52%, rgba(207,135,30,0.43461134453781514) 95%);
 
  
`;

export const FofmBasic = styled.form`
  display:flex;
  flex-direction:column;
  align-items: center;
  padding: 15px;
  width: 300px;
  min-height: 225px;
  color:#124444;
  border: 2px solid #4682b4;
  border-radius:4px;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  background-color:white;
  box-shadow:
    inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const Input = styled.input`

  padding-left: 10px;
  font-size: 20px;
  display: block;
  width: 250px;
  height: 40px;
  border-color: #4682b4;
  outline-color: #00bfff;
  border-radius:4px;
`;

export const LabelText=styled.span`
  display:block;
  width: 100%;
  margin-bottom: 6px;
  
`;