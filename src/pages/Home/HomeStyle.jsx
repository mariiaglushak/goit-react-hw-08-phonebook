import styled from 'styled-components';

export const HomeWrapper=styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 500px;
  justify-content: center;
  align-items:center;
  
  margin:0 auto;
  margin-top: 20px;
  
  border:4px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #e7c477, #4ce0e0);
  color:#124444;
 
`;

export const HomeImg=styled.img`
  display: block;
  width: 430px;
  height: 350px;
  background-image: cover;
  &:hover{
   
    transform: scale(1.1);
    transition-duration: 1000ms;
    

  }
`;

