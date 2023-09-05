"use client";
interface AuthState {
  user: string;
  privileges: any[];
}
interface AuthAction {
  type: string;
  payload: AuthState;
}
export function authReducer(auth: AuthState, action: AuthAction) {
  switch (action.type) {
    case "set_auth": {
      return {
        ...action.payload,
      };
    }
    case "reset_auth": {
      return {
        user: "",
        privileges: [],
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
