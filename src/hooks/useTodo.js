import { useState } from "react";

const useTodo = (initialValue) => {
  const [state, setstate] = useState(initialValue);

  return {
    tasks,
    addTask: (value) => {
      const newTask = {
        id: Data.now(),
        body: value.body,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
    },
    setDoneTask: ()=>{},
    deleteTask: (id)=>{},
  };
};

export default useTodo;