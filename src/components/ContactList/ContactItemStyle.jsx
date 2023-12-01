import styled from 'styled-components';

// https://media.istockphoto.com/id/1141696022/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8-%D0%B2-%D0%BF%D0%BB%D0%BE%D1%81%D0%BA%D0%BE%D0%BC-%D1%81%D1%82%D0%B8%D0%BB%D0%B5-%D1%81-%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D0%BE%D0%B9-%D1%82%D0%B5%D0%BD%D1%8C%D1%8E-%D0%BD%D0%B0-%D0%BF%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=IDPm_hcMMU1q5Bol0OMgutc_zEx_LBWGMvmQNH4-t-4=
export const Item = styled.li`
  display:flex;
  width: 380px;
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

