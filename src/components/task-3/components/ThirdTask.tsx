import React from 'react';
import { useHover } from '../hooks/useHover';

const Demo = () => {
  const { hovered, ref } = useHover();

  return <div ref={ref}>{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}</div>;
};

export { Demo as ThirdTask };
