import React from "react";
import cx from "classnames";

import styles from "./InputFileForm.module.scss";

const InputFileForm = ({
  name,
  id,
  formik,
  inputFileClass,
  wrapperClass,
  inputFileCustomClass,
}) => {
  console.log(formik);

  return (
    <div className={styles[`${wrapperClass}`]}>
      <input
        id={id}
        name={name}
        type="file"
        onChange={(e) => {
          formik.setFieldValue(name, e.target.files[0]);
        }}
        className={styles[`${inputFileClass}`]}
      />
      <label
        htmlFor={id}
        className={cx(styles[`${inputFileCustomClass}`], {
          [styles.input_error]: formik.errors[`${name}`],
        })}
      >
        <span>Choose file to upload</span>
        <span
          className={styles.selected_file}
          title={formik.values?.avatar.name}
        >
          {formik.values.avatar
            ? formik.values?.avatar.name
            : "File not selected"}
        </span>
      </label>
      <div className={styles.input_err_text}>{formik.errors[`${name}`]}</div>
    </div>
  );
};

export default InputFileForm;
