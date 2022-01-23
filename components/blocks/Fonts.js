import React, { useState, useEffect, memo } from "react";
import styles from "../../styles/Home.module.css";
import { Typography, Divider, Box } from "@mui/material";
import fontOptions from "../store/FontOptions";
import { infoNotification, info } from "../../notifications/notifications";
import { useDispatch } from "react-redux";
import { selectFont } from "../../redux/actions/Actions";

function Fonts() {
  const dispatch = useDispatch();
  const [font, setFont] = useState("Montserrat");


  const handleClick = (value) => {
    navigator.clipboard.writeText(value);
    info(`${value} font has been copied to the clipboard.`, infoNotification);
    dispatch(selectFont(value));
    setFont(value);
  };

  return (
    <div className={styles.profileDiv}>
      <Typography className={styles.para}>Font Options</Typography>
      <Box className={styles.fontsDiv}>
        {fontOptions.map((fontOption) => (
          <div
            key={fontOption}
            tabIndex="0"
            role="button"
            className={styles.fonts}
            onClick={() => handleClick(fontOption)}
            style={{ border: font === fontOption ? "1px solid black" : "none" }}
          >
            {fontOption}
          </div>
        ))}
      </Box>

      <Divider sx={{ margin: "20px 0px" }} />
      <Typography className={styles.para}>Font Family</Typography>
      <input
        type="text"
        placeholder="Montserrat"
        className={styles.input}
        value={font}
        onChange={(e) => setFont(e.target.value)}
      />

      <Typography variant="p">
        Changing font will not reflect in resume template in this version.
        This section of application is rolled out in next version.
        <br />
        <span style={{ color: "red", marginTop: "2rem" }}>
          Sorry for the inconvience😊😊
        </span>
      </Typography>
    </div>
  );
}

export default memo(Fonts);
