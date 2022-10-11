import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionUserCreator from "../../../actions/userCreators";
import { schema_task } from "../../../utils/schemas";
import InputCheckbox from "../InputCheckbox";
import InputForm from "../InputForm";

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
      <InputForm
        name="content"
        placeholder="Task Content"
        inputClass="edit_task_input"
        wrapperClass="edit_task_wrapper_input"
      />
      <InputCheckbox
        name="isDone"
        id="isDone"
        formik={formik}
        inputCheckboxWrapper="edit_task_checkbox_wrapper"
        inputCheckbox="edit_task_checkbox"
        inputCustomCheckbox="edit_task_custom_checkbox"
      />
      <InputForm
        name="deadLine"
        placeholder="Dead Line"
        inputClass="edit_task_input"
        wrapperClass="edit_task_wrapper_input"
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
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema_task}
    >
      {(formikProps) => (
        <TaskEditFormWrapper task={task} formik={formikProps} />
      )}
    </Formik>
  );
};

export default TaskEditForm;
