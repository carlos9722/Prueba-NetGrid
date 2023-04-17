export const validatePassword = (value) => RegExp(/^(?=.*\d)(?=.*[A-Z]).+$/).test(value);
