import React from 'react';
import { useViewportSize } from '../hooks/useViewportSize';

const Demo = () => {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
export {Demo as FourthTask};
