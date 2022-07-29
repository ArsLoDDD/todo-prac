import React from "react";
import { Form, Formik, Field } from "formik";
import { SCHEMA_TASK_NAME } from "../../../utils/schemaValidation";
import styles from "./TodoFormHard.module.scss";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
const TodoForm = (props) => {
  const { addTask } = props;
  return (
    <Formik initialValues={{ body: "" }} validationSchema={SCHEMA_TASK_NAME}>
      <Form className={styles.formContainer}>
        <Field name="body" />
        <div className={styles.addCross}>
          <AddBoxSharpIcon onClick={addTask} fontSiza="small" />
        </div>
      </Form>
    </Formik>
  );
};

export default TodoForm;
