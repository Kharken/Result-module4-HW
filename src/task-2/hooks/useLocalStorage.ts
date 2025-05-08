import { LocalStorageReturnValue, UseLocalStorage } from '../types/types';
import { useState } from 'react';

export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState<LocalStorageReturnValue>('');

  const setItem = (newValue: string) => {
    setValue(newValue);
    return localStorage.setItem(key, newValue);
  }

  const removeItem = () => {
    setValue('');
    localStorage.removeItem(key);
  };

    return [value, {
      setItem, removeItem
    }]
}
