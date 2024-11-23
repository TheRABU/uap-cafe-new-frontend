import { useContext } from "react";
import { AuthContext } from "../providers/AuthenticationProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return setTimeout(() => {
      <div className="flex gap-4 p-4 flex-wrap justify-center">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/199956/loading-loader.svg"
          alt="Loading icon"
        />
      </div>;
    }, 1000);
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoutes;
