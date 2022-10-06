import { Form, Formik, Field } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import CONSTANTS from "../../../constants";
import * as ActionUserCreator from "../../../actions/userCreators";

import styles from "./EditUserForm.module.scss";

const {
  PAGES: { LIMIT },
} = CONSTANTS;

const UserEditForm = ({ user, setIsEditWindowActive }) => {
  const { offset } = useSelector(({ users }) => users);
  const { updateUserRequest, getUsersRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  const initialValues = {
    login: user.login,
    password: "",
    avatar: user.avatar,
  };

  const onSubmit = (values, formicBag) => {
    updateUserRequest({ values: values, userId: user.id });
    setIsEditWindowActive(false);
    formicBag.resetForm();
    setTimeout(() => {
      getUsersRequest({ limit: LIMIT, offset });
    }, 100);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => (
        <Form className={styles.edit_user_form}>
          <Field
            name="login"
            placeholder="Login"
            className={styles.edit_user_input}
          />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className={styles.edit_user_input}
          />
          <input
            id="edit_avatar"
            name="avatar"
            type="file"
            onChange={(e) =>
              formikProps.setFieldValue("avatar", e.target.files[0])
            }
            className={styles.edit_user_input_file}
          />
          <label
            htmlFor="edit_avatar"
            className={styles.edit_user_input_file_custom}
          >
            <span>Choose file to upload</span>
          </label>
          <input
            type="submit"
            value="Save"
            className={styles.edit_user_input_submit}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UserEditForm;
