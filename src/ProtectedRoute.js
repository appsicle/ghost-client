/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import userRoleService from './user/userRoleService';
import authService from './user/authService';

const userId = 0; // TODO: get userId from local storage?
const token = 'asdf'; // TODO: get actual token from ? local Storage?

const userRole = userRoleService.getUserRole(userId);
// const isAuthenticated = await authService.isAuthenticated(token);

const ProtectedRoute = ({
  component: Component,
  desiredRole: role,
  isAuthenticated,
  logout,
  ...rest
}) => {
  const history = useHistory();

  return (
    <Route
      render={(props) => {
        if (!isAuthenticated) {
          history.push('/signup');
        } else if (desiredRole !== userRole) {
          history.push('/');
        } else {
          return <Component logout={logout} />;
        }
      }}
    />
  );
};
