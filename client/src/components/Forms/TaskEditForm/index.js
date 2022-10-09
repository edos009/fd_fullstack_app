import { Form, Formik, Field } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionUserCreator from "../../../actions/userCreators";

import styles from "./TaskEditForm.module.scss";

const TaskEditFormWrapper = ({ task, formik }) => {
  useEffect(() => {
    if (
      typeof task.content === "string" &&
      typeof task.isDone === "boolean" &&
      typeof task.deadLine === "string"
    ) {
      formik.setFieldValue("content", task.content);
      formik.setFieldValue("isDone", task.isDone);
      formik.setFieldValue("deadLine", task.deadLine.slice(0, 10));
    }
    // eslint-disable-next-line
  }, [task]);

  return (
    <Form className={styles.edit_task_form}>
      <Field
        name="content"
        placeholder="Content"
        className={styles.edit_task_input}
      />
      <div className={styles.edit_task_checkbox_wrapper}>
        <input
          id="isDone"
          className={styles.edit_task_checkbox}
          type="checkbox"
          name="isDone"
          value={formik.values.isDone}
          checked={formik.values.isDone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor="isDone" className={styles.edit_task_custom_checkbox}>
          Execution Status:
        </label>
      </div>
      <Field
        name="deadLine"
        placeholder="Dead Line"
        className={styles.edit_task_input}
      />
      <input
        type="submit"
        value="Save"
        className={styles.edit_task_input_submit}
      />
    </Form>
  );
};

const TaskEditForm = ({ userId, task, setIsUserTaskEditWindowActive }) => {
  const { updateUserTaskRequest, deleteUserTaskRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  const initialValues = {
    content: task.content || "",
    isDone: task.isDone || false,
    deadLine: task.deadLine || "",
  };

  const onSubmit = (values, formicBag) => {
    updateUserTaskRequest({ values: values, userId, taskId: task.id });
    setIsUserTaskEditWindowActive(false);

    if (values.isDone) {
      deleteUserTaskRequest({ userId, taskId: task.id });
    }
    formicBag.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => (
        <TaskEditFormWrapper task={task} formik={formikProps} />
      )}
    </Formik>
  );
};

export default TaskEditForm;
