import React, { useState, useEffect, memo } from "react";
import FormControl from "../from controls/FormControl";
import Divider from "@mui/material/Divider";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SaveButton from "../from controls/Button/SaveButton";
import styles from "../../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/actions/ActionTypes";

function Profile(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);

  const initialValues = {
    firstName: "",
    lastName: "",
    photoUrl: "",
    role: "",
    address: "",
    postalcode: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    website: "",
    linkedin: "",
    github: "",
    objective: "",
  };

  const [localState, setLocalState] = React.useState(initialValues);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required!"),
    lastName: Yup.string().required("Required!"),
    photoUrl: Yup.string().required("Required!"),
    role: Yup.string().required("Required!"),
    address: Yup.string().required("Required!"),
    city: Yup.string().required("Required!"),
    country: Yup.string().required("Required!"),
    phone: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email!").required("Required!"),
    website: Yup.string().required("Required!"),
    linkedin: Yup.string().required("Required!"),
    github: Yup.string().required("Required!"),
    objective: Yup.string().required("Required!"),
  });

  const onSubmit = (values) => {
    var data = {
      firstName: values.firstName,
      lastName: values.lastName,
      photoUrl: values.photoUrl,
      role: values.role,
      address: values.address,
      postalcode: values.postalcode,
      city: values.city,
      country: values.country,
      phone: values.phone,
      email: values.email,
      website: values.website,
      linkedin: values.linkedin,
      github: values.github,
      objective: values.objective,
    };
    dispatch({
      type: ACTIONS.ADD_PROFILE,
      payload: data,
    });
  };

  return (
    <div className={styles.profileDiv}>
      <Formik
        initialValues={{
          firstName: state.firstName ? state.firstName : localState.firstName,
          lastName: state.lastName ? state.lastName : localState.lastName,
          photoUrl: state.photoUrl ? state.photoUrl : localState.photoUrl,
          role: state.role ? state.role : localState.role,
          address: state.address ? state.address : localState.address,
          postalcode: state.postalcode
            ? state.postalcode
            : localState.postalcode,
          city: state.city ? state.city : localState.city,
          country: state.country ? state.country : localState.country,
          phone: state.phone ? state.phone : localState.phone,
          email: state.email ? state.email : localState.email,
          website: state.website ? state.website : localState.website,
          linkedin: state.linkedin ? state.linkedin : localState.linkedin,
          github: state.github ? state.github : localState.github,
          objective: state.objective ? state.objective : localState.objective,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ touched, errors, setFieldValue, values, isSubmitting }) => (
          <Form>
            <FormControl
              control="input"
              type="text"
              name="profile"
              label=""
              value="Profile"
              placeholder="Profile"
              disabled
            />
            <Divider sx={{ margin: "20px 0px" }} />

            <FormControl
              control="input"
              type="text"
              name="photoUrl"
              label="Photo URL"
              value={values.photoUrl}
              placeholder="https://i.imgur.com/Icr472Z.jpg"
            />

            <FormControl
              control="input"
              type="text"
              name="firstName"
              label="First Name"
              placeholder="Phanindra"
              value={values.firstName}
            />

            <FormControl
              control="input"
              type="text"
              name="lastName"
              label="last Name"
              placeholder="Reddy"
              value={values.lastName}
            />

            <FormControl
              control="input"
              type="text"
              name="role"
              label="Role/Position"
              placeholder="Front-End Dev"
              value={values.role}
            />

            <Divider sx={{ margin: "20px 0px" }} />

            <FormControl
              control="input"
              type="text"
              name="address"
              label="Address"
              placeholder="2/12 Jubliee Hills"
              value={values.address}
            />

            <FormControl
              control="input"
              type="text"
              name="postalcode"
              label="Postal Code"
              placeholder="522360"
              value={values.postalcode}
            />

            <FormControl
              control="input"
              type="text"
              name="city"
              label="City"
              placeholder="Hyderabad"
              value={values.city}
            />

            <FormControl
              control="input"
              type="text"
              name="country"
              label="Country"
              placeholder="India"
              value={values.country}
            />

            <Divider sx={{ margin: "20px 0px" }} />

            <FormControl
              control="input"
              type="text"
              name="phone"
              label="Phone Number"
              placeholder="9995566111"
              value={values.phone}
            />

            <FormControl
              control="input"
              type="email"
              name="email"
              label="email"
              placeholder="example123@gmail.com"
              value={values.email}
            />

            <FormControl
              control="input"
              type="text"
              name="website"
              label="Website/Portfolio"
              placeholder="www.someurl.com"
              value={values.website}
            />

            <FormControl
              control="input"
              type="text"
              name="linkedin"
              label="Linkedin"
              placeholder="linkedin.com/someuser"
              value={values.linkedin}
            />

            <FormControl
              control="input"
              type="text"
              name="github"
              label="Github"
              placeholder="github.com/someuser"
              value={values.github}
            />

            <Divider sx={{ margin: "20px 0px" }} />

            <FormControl
              control="textarea"
              type="textarea"
              name="objective"
              label="Professional Objective"
              placeholder="To obtain a job within my chosen field that will challenge me and allow me to use my education, skills and past experiences in a way that is mutually beneficial to both myself and my employer and allow for future growth and advancement."
              value={values.objective}
            />

            <SaveButton title="Save Pofile" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default memo(Profile);
