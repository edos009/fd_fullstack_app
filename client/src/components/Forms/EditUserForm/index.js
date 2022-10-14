import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import CONSTANTS from "../../../constants";
import * as ActionUserCreator from "../../../actions/userCreators";

import styles from "./EditUserForm.module.scss";
import InputForm from "../InputForm";
import InputFileForm from "../InputFileForm";
import { schema_edit_user } from "../../../utils/schemas";

const {
  PAGES: { LIMIT },
} = CONSTANTS;

const UserEditFormWrapper = ({ user, formik }) => {
  useEffect(() => {
    if (typeof user.login === "string") {
      formik.setFieldValue("login", user.login);
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Form className={styles.edit_user_form}>
      <InputForm
        name="login"
        placeholder="Login"
        inputClass="users_input"
        wrapperClass="users_wrapper_input"
      />
      <InputFileForm
        id="edit-avatar"
        name="avatar"
        type="file"
        formik={formik}
        inputFileClass="users_input_file"
        inputFileCustomClass="users_input_file_custom"
        wrapperClass="users_wrapper_input"
      />
      <input
        type="submit"
        value="Save"
        className={styles.edit_user_input_submit}
      />
    </Form>
  );
};

const UserEditForm = ({ user, setIsEditWindowActive }) => {
  const { offset } = useSelector(({ users }) => users);
  const { updateUserRequest, getUsersRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  const initialValues = {
    login: user.login || "",
    avatar: user.avatar || "",
  };

  const onSubmit = (values, formicBag) => {
    updateUserRequest({ values, userId: user.id });
    setIsEditWindowActive(false);
    formicBag.resetForm();
    setTimeout(() => {
      getUsersRequest({ limit: LIMIT, offset });
    }, 100);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema_edit_user}
    >
      {(formikProps) => (
        <UserEditFormWrapper user={user} formik={formikProps} />
      )}
    </Formik>
  );
};

export default UserEditForm;
