import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/storeContext";

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute = ({ redirectPath = "/login" }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  // If user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  // Otherwise, render the children components (the protected content)
  return <Outlet />;
};

export default ProtectedRoute;
