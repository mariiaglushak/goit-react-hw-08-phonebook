import styled from 'styled-components';


export const ListNav = styled.ul`
  padding:0 30px 0 30px;
  margin:0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  list-style: none;
  min-height:50px;

  border:3px solid;
  
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #e7c477, #4ce0e0);
  font-size:20px;
  font-weight:bold;
  
  
`;

export const ListNavItemBox=styled.ul`
 padding-left:0;
 display:flex;

  
`;

export const ListNavItem=styled.li`
  display:flex;
  align-items:center;
  height: 35px;
  padding:0 5px 0 5px;
  margin-right:8px;
  :nth-child(2n) {
    margin-right:0;
  }
  background: rgb(34, 191, 230);
  background: linear-gradient(90deg, rgba(154, 236, 236, 0.671) 0%, rgb(245, 165, 100) 100%);
  border-radius:4px;
`;

