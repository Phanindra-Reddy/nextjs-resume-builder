import React from "react";
import styles from "../../../styles/Input.module.css";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

function CheckBox(props) {
  const { name, ...rest } = props;

  return (
    <div>
      <Field name={name}>
        {({ field, form }) => {
          return (
            <input
              type="checkbox"
              id={name}
              className={styles.checkBox}
              checked={field.value}
              {...field}
            />
          );
        }}
      </Field>
    </div>
  );
}

export default CheckBox;
