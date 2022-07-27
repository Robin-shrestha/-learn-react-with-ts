export const LOGIN = "login";
export const LOGOUT = "logout";

export const login = () => {
  return { type: LOGIN };
};

export const logout = () => {
  return { type: LOGOUT };
};
