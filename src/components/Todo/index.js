import { Form, Formik, Field } from "formik";
import React from "react";
import {useTodo} from "../../hooks";
import TodoItem from './TodoItem/index';
import { SCHEMA_TASK_NAME } from '../../utils/schemaValidation';

const Todo = () => {
  const { tasks, addTask, setDoneTask, deleteTask } = useTodo([
    {
      id: Date.now(),
      body: "test test",
      isDone: false,
    },
  ]);
  return (
    <div>
      <Formik initialValues={{ body: "Task" }} onSubmit={addTask} validationSchema={SCHEMA_TASK_NAME}>
        <Form>
          <Field name="body"/>
          <input type="submit" value="add" />
        </Form>
      </Formik>
      <h2>list</h2>
      <ul>
        <TodoItem tasks={tasks} setDoneTask={setDoneTask} deleteTask={deleteTask}/>
      </ul>
    </div>
  );
};

export default Todo;
