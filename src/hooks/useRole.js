import { useState, useEffect } from 'react';
import userService from '../user/userService';

const useRole = () => {
  const [role, setRole] = useState(null);
  const [roleError, setRoleError] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const result = await userService.getRole();
        console.log('fetching role before authorized route...', result);
        setRole(result.data);
      } catch (err) {
        console.log(err);
        setRoleError(err);
      }
    };
    fetchRole();
  }, []);

  return { role, roleError };
};

export default useRole;
