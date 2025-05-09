import { useToggle } from '../hooks/useToggle';

const Demo = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}

export {Demo as AddSecondTask};
