import React, { memo } from "react";
import FormControl from "../from controls/FormControl";
import Divider from "@mui/material/Divider";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SaveButton from "../from controls/Button/SaveButton";
import styles from "../../styles/Home.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/actions/ActionTypes";

function AboutMe() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.aboutme);

  const initialValues = {
    enable: true,
    description: "",
  };

  const [localState, setLocalState] = React.useState(initialValues);

  const validationSchema = Yup.object({
    description: Yup.string().required("Required!"),
  });

  const onSubmit = (values) => {
    var data = {
      enable: values.enable,
      description: values.description,
    };
    dispatch({
      type: ACTIONS.ADD_ABOUT_ME,
      payload: data,
    });
  };

  return (
    <div className={styles.profileDiv}>
      <Formik
        initialValues={{
          enable: state.enable ? state.enable : localState.enable,
          description: state.description ? state.description : localState.description,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ touched, errors, setFieldValue, values, isSubmitting }) => (
          <Form>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl
                control="checkbox"
                type="checkbox"
                name="enable"
                checked={values.enable == "Y" ? true : false}
                value={values.enable}
              />
              <FormControl
                control="input"
                type="text"
                name="aboutme"
                label=""
                placeholder="About Me"
              />
            </Box>

            <Divider sx={{ margin: "20px 0px" }} />

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>About Me</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FormControl
                  control="textarea"
                  type="textarea"
                  name="description"
                  label="About Me"
                  value={values.description}
                  placeholder="A Javascript developer with 5.8 years of experience in React, Node for Retail eCommerce, POS and Storage domain"
                  onChange={(event) => {
                    setFieldValue((values.description = event.target.value));
                  }}
                />

                <SaveButton title="+ Add" />
              </AccordionDetails>
            </Accordion>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default memo(AboutMe);
