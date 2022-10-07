import React from "react";
import { Form, Formik, Field } from "formik";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionUserCreator from "../../../actions/userCreators";

import styles from "./CreateTaskForm.module.scss";

const initialValues = {
  content: "",
  deadLine: "",
};

const CreateTaskForm = ({ userId }) => {
  const { createTaskRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  const onSubmit = (values, formicBag) => {
    createTaskRequest({ values, userId });
    formicBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles.task_form}>
          <Field
            name="content"
            placeholder="Task content"
            className={styles.task_input}
          />
          <Field
            name="deadLine"
            placeholder="Task end date"
            className={styles.task_input}
          />
          <input
            type="submit"
            value="Create task"
            className={styles.task_input_submit}
          />
        </Form>
    </Formik>
  );
};

export default CreateTaskForm;
