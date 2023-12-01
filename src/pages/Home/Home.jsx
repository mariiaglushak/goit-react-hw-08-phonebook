import phonebook from 'image/phonebook.png';

import { HomeWrapper,HomeImg } from './HomeStyle';
const Home=()=>{
  return<HomeWrapper>
    <h1>This is your phonebook</h1>
    <HomeImg src={phonebook} alt=""/>
  </HomeWrapper>
}

export default Home;