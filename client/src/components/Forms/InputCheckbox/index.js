import React from 'react';

import styles from './InputCheckbox.module.scss'

const InputCheckbox = ({
  name,
  id,
  formik,
  inputCheckboxWrapper,
  inputCheckbox,
  inputCustomCheckbox,
}) => {
  return (
    <div className={styles[`${inputCheckboxWrapper}`]}>
      <input
        id={id}
        className={styles[`${inputCheckbox}`]}
        type="checkbox"
        name={name}
        value={formik.values[`${name}`]}
        checked={formik.values[`${name}`]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label htmlFor={id} className={styles[`${inputCustomCheckbox}`]}>
        Execution Status:
      </label>
    </div>
  );
};

export default InputCheckbox;
