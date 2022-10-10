import React from "react";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import cx from "classnames";

import * as ActionUserCreator from "../../../actions/userCreators";
import CONSTANTS from "../../../constants";

import styles from "./UserForm.module.scss";
import InputForm from "../InputForm";
import { schema_create_user } from "../../../utils/schemas";

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
          <div className={styles.users_wrapper_input}>
            <input
              id="avatar"
              name="avatar"
              type="file"
              onChange={(e) => {
                formikProps.setFieldValue("avatar", e.target.files[0]);
              }}
              className={styles.users_input_file}
            />
            <label
              htmlFor="avatar"
              className={cx(styles.users_input_file_custom, {
                [styles.input_error]: formikProps.errors.avatar,
              })}
            >
              <span>Choose file to upload</span>
            </label>
            <div
              name="avatar"
              component="div"
              className={styles.input_err_text}
            >
              {formikProps.errors.avatar}
            </div>
          </div>
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
