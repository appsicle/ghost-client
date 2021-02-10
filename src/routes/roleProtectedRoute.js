import React, { useEffect, useState } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import userService from '../user/userService';
import Spinner from '../common/Spinner';

const RoleProtectedRoute = ({ desiredRole, path, children }) => {
  const [role, setRole] = useState(undefined);
  const history = useHistory();
  useEffect(() => {
    const fetchRole = async () => {
      try {
        const result = await userService.getRole();
        setRole(result.data);
      } catch (err) {
        console.log(err);
        history.push('/');
      }
    };
    fetchRole();
  }, []);

  return (
    <>
      {role ? (
        <Route
          path={path}
          render={() =>
            (desiredRole === role ? (
              children
            ) : (
              <Redirect to={{ pathname: '/' }} />
            ))}
        />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default RoleProtectedRoute;
