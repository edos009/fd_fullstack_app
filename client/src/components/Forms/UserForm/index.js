import React from "react";
import { Form, Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionUserCreator from "../../../actions/userCreators";
import CONSTANTS from "../../../constants";

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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => (
        <Form className={styles.users_form}>
          <Field
            name="login"
            placeholder="Login"
            className={styles.users_input}
          />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className={styles.users_input}
          />
          <input
            id="avatar"
            name="avatar"
            type="file"
            onChange={(e) =>
              formikProps.setFieldValue("avatar", e.target.files[0])
            }
            className={styles.users_input_file}
          />
          <label htmlFor="avatar" className={styles.users_input_file_custom}>
            <span>Choose file to upload</span>
          </label>
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
