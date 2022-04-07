import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

const Private = ({ children }) => {
  const { user, isLoading } = useAuth();

  let location = useLocation();
  if (isLoading) {
    return <div className="spinner-border text-success" role="status">
    <span className="visually-hidden">Loading...</span>
</div>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default Private;
