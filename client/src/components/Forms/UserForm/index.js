import React from "react";
import { Form, Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionUserCreator from "../../../actions/userCreators";
import CONSTANTS from "../../../constants";

const {PAGES: {LIMIT}} = CONSTANTS


const initialValues = {
  login: "",
  password: "",
  avatar: "",
};

const UserForm = () => {
  const {offset} = useSelector(({users}) => users)
  const { createUserRequest, getUsersRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  const onSubmit = (values, formicBag) => {
    // console.log(values);
    createUserRequest(values);
    formicBag.resetForm();
    getUsersRequest({limit: LIMIT, offset });
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => (
        <Form>
          <Field name="login" placeholder="Login" />
          <Field name="password" type="password" placeholder="Password" />
          <input
            name="avatar"
            type="file"
            placeholder="Login"
            onChange={(e) => formikProps.setFieldValue('avatar', e.target.files[0])}
          />
          <input type="submit" value="Create user" />
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
