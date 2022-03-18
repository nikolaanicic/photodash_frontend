import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isLoggedIn, children }: any) => {
  if (!isLoggedIn) {
    return <Navigate to="/visitors" />;
  }
  return children;
};
