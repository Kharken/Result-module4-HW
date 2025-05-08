import { SecondTask } from '../task-2';
import { FirstTask } from '../task-1';
import { ThirdTask } from '../task-3';

export const App = () => {
  return (
    <>
      <h2>Task 1</h2>
      <hr />
      <FirstTask />
      <hr />
      <h2>Task 2</h2>
      <hr />
      <SecondTask />
      <hr />
      <h2>Task 3</h2>
      <hr />
      <ThirdTask />
      <hr />
    </>
  );
};
