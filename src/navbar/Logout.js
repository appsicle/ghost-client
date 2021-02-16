import { useGoogleLogout } from 'react-google-login';
import { dropdownLogout } from '../icons/links';

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
    <button type="button" onClick={signOut}>
      <img className="dropdown-icon" src={dropdownLogout} alt="logout" />
      Logout
    </button>
  );
}

export default Logout;
