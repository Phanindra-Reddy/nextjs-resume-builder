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
import { Box, Grid, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject } from "../../redux/actions/Actions";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DRAG_DROP } from "../../redux/actions/ActionTypes";

function Projects() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.projects);
  const { items } = state;

  const validationSchema = Yup.object({
    title: Yup.string().required("Required!"),
    demoUrl: Yup.string().required("Required!"),
  });

  const onSubmit = (values, { resetForm }) => {
    const { enable, id, title, demoUrl, description } = values;
    dispatch(addProject(enable, id, title, demoUrl, description));
    resetForm();
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    dispatch({
      type: DRAG_DROP.DRAG_DROP_PROJECTS,
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
          title: "",
          demoUrl: "",
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
                name="projects"
                label=""
                placeholder="Projects"
              />
            </Box>

            <Divider sx={{ margin: "20px 0px" }} />

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {items.map((project, index) => (
                      <Draggable
                        key={project.id}
                        draggableId={project.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Accordion sx={{marginBottom:"1rem", border:"1px solid #4A5568"}}>
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`${project.id}-content`}
                                id={`${project.id}-header`}
                              >
                                <Typography>{project.title}</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography className={styles.box}>
                                  {project.title}
                                </Typography>
                                <Typography className={styles.box}>
                                  {project.demoUrl}
                                </Typography>
                                <Typography className={styles.box}>
                                  {project.description}
                                </Typography>
                                <Button
                                  aria-label="delete"
                                  sx={{ color: "#E9493C" }}
                                  variant="outlined"
                                  color="error"
                                  onClick={() =>
                                    dispatch(deleteProject(project.id))
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
                <Typography>Add Projects</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl
                  control="input"
                  type="text"
                  name="title"
                  label="Title"
                  placeholder="Resume Builder"
                />

                <FormControl
                  control="input"
                  type="text"
                  name="demoUrl"
                  label="Demo Url"
                  placeholder="https://somedemourl.web.app"
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

export default memo(Projects);
