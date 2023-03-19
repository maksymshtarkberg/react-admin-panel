import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "/login" }) => {
  const access = localStorage.getItem("token");
  console.log(access);
  if (!access) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
