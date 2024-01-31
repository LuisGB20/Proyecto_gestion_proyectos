import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ( {canActivate, redirectPath} ) => {
  if (canActivate === 'Jefe') {
    return <Navigate to={redirectPath} replace/>;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
