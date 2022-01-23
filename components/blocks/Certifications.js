import React,{memo} from "react";
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
import {useDispatch, useSelector} from "react-redux";
import {addCertificates, deleteCertificate} from "../../redux/actions/Actions";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DRAG_DROP } from "../../redux/actions/ActionTypes";


function Certifications(){
  const state = useSelector((state) => state.certifications);
  const { items } = state;
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    authority: Yup.string().required("Required!"),
    certificateUrl: Yup.string().required("Required!"),
  });

  const onSubmit = (values, { resetForm }) => {
    const {enable, id, name, authority, certificateUrl, description} = values;
    dispatch(addCertificates(enable, id, name, authority, certificateUrl, description))
    resetForm();
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    dispatch({
      type: DRAG_DROP.DRAG_DROP_CERTIFICATIONS,
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
            enable: false,
            name: "",
            authority: "",
            certificateUrl: "",
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
                  name="certifications"
                  label=""
                  placeholder="Certifications"
                />
              </Box>

              <Divider sx={{ margin: "20px 0px" }} />

              <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {items.map((cetificate, index) => (
                      <Draggable
                        key={cetificate.id}
                        draggableId={cetificate.id}
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
                                aria-controls={`${cetificate.id}-content`}
                                id={`${cetificate.id}-header`}
                              >
                                <Typography>{cetificate.name}</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                              <Typography className={styles.box}>
                                  {cetificate.name}
                                </Typography>
                                <Typography className={styles.box}>
                                  {cetificate.certificateUrl}
                                </Typography>
                                <Typography className={styles.box}>
                                  {cetificate.authority}
                                </Typography>
                                <Typography className={styles.box}>
                                  {cetificate.description}
                                </Typography>
                                <Button
                                  aria-label="delete"
                                  sx={{ color: "#E9493C" }}
                                  variant="outlined"
                                  color="error"
                                  onClick={() =>
                                    dispatch(deleteCertificate(cetificate.id))
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
                  <Typography>Add Certifications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControl
                    control="input"
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="CS50: Intro to Computer Science"
                  />

                  <FormControl
                    control="input"
                    type="text"
                    name="authority"
                    label="Authority"
                    placeholder="JNTU University"
                  />

                  <FormControl
                    control="input"
                    type="text"
                    name="certificateUrl"
                    label="Certificate Url"
                    placeholder="drive.google.com/somecertificate.png/jpg/jpeg"
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

export default memo(Certifications);
