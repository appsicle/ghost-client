import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import Spinner from '../common/Spinner';
import useRole from '../hooks/useRole';

const RoleProtectedRoute = ({ desiredRole, path, children }) => {
  const history = useHistory();
  const { role, roleError } = useRole();

  useEffect(() => {
    if (roleError) history.push('/');
  }, [roleError]);

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
