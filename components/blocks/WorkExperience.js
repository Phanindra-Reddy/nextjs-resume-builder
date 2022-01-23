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
import {
  addWorkExperience,
  deleteWorkExperience,
} from "../../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DRAG_DROP } from "../../redux/actions/ActionTypes";

function WorkExperience() {
  const state = useSelector((state) => state.workExperience);
  const { items } = state;
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    companyName: Yup.string().required("Required!"),
    role: Yup.string().required("Required!"),
    companyUrl: Yup.string().required("Required!"),
    startDate: Yup.string().required("Required!"),
    endDate: Yup.string().required("Required!"),
  });

  const onSubmit = (values, { resetForm }) => {
    const {
      enable,
      companyName,
      role,
      companyUrl,
      startDate,
      endDate,
      description,
    } = values;
    dispatch(
      addWorkExperience(
        enable,
        companyName,
        role,
        companyUrl,
        startDate,
        endDate,
        description
      )
    );
    resetForm();
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    dispatch({
      type: DRAG_DROP.DRAG_DROP_WORK_EXPERIENCE,
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
          companyName: "",
          role: "",
          companyUrl: "",
          startDate: "",
          endDate: "",
          description: "",
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
                name="work"
                label=""
                placeholder="Work Experience"
              />
            </Box>

            <Divider sx={{ margin: "20px 0px" }} />

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {items.map((work, index) => (
                      <Draggable
                        key={work.id}
                        draggableId={work.id}
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
                                aria-controls={`${work.id}-content`}
                                id={`${work.id}-header`}
                              >
                                <Typography>{work.companyName}</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography className={styles.box}>
                                  {work.companyName}
                                </Typography>
                                <Typography className={styles.box}>
                                  {work.companyUrl}
                                </Typography>
                                <Typography className={styles.box}>
                                  {work.role}
                                </Typography>
                                <Typography className={styles.box}>
                                  {work.startDate} <b>to</b> {work.endDate}
                                </Typography>
                                <Typography className={styles.box}>
                                  {work.description}
                                </Typography>
                                <Button
                                  aria-label="delete"
                                  sx={{ color: "#E9493C" }}
                                  variant="outlined"
                                  color="error"
                                  onClick={() =>
                                    dispatch(deleteWorkExperience(work.id))
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
                <Typography>Add Work Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl
                  control="input"
                  type="text"
                  name="companyName"
                  label="Comapny Name"
                  placeholder="Google"
                />

                <FormControl
                  control="input"
                  type="text"
                  name="companyUrl"
                  label="Company URL"
                  placeholder="www.google.com"
                />

                <FormControl
                  control="input"
                  type="text"
                  name="role"
                  label="Role/Position"
                  placeholder="Front-End Dev"
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

export default memo(WorkExperience);
