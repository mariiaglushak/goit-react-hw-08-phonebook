
import { CONTACTS_ROUTES } from 'constants/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAauthenticated } from 'redux/auth/auth.selectors';

const RestrictedRoute = ({ children }) => {
  const authenticated = useSelector(selectAauthenticated);
  return authenticated ? <Navigate to={CONTACTS_ROUTES} replace /> : children;
};

export default RestrictedRoute;