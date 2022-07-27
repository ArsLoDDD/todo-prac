import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TodoItem = (props) => {
  const { tasks, deleteTask, setDoneTask } = props;
  return (
    <li>
      {tasks.map((task) => (
        <li key={task.id}>
            {task.isDone ? null : <CheckCircleIcon
            onClick={() => {
              setDoneTask(task.id);
            }}
          />}
          {task.body}
          <CancelIcon
            onClick={() => {
              deleteTask(task.id);
            }}
          />
        </li>
      ))}
    </li>
  );
};

export default TodoItem;
