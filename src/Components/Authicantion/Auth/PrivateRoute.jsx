// PrivateRoute.jsx (for users)
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from './Authcontext';


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role !== 'user') {
    return <Navigate to="/unauthorized" replace />;
  }

  return children ? children : user;
};

export default PrivateRoute;