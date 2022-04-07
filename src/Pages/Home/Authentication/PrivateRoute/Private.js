import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const Private = ({ children }) => {
  const { user, isLoading } = useAuth();

  let location = useLocation();
  if (isLoading) {
    return <div></div>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default Private;
