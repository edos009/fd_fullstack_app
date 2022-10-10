import React from "react";
import { ErrorMessage, Field } from "formik";
import cx from "classnames";

import styles from "./InputForm.module.scss";

const InputForm = (props) => {
  const { name, inputClass, wrapperClass, ...anotherProps } = props;
  return (
    <div className={styles[`${wrapperClass}`]}>
      <Field name={name} {...anotherProps}>
        {({ field, form, meta }) => {
          const styleInput = cx(styles[`${inputClass}`], {
            [styles.input_error]: meta.error && meta.touched,
          });
          return <input className={styleInput} {...field} {...anotherProps} />;
        }}
      </Field>
      <ErrorMessage
        className={styles.input_err_text}
        name={name}
        component="div"
      />
    </div>
  );
};

export default InputForm;
