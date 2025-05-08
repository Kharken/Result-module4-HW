import { useRef, useState, useEffect } from 'react';

export const useHover = () => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) return; // Выходим, если элемент еще не создан

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);

    // Очистка при размонтировании
    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { hovered, ref };
};
