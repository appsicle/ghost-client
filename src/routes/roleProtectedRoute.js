import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import userService from '../user/userService';
import Spinner from '../common/Spinner';

const RoleProtectedRoute = ({ desiredRole, path, children }) => {
  const [role, setRole] = useState(undefined);

  useEffect(() => {
    const fetchRole = async () => {
      const result = await userService.getRole();
      setRole(result.data);
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
