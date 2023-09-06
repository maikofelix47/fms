"use client";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { login } from "@/app/services/auth.service";
import { setItem } from "../utils/local-storage";

export const useLogin = () => {
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [isAuthenticated, setisAuthenticated] = useState<Boolean>(false);

  const { dispatch } = useContext(AuthContext);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    setisAuthenticated(false);
    const resp: any = await login({ email, password });
    const json = await resp.json();
    if (!resp.ok) {
      setIsLoading(false);
      setError("An error occurred.Please try again");
    } else {
      setIsLoading(false);
      const { data } = json;
      const authData = {
        user: data.email,
        role: data.UserRole[0].role.name || "",
        privileges: data.UserRole[0].role?.RolePrivilege || [],
      };
      setisAuthenticated(true);
      const authContextPayload = {
        type: "set_auth",
        payload: authData,
      };
      dispatch(authContextPayload);
      setItem("user", authData);
    }
  };

  return { signIn, isLoading, error, isAuthenticated };
};
