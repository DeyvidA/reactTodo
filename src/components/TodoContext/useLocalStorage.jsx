import { useEffect, useState } from "react";

const useLocalStorage = (itemName, initialValues) => {
  let localStorageItem = JSON.parse(localStorage.getItem(itemName));
  if (!localStorageItem) {
    localStorageItem = initialValues;
  }

  const [item, saveItems] = useState(localStorageItem);

  useEffect(() => {
    if (localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(item));
    } else {
      localStorage.setItem(itemName, JSON.stringify(initialValues));
    }
  }, [item, localStorageItem]);

  return [item, saveItems];
};

export { useLocalStorage };
