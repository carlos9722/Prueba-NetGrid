export const set = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key) => {
  const data = window.localStorage.getItem(key);
  return JSON.parse(data);
};

export const remove = (key) => window.localStorage.removeItem(key);
