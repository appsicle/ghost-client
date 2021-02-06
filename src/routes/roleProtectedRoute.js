/* eslint-disable no-constant-condition */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userService from '../user/userService';
import { setUserRole } from '../user/userSlice';

// const userId = 0; // TODO: get userId from local storage?
// const token = 'asdf'; // TODO: get actual token from ? local Storage?

// const userRole = userRoleService.getUserRole(userId);

// const isAuthenticated = await authService.isAuthenticated(token);

const RoleProtectedRoute = ({ desiredRole, path, children }) => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.userRolesReducer.roles);

  useEffect(() => {
    console.log('use effect');
    const func = async () => {
      const retrievedRole = await userService.getRole();
      console.log(retrievedRole.data);
      dispatch(setUserRole(retrievedRole.data));
    };
    func();
  }, []);

  return (
    <Route
      path={path}
      render={() => (desiredRole === role ? (
        children
      ) : (
        <Redirect to={{ pathname: '/' }} />
      ))}
    />
  );
};

export default RoleProtectedRoute;
