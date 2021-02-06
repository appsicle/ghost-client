import { Button } from 'shards-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserRole } from './user/userSlice';
import config from './constants';

function RoleSelection() {
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState(undefined);

  const handleSubmit = () => {
    if (selectedRole) {
      dispatch(setUserRole(selectedRole));
    }
  };

  const setBuyer = () => {
    setSelectedRole(config.REVIEWEE);
    console.log(selectedRole);
  };

  const setSeller = () => {
    setSelectedRole(config.REVIEWER);
  };

  return (
    <div>
      <Button onClick={setBuyer}>Male</Button>
      <Button onClick={setSeller}>Female</Button>
      <Button onClick={handleSubmit}>Confirm</Button>
    </div>
  );
}

export default RoleSelection;
