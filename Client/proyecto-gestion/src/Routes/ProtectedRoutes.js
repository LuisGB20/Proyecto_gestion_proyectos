import { Link, Outlet } from "react-router-dom";

const ProtectedRoutes = ( canActivate, redirectPath ) => {
  if (!canActivate) {
    return <Link to={redirectPath} replace/>;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
