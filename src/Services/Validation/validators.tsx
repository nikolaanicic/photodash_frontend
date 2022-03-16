export const validateNotEmptyField = (field: string): boolean => {
  return field !== "";
};

export const validatePassword = (password: string): boolean => {
  return validateNotEmptyField(password) && password.length > 6;
};

export const validateUsername = (username: string): boolean => {
  return validateNotEmptyField(username);
};
