export const getStorageItem = (key) => {
  try {
    if (!key) return false;
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    return false;
  }
};

export const setStorageItem = (key, value) => {
  try {
    if (!key || !value) return false;
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    return false;
  }
};

export const calculateTotal = (items) => {
  const total = items.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0,
  );
  const totalItem = items.reduce((prev, curr) => prev + curr.quantity, 0);

  return { total, totalItem };
};
