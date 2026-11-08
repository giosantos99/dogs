import { Navigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

const ProtectedRouter = ({ children }) => {
  const { login } = useContext(UserContext);

  if (login) return <>{children}</>;

  if (login === false) return <Navigate to="/login" />;

  return <></>;
};

export default ProtectedRouter;
