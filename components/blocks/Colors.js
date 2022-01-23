import React, { useState, useEffect, memo } from "react";
import styles from "../../styles/Home.module.css";
import { Divider, Typography, Box } from "@mui/material";
import ColorOptions from "../store/ColorOptions";
import { infoNotification, info } from "../../notifications/notifications";
import { useDispatch } from "react-redux";
import { selectColors } from "../../redux/actions/Actions";
import SaveButton from "../from controls/Button/SaveButton";

function Colors() {
  const dispatch = useDispatch();

  const [primaryColor, setPrimaryColor] = useState("#212121");
  const [secondaryColor, setSecondaryColor] = useState("#212121");

  const handleClick = (value) => {
    navigator.clipboard.writeText(value);
    info(`${value} has been copied to the clipboard.`, infoNotification);
    setSecondaryColor(value);
    //dispatch(selectColors(primaryColor, secondaryColor))
    console.log(primaryColor, secondaryColor);
  };
  return (
    <div className={styles.profileDiv}>
      <Typography className={styles.para}>Color Options</Typography>
      <Box className={styles.colorsDiv}>
        {ColorOptions.map((color) => (
          <div
            key={color}
            tabIndex="0"
            role="button"
            className={styles.circle}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(color)}
          />
        ))}
      </Box>

      <Divider sx={{ margin: "20px 0px" }} />

      <Typography className={styles.para}>Primary Color</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginBottom: "1rem",
        }}
      >
        <div
          tabIndex="0"
          role="button"
          className={styles.primaryCircle}
          style={{ backgroundColor: `${primaryColor}` }}
        />
        <input
          type="text"
          placeholder="#263238"
          className={styles.input}
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
      </Box>

      <Typography className={styles.para}>Secondary Color</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <button
          tabIndex="0"
          type="button"
          className={styles.primaryCircle}
          style={{ backgroundColor: `${secondaryColor}` }}
        />
        <input
          type="text"
          placeholder="#8BC34A"
          className={styles.input}
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
        />
      </Box>
      <SaveButton
        title="Save Colors"
        onClick={() => dispatch(selectColors(primaryColor, secondaryColor))}
      />

      <Typography variant="p">
        Changing colors will not reflect in resume template in this version. This section of application is rolled out in next version.<br/>
        <span style={{color:"red", marginTop:"2rem"}}>Sorry for the inconvience😊😊</span>
      </Typography>
    </div>
  );
}

export default memo(Colors);
