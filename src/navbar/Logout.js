import { useGoogleLogout } from 'react-google-login';
import logoutIcon from '../icons/dropdown_logout.svg';

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
      <img className="dropdown-icon" src={logoutIcon} alt="logout" />
      Logout
    </button>
  );
}

export default Logout;
