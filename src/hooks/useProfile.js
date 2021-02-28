import { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import { guestUser } from '../icons/links';

const useProfile = () => {
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);
  const [profilePic, setProfilePic] = useState(guestUser);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [profileError, setProfileError] = useState(null);

  useEffect(() => {
    UserService.getProfile()
      .then((res) => {
        setRole(res.data.role);
        setName(res.data.name);
        setProfilePic(res.data.profilePic);
        setIsLoggedIn(true);
        console.log(res);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setProfileError(err);
      });
  }, []);

  return {
    role, name, profilePic, isLoggedIn, profileError,
  };
};

export default useProfile;
