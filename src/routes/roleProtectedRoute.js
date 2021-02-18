import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import Spinner from '../common/Spinner';
import useProfile from '../hooks/useProfile';

const RoleProtectedRoute = ({ desiredRole, path, children }) => {
  const history = useHistory();
  const {role, profileError} = useProfile();

  useEffect(() => {
    if (profileError) history.push('/');
  }, [profileError]);

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
