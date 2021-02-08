import store from '../redux/store';

const getRole = () => {
  const role = store.getState().userRolesReducer.userRole;
  console.log(role);
  if (role === 'VISITOR') {
    const localStorageRole = localStorage.getItem('userRole');
    if (localStorageRole) {
      return localStorageRole;
    }
  }
  return role;
};

export default getRole;
