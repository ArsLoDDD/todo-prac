import React from "react";
import { useTodo } from "../../hooks";
import TodoItemHard from "./TodoItemHard/index";
import TodoFormHard from "./TodoFormHard/index";
import styles from "./TodoHard.module.scss";


const Todo = () => {
  const { tasks, addTask, setDoneTask, deleteTask } = useTodo([
    {
      id: Date.now(),
      body: "Wash the car",
      isDone: true,
    },
    {
      id: Date.now() + 1,
      body: "Do the dishes",
      isDone: true,
    },
    {
      id: Date.now() + 2,
      body: "Walk the dog",
      isDone: false,
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <TodoFormHard addTask={addTask} />
        <div className={styles.selecTasks}>
            <select  name="typeOfTasts" id="cars">
              <option value="All">All</option>
              <option value="Done">Done</option>
              <option value="NotDone">Not Done</option>
            </select>
          </div>
      </div>
      <div>
        <ul>
          <TodoItemHard
            tasks={tasks}
            setDoneTask={setDoneTask}
            deleteTask={deleteTask}
          />
        </ul>
      </div>
    </div>
  );
};

export default Todo;
