"use client";
import React, { useReducer } from "react";
import { AuthContext } from "./auth-context";
import { authReducer } from "./auth-reducer";
interface AuthProviderProps {
  children: React.ReactNode;
}
function AuthProvider({ children }: AuthProviderProps) {
  const [auth, dispatch] = useReducer(authReducer, {
    user: "",
    privileges: [],
  });
  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
