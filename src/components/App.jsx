import { lazy, Suspense,useEffect  } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loader from './Loader/Loader';
import Layout from './Layout/Layout';
import { useDispatch} from "react-redux";
import RestrictedRoute from './Routes/RestrictedRoute';
import PrivateRoute from './Routes/PrivateRoute';
import { useSelector } from 'react-redux';

import { fetchRefreshThunk } from 'redux/auth/auth.reducer';
import { selectIsRefresh } from 'redux/auth/auth.selectors';



import * as ROUTES from "constants/routes.js"





const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));



const appRoutes=[
  {
    path: ROUTES.HOME_ROUTES,
    element: <Home/>,
  },
  {
    path: ROUTES.REGISTER_ROUTES,
    element: <RestrictedRoute ><Register/></RestrictedRoute>,
  },
  {
    path: ROUTES.LOGIN_ROUTES,
    element: <RestrictedRoute ><Login/></RestrictedRoute>,
  },
  {
    path: ROUTES.CONTACTS_ROUTES,
    element: <PrivateRoute><Contacts/></PrivateRoute>,
  }
];
const App = () => {
  
  const isRefreshing=useSelector(selectIsRefresh);
  

  const dispatch=useDispatch();
  
  useEffect(()=>{
  
    dispatch(fetchRefreshThunk());
  },[dispatch])

  return (
  <>
   {!isRefreshing &&(<Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({path,element})=>(<Route key={path} path={path} element={element} />))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>)}</>
   
  );
};

export default App;
