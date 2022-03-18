import { createBrowserHistory } from "history";
export const ADMIN = "Admin";
export const USER = "User";

const roleKey = "role";
const tokenKey = "token";
const unameKey = "username";

const history = createBrowserHistory();

export const LogUserIn = (token: string, role: string, username: string) => {
  window.localStorage.setItem(tokenKey, token);
  window.localStorage.setItem(roleKey, role);
  window.localStorage.setItem(unameKey, username);
  history.push("/home");
};

export const LogUserOut = () => {
  window.localStorage.setItem(tokenKey, "");
  window.localStorage.setItem(roleKey, "");
  window.localStorage.setItem(unameKey, "");
};

export const GetUsername = () => {
  let inStore = window.localStorage.getItem(unameKey);
  return inStore ? inStore : "";
};

export const GetUserRole = (): string => {
  let inStore = window.localStorage.getItem(roleKey);
  return inStore ? inStore : "";
};

export const IsAdmin = (): boolean => {
  let inStore = window.localStorage.getItem(roleKey);
  return inStore !== null && inStore === ADMIN;
};

export const IsLoggedIn = (): boolean => {
  let inStore = window.localStorage.getItem(tokenKey);
  return inStore !== null && inStore !== "";
};

export const GetToken = (): string => {
  let inStore = window.localStorage.getItem(tokenKey);
  return inStore !== null ? `Bearer ${inStore}` : "";
};
