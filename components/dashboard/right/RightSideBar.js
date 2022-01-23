import React, { useState, useEffect } from "react";
import styles from "../Dashboard.module.css";
import Drawer from "@mui/material/Drawer";
import { Scrollbars } from "react-custom-scrollbars";
import Templates from "../../blocks/Templates";
import AboutApp from "../../blocks/AboutApp";
import Colors from "../../blocks/Colors";
import Fonts from "../../blocks/Fonts";
import Navbar from "../Navbar";
import RightBlockData from "../../store/RightNavBlocks";

function RightSideBar() {
  const [currentBlock, setCurrentBlock] = useState("Templates");

  const setBlock = (val) => {
    setCurrentBlock(val);
  };

  return (
    <div>
      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
        className={styles.rightSideDrawer}
      >
        <Scrollbars>
          <Navbar
            blockData={RightBlockData}
            block={currentBlock}
            setBlock={(val) => setBlock(val)}
          />

          {currentBlock === "Templates" && <Templates />}
          {currentBlock === "Colours" && <Colors />}
          {currentBlock === "Fonts" && <Fonts />}
          {currentBlock === "About" && <AboutApp />}
        </Scrollbars>
      </Drawer>
    </div>
  );
}

export default RightSideBar;
