import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "/login" }) => {
  const access = localStorage.getItem("token");

  if (!access) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
