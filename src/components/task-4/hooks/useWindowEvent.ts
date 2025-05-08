import { useEffect } from 'react';
import { WindowEventCallback, WindowEventOptions, WindowEventType } from '../types/types';

export const useWindowEvent = <T extends WindowEventType>(
  type: T,
  listener: WindowEventCallback<T>,
  options?: WindowEventOptions
) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
};
