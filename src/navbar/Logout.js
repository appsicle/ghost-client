import { useGoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Logout({ onLogoutSuccess }) {
  const onFailure = () => {
    console.log('failure');
  };

  const { signOut } = useGoogleLogout({
    onFailure,
    clientId,
    onLogoutSuccess,
  });

  return (
    <div className="login-form-container">
      <button type="button" onClick={signOut} className="icon-button">
        Logout
      </button>
    </div>
  );
}

export default Logout;
