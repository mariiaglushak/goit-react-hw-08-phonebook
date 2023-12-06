import styled from 'styled-components';


export const Item = styled.li`
  display:flex;
  min-width: 380px;
  min-height: 30px;
  padding:3px;
  align-items: center;
  
  margin-bottom: 8px;
  border: 2px solid;
  border-color:#b9b3b9;
  border-radius: 3px;
  list-style: none;
  font-size: 18px;
  position: relative;
`;

export const ItemNumber = styled.span`
  font-weight: bold;
  padding-left: 8px;
  
`;

export const ItemBtnDel = styled.button`
 
  font-size: 17px;
  margin-right:3px;

  position: absolute;
  right: 0;
  background-color: #ee82ee;
  border-color: #9370db;
  border-radius: 3px;
  :hover {
    background-color: #9370db;
  }
`;

