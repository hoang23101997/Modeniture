import { createContext, useContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children, value }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


// const { isAuthenticated, loggedInUser, setAuth } = useAuth();
export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const isAuthenticated = !!auth;
  const loggedInUser = {};
  if (auth && auth.email) {
    loggedInUser.email = auth?.email;
  }

  return {
    isAuthenticated,
    loggedInUser,
    setAuth,
  };
};
