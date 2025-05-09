import {useWindowEvent} from '../../task-4/hooks/useWindowEvent';
import { useState } from 'react';
import { ScrollParams, ScrollPositionState, ScrollTuple } from '../types/types';

export const useWindowScroll = () => {

  const initialScrollPosition: ScrollPositionState = {
    x: 0,
    y: 0,
  };

  const [scroll, setScroll] = useState(initialScrollPosition);

  useWindowEvent('scroll', () => {
    setScroll((prev) => ({
      ...prev,
      x: window.scrollX,
      y: window.scrollY,
    }));
  })

  const scrollTo = (params: ScrollParams) => {
    const { y } = params;
    window.scrollTo({top: y})
  }

  return [scroll, scrollTo] as ScrollTuple;
}
