import React from "react";
import styles from "../../../styles/Input.module.css";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

function Input(props) {
  const { label, name, ...rest } = props;

  return (
    <div style={{ marginBottom: "0.75rem" }}>
      <label htmlFor={name} className={styles.label}>
        {label ? label : ""}
      </label>
      <Field name={name}>
        {({ field, form }) => {
          return (
            <input
              type="text"
              id={name}
              className={styles.input}
              {...field}
              {...rest}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
