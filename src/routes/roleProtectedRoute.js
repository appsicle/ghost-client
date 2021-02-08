import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import getRole from '../utils/getRole';

const RoleProtectedRoute = ({ desiredRole, path, children }) => {
  const role = getRole();

  return (
    <Route
      path={path}
      render={() =>
        (desiredRole === role ? children : <Redirect to={{ pathname: '/' }} />)}
    />
  );
};

export default RoleProtectedRoute;
