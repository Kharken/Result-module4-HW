import { useWindowEvent } from './useWindowEvent';
import { useState } from 'react';
import { ViewportState } from '../types/types';

export const useViewportSize = () => {
  const initialState: ViewportState = {
    width: window.innerWidth,
    height: window.innerHeight,
  }; // ← Добавлена точка с запятой

  const [viewportSize, setViewportSize] = useState<ViewportState>(initialState);

  useWindowEvent('resize', () => {
    setViewportSize((prev) => ({
      ...prev,
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  });

  return viewportSize;
};
