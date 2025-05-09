import React from 'react';
import { useWindowScroll } from '../hooks/useWindowScroll';

const Demo = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}
export {Demo as AddFirstTask};
