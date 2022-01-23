import React, { useState, useEffect } from "react";
import styles from "../Dashboard.module.css";
import Drawer from "@mui/material/Drawer";
import Profile from "../../blocks/Profile";
import WorkExperience from "../../blocks/WorkExperience";
import { Scrollbars } from "react-custom-scrollbars";
import Education from "../../blocks/Education";
import HonorsnAwards from "../../blocks/HonorsnAwards";
import Certifications from "../../blocks/Certifications";
import Skills from "../../blocks/Skills";
import Hobbies from "../../blocks/Hobbies";
import Languages from "../../blocks/Languages";
import Projects from "../../blocks/Projects";
import AboutMe from "../../blocks/AboutMe";
import { Box } from "@mui/material";
import Navbar from "../Navbar";
import LeftNavBlocks from "../../store/LeftNavBlocks";

function LeftSideBar() {
  const [currentBlock, setCurrentBlock] = useState("Profile");

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
        anchor="left"
        className={styles.leftSideDrawer}
      >
        <Scrollbars>
          <Navbar
            blockData={LeftNavBlocks}
            block={currentBlock}
            setBlock={(val) => setBlock(val)}
          />

          {currentBlock === "Profile" && <Profile />}
          {currentBlock === "About Me" && <AboutMe />}
          {currentBlock === "Work Experience" && <WorkExperience />}
          {currentBlock === "Education" && <Education />}
          {currentBlock === "Honors & Awards" && <HonorsnAwards />}
          {currentBlock === "Certifications" && <Certifications />}
          {currentBlock === "Skills" && <Skills />}
          {currentBlock === "Hobbies" && <Hobbies />}
          {currentBlock === "Languages" && <Languages />}
          {currentBlock === "Projects" && <Projects />}
        </Scrollbars>
      </Drawer>
    </div>
  );
}

export default LeftSideBar;
