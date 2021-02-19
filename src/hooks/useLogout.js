/* eslint-disable no-restricted-globals */
import { useGoogleLogout } from 'react-google-login';
import UserService from '../user/userService';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const useLogout = () => {
  const onFailure = () => {
    console.log('failure');
  };

  // TODO: feels sus that it could fail after saying it succeeded
  const onLogoutSuccess = async () => {
    console.log('successful logout');
    await UserService.logout();
    history.go(); // refresh, should redirect to appropriate location with ProtectedRoutes
  };

  const { signOut: logout } = useGoogleLogout({
    onFailure,
    clientId,
    onLogoutSuccess,
  });

  return logout;
};

export default useLogout;
