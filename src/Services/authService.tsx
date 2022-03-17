export const ADMIN = "Admin";
export const USER = "User";

const roleKey = "role";
const tokenKey = "token";

export const LogUserIn = (token: string, role: string) => {
  window.localStorage.setItem(tokenKey, token);
  window.localStorage.setItem(roleKey, role);
};

export const LogUserOut = () => {
  window.localStorage.setItem(tokenKey, "");
  window.localStorage.setItem(roleKey, "");
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
