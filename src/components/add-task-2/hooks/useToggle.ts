import { useState } from 'react';
import { ToggleTuple } from '../types/types';

export const useToggle = (defaultValue: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [value, setValue] = useState(defaultValue[currentIndex]);

  const toggle = () => {

    const newIndex = (currentIndex + 1) % defaultValue.length;

    setCurrentIndex(newIndex);
    setValue(defaultValue[newIndex]);
  };

  return [value, toggle] as ToggleTuple;
};
