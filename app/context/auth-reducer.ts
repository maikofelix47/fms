"use client";
import { AuthState } from "../types/auth-state";
interface AuthAction {
  type: string;
  payload: AuthState;
}
export function authReducer(auth: AuthState, action: AuthAction) {
  switch (action.type) {
    case "set_auth": {
      const newAuth = {
        ...action.payload,
      };
      return {
        ...action.payload,
      };
    }
    case "reset_auth": {
      return {
        user: "",
        role: "",
        privileges: [],
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
