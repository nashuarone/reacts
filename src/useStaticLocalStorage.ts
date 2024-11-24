type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setStaticItem: (value: LocalStorageSetValue) => void;
    removeStaticItem: () => void;
  },
];

export const useStaticLocalStorage: UseLocalStorage = (key) => {
  const value = localStorage.getItem(key);

  const setStaticItem = (value: LocalStorageSetValue) => {    
    localStorage.setItem(key, value);
  };

  const removeStaticItem = () => {
    localStorage.removeItem(key);
  };

  return [value, { setStaticItem, removeStaticItem }];
};
