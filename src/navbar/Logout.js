import { GoogleLogout } from 'react-google-login';

function Logout({ logout }) {
  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={logout}
      onFailure={() => {
        console.log('logout failed');
      }}
    />
  );
}

export default Logout;
