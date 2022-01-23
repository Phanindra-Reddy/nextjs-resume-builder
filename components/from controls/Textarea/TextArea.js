import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
import styles from "../../../styles/Input.module.css";
import Link from "next/link";

function TextArea(props) {
  const { label, name, ...rest } = props;

  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        {label ? label : ""}
      </label>
      <Field
        component="textarea"
        rows="15"
        columns="5"
        id={name}
        name={name}
        {...rest}
        className={styles.textarea}
      ></Field>
      <small>
        You can use{" "}
        <Link href="https://www.markdownguide.org/basic-syntax/">
          <a className={styles.link} target="_blank">
            GitHub Flavored Markdown
          </a>
        </Link>{" "}
        to style this section of the text.
      </small>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default TextArea;
