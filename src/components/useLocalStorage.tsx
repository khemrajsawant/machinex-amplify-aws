import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  // const savedValue = JSON.parse(localStorage.getItem(key));
  // if (savedValue) return savedValue;
  // ////console.log("initialValue", initialValue);
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    ////console.log("initialValue", {key,initialValue});
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  ////console.log("value", value);

  return [value, setValue];
}
