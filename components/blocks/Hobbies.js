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
import { addHobbie, deleteHobby } from "../../redux/actions/Actions";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DRAG_DROP } from "../../redux/actions/ActionTypes";

function Hobbies() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.hobbies);
  const { items } = state;
  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
  });

  const onSubmit = (values, { resetForm }) => {
    const { enable, name } = values;
    dispatch(addHobbie(enable, name));
    resetForm();
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    dispatch({
      type: DRAG_DROP.DRAG_DROP_HOBBIES,
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
        initialValues={{ enable: false, name: "" }}
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
                name="hobbies"
                label=""
                placeholder="Hobbies/Interests"
              />
            </Box>

            <Divider sx={{ margin: "20px 0px" }} />

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {items.map((hobby, index) => (
                      <Draggable
                        key={hobby.id}
                        draggableId={hobby.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Box sx={{ display: "flex", alignItems: "center", marginBottom:"1rem" }}>
                              <Typography className={styles.box}>
                                {hobby.name}
                              </Typography>
                              <IconButton
                                aria-label="delete"
                                sx={{ color: "#E9493C" }}
                              >
                                <DeleteIcon
                                  onClick={() =>
                                    dispatch(deleteHobby(hobby.id))
                                  }
                                />
                              </IconButton>
                            </Box>
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
                <Typography>Add Hobbies</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl
                  control="input"
                  type="text"
                  name="name"
                  label="Hobby Name"
                  placeholder="Beatboxing"
                />
                <SaveButton title="+ Add" />
              </AccordionDetails>
            </Accordion>
          </Form>
        )}
      </Formik>
      <Typography variant="caption">
        Dran n Drop Hobbies to change the format.
      </Typography>
    </div>
  );
}

export default memo(Hobbies);
