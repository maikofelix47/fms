import { User } from "../types/user";
import { getApiBaseUrl } from "./config.service";

export async function login(payload: User) {
  const apiUrl = getApiBaseUrl();
  return fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function signUp(payload: User) {
  const apiUrl = getApiBaseUrl();
  const resp = await fetch(`${apiUrl}/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await resp.json();

  return data;
}
