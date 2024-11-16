import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  // Uncomment this after implementing the login logic (connect server)
  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  return <>{children}</>;
};

export default ProtectedRoute;
