"use client";
import React, { useReducer } from "react";
import { AuthContext } from "./auth-context";
import { authReducer } from "./auth-reducer";
import { getItem } from "../utils/local-storage";
import { AuthState } from "../types/auth-state";
interface AuthProviderProps {
  children: React.ReactNode;
}
function AuthProvider({ children }: AuthProviderProps) {
  const [auth, dispatch] = useReducer(authReducer, getContextObj());
  return (
    <AuthContext.Provider value={{ auth, dispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

function getContextObj(): AuthState {
  const authContext = getItem("user");
  if (authContext) {
    return authContext;
  } else {
    return {
      user: "",
      role: "",
      privileges: [],
    };
  }
}

export default AuthProvider;
