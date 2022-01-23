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
import { addEducation, deleteEducation } from "../../redux/actions/Actions";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DRAG_DROP } from "../../redux/actions/ActionTypes";

function Education() {
  const state = useSelector((state) => state.education);
  const { items } = state;
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    institution: Yup.string().required("Required!"),
    major: Yup.string().required("Required!"),
    grade: Yup.string().required("Required!"),
    startDate: Yup.string().required("Required!"),
    endDate: Yup.string().required("Required!"),
    city: Yup.string().required("Required!"),
  });

  const onSubmit = (values, { resetForm }) => {
    const {
      enable,
      institution,
      major,
      grade,
      startDate,
      endDate,
      description,
      city,
    } = values;

    dispatch(
      addEducation(
        enable,
        institution,
        major,
        grade,
        startDate,
        endDate,
        description,
        city
      )
    );
    resetForm();
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    dispatch({
      type: DRAG_DROP.DRAG_DROP_EDUCATION,
      payload: {
        result: result,
      },
    });

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const lists = reorder(items, result.source.index, result.destination.index);

    items = lists;
  };

  return (
    <div className={styles.profileDiv}>
      <Formik
        initialValues={{
          enable: true,
          institution: "",
          major: "",
          grade: "",
          startDate: "",
          endDate: "",
          description: "",
          city: "",
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
              <FormControl control="checkbox" type="checkbox" name="enable" />
              <FormControl
                control="input"
                type="text"
                name="education"
                label=""
                placeholder="Education"
              />
            </Box>

            <Divider sx={{ margin: "20px 0px" }} />

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {items.map((edu, index) => (
                      <Draggable
                        key={edu.id}
                        draggableId={edu.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Accordion
                              sx={{
                                marginBottom: "1rem",
                                border: "1px solid #4A5568",
                              }}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`${edu.id}-content`}
                                id={`${edu.id}-header`}
                              >
                                <Typography>{edu.institution}</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                              <Typography className={styles.box}>
                                  {edu.institution}
                                </Typography>
                                <Typography className={styles.box}>
                                  CGPS/Percentage: <b>{edu.grade}</b>
                                </Typography>
                                <Typography className={styles.box}>
                                  City: <b>{edu.city}</b>
                                </Typography>
                                <Typography className={styles.box}>
                                  {edu.startDate} <b>to</b> {edu.endDate}
                                </Typography>
                                <Typography className={styles.box}>
                                  {edu.description}
                                </Typography>
                                <Button
                                  aria-label="delete"
                                  sx={{ color: "#E9493C" }}
                                  variant="outlined"
                                  color="error"
                                  onClick={() =>
                                    dispatch(deleteEducation(edu.id))
                                  }
                                >
                                  <DeleteIcon />
                                  Delete
                                </Button>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            {items.length > 0 && <Divider sx={{ margin: "20px 0px" }} />}

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Add Education</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl
                  control="input"
                  type="text"
                  name="institution"
                  label="Name"
                  placeholder="JNTU University"
                />

                <FormControl
                  control="input"
                  type="text"
                  name="major"
                  label="Major"
                  placeholder="Undergraduate in CSE"
                />

                <FormControl
                  control="input"
                  type="text"
                  name="grade"
                  label="Grade"
                  placeholder="7.2 CGPA"
                />

                <Box sx={{ display: "flex" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl
                        control="input"
                        type="text"
                        name="startDate"
                        label="Start Date"
                        placeholder="Jun-2020"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <FormControl
                        control="input"
                        type="text"
                        name="endDate"
                        label="End Date"
                        placeholder="Oct-2021"
                      />
                    </Grid>
                  </Grid>
                </Box>

                <FormControl
                  control="input"
                  type="text"
                  name="city"
                  label="City"
                  placeholder="Hyderabad"
                />

                <FormControl
                  control="textarea"
                  type="textarea"
                  name="description"
                  label="Description"
                  placeholder="To obtain a job within my chosen field that will challenge me and allow me to use my education, skills and past experiences in a way that is mutually beneficial to both myself and my employer and allow for future growth and advancement."
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

export default memo(Education);
