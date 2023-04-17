const validates = {
  email: 'It must be an email',
  min: 'Does not comply with the minimum of characters',
  sameAsPassword: 'The value does not match the password',
  validatePassword: 'It must contain a number and a capital letter',
  required: 'Required field',
  loginFailed: 'Incorrect email or password'
};

export const getError = (propertie) => {
  if (propertie.$params) {
    const foundError = Object.keys(propertie.$params).find((element) => !propertie[element]);
    return validates[foundError];
  }
};
