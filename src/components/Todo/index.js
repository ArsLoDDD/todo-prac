import { Form, Formik } from "formik";
import React from "react";
import useTodo from "../../hooks/useTodo";

const Todo = () => {
  const { tasks, addTask, setDoneTask, deleteTask } = useTodo([
    {
      id: Data.now(),
      body: "test test",
      isDone: false,
    },
  ]);
  return (
    <div>
      <Formik initialValues={{ body: "" }} onSubmit={addTask}>
        <Form>
          <Field name="body" />
          <input type="submit" value="add" />
        </Form>
      </Formik>
      <h2>list</h2>
      <ul>
        {
            tasks.map((task)=><li key={task.id}>{task.body}</li>)
        }
      </ul>
    </div>
  );
};

export default Todo;
