import { SecondTask } from '../components/task-2';
import { FirstTask } from '../components/task-1';
import { ThirdTask } from '../components/task-3';
import { FourthTask } from '../components/task-4';
import { AddFirstTask } from '../components/add-task-1';
import { AddSecondTask } from '../components/add-task-2';

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
      <h2>Task 4</h2>
      <hr />
      <FourthTask />
      <hr />
      <h2>Additional Task 1</h2>
      <hr />
      <AddFirstTask />
      <hr />
      <h2>Additional Task 2</h2>
      <hr />
      <AddSecondTask />
      <hr />
    </>
  );
};
