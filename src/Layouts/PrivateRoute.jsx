import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.role);
  const ban = useSelector((state) => state.auth.isBaned);
  if (ban) {
    const banMessage = "You are banned. Contact us at ex@gmail.com to resolve this issue.";
    toast.warning(banMessage);
    return <Navigate to="/login" replace />;
  }
  if (role === "admin") {
    return <Navigate to="/admin" replace />;
  }
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
