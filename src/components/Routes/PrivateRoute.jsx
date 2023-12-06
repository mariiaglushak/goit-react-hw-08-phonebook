
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAauthenticated } from 'redux/auth/auth.selectors';
import { LOGIN_ROUTES } from 'constants/routes';

const PrivateRoute = ({ children }) => {
  const authenticated = useSelector(selectAauthenticated);
  return authenticated ? children : <Navigate to={LOGIN_ROUTES} replace />;
};

export default PrivateRoute;