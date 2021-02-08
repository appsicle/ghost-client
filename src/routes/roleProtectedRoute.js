import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import userService from '../user/userService';

const RoleProtectedRoute = ({ desiredRole, path, children }) => {
  const [role, setRole] = useState(undefined);

  useEffect(() => {
    const fetchRole = async () => {
      const result = await userService.getRole();
      setRole(result.data);
    };
    fetchRole();
  }, []);
  // const role = 'REVIEWEE';

  return (
    <>
      {role !== undefined ? (
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
        <p>loading</p>
      )}
    </>
  );
};

export default RoleProtectedRoute;
