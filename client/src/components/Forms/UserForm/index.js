import React from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionUserCreator from "../../../actions/userCreators";
import CONSTANTS from "../../../constants";
import InputFileForm from "../InputFileForm";
import InputForm from "../InputForm";
import { schema_create_user } from "../../../utils/schemas";

import styles from "./UserForm.module.scss";

const {
  PAGES: { LIMIT },
} = CONSTANTS;

const initialValues = {
  login: "",
  password: "",
  avatar: "",
};

const UserForm = () => {
  const { offset } = useSelector(({ users }) => users);
  const { createUserRequest, getUsersRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  const onSubmit = (values, formicBag) => {
    createUserRequest(values);
    formicBag.resetForm();
    setTimeout(() => {
      getUsersRequest({ limit: LIMIT, offset });
    }, 100);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema_create_user}
    >
      {(formikProps) => (
        <Form className={styles.users_form}>
          <InputForm
            name="login"
            placeholder="Login"
            inputClass="users_input"
            wrapperClass="users_wrapper_input"
          />
          <InputForm
            name="password"
            type="password"
            placeholder="Password"
            inputClass="users_input"
            wrapperClass="users_wrapper_input"
          />
          <InputFileForm
            id="avatar"
            name="avatar"
            type="file"
            formik={formikProps}
            inputFileClass="users_input_file"
            inputFileCustomClass="users_input_file_custom"
            wrapperClass="users_wrapper_input"
          />
          <input
            type="submit"
            value="Create user"
            className={styles.users_input_submit}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
