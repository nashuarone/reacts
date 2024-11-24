import { useState, useEffect } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string, initialValue: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];

function getValueStorage(key: string, initialValue: LocalStorageSetValue | (() => string)) {
    const savedValue = JSON.parse(localStorage.getItem(key) || '') || null;

    if (savedValue) {
        return savedValue;
    }

    if (initialValue instanceof Function) {
        return initialValue();
    }

    return initialValue;
}

export const useLocalStorage: UseLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState<LocalStorageReturnValue>(() => getValueStorage(key, initialValue));

    const removeItem = () => {
        localStorage.removeItem(key);
        setValue('')
      };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, { setItem: setValue, removeItem }];
};
