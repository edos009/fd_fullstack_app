import React from "react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionUserCreator from "../../../actions/userCreators";
import InputForm from "../InputForm";
import { schema_task } from "../../../utils/schemas";

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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema_task}
    >
      <Form className={styles.task_form}>
        <InputForm
          name="content"
          placeholder="Task content"
          inputClass="task_input"
          wrapperClass="task_wrapper_input"
        />
        <InputForm
          name="deadLine"
          placeholder="Task end date"
          inputClass="task_input"
          wrapperClass="task_wrapper_input"
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
