import React, { useState, memo } from "react";
import styles from "../../styles/Home.module.css";
import { Grid, Card, CardMedia } from "@mui/material";
import Image from "next/image";
import {templates} from "../store/TemplateOptions";
import {useDispatch,useSelector} from "react-redux";
import {selectTemplate} from "../../redux/actions/Actions";

function Templates() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.template)
  const {templateId} = state;
  const id = templateId !== "" ? templateId : "resume-001";

  const [resumeId, setResumeId] = useState(id);

  const handleChange = (value) => {
    setResumeId(value);
    dispatch(selectTemplate(value))
  };

  return (
    <div className={styles.profileDiv}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {templates.map((template, i) => {
          return (
            <Grid item xs={6} key={i}>
              <div
                onClick={() => handleChange(template.id)}
                className={
                  resumeId === template.id
                    ? styles.imageActive
                    : styles.imageDiv
                }
              >
                <Image
                  src={template.img}
                  alt={template.name}
                  layout="responsive"
                />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default memo(Templates);
