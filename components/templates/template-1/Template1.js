import React from "react";
import styles from "./Template1.module.css";
import { Paper, Box, Avatar, Grid, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import { useSelector } from "react-redux";
import { myPhoto } from "../../../public/me.jpg";
import Image from "next/image";

const localStateSkills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "Rect.js",
  "Redux",
  "Next.js",
  "Python",
  "Nodejs",
  "MongoDb",
  "AWS",
];

const localStateHobbies = ["Travelling", "Dancing", "Reading", "Painting"];
const localStateLanguages = ["English", "Hindi", "Telugu"];

function Template1() {
  const state = useSelector((state) => state);
  const {
    profile,
    aboutme,
    workExperience,
    skills,
    education,
    honorsnawards,
    certifications,
    hobbies,
    languages,
    projects,
    template,
    font,
    colors,
  } = state;

  const {
    firstName,
    lastName,
    photoUrl,
    role,
    address,
    postalcode,
    city,
    country,
    phone,
    email,
    website,
    linkedin,
    github,
    objective,
  } = profile;

  return (
    <Paper elevation={24} className={styles.template}>
      <Box
        sx={{ height: 220, backgroundColor: "#008FD5" }}
        className={styles.intro}
      >
        <Avatar
          src={photoUrl}
          //src = {profile.photoUrl ? profile.photoUrl : "https://www.linkpicture.com/q/generated_photos_5e68893b6d3b380006f22f8b.jpg"}
          alt={profile.firstName ? profile.firstName : "Profile"}
          sx={{ width: 150, height: 150, marginRight: "1.5rem" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              {firstName && lastName
                ? firstName + " " + lastName
                : "OLIVIA WILSON"}
            </Typography>
            <Typography sx={{ color: "#fff", textTransform: "uppercase" }}>
              {role ? role : "Software Engineer"}
            </Typography>
          </div>
          <Typography variant="subtitle2" sx={{ color: "#fff" }}>
            {objective
              ? objective
              : "A Python developer with 5.8 years of experience in Django, Flask for Retail eCommerce, POS and Storage domain."}
          </Typography>
        </Box>
      </Box>

      <Box className={styles.mainBlock}>
        <Box className={styles.leftBlock}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                color: "#008FD5",
                marginBottom: "0.3rem",
              }}
            >
              contact info
            </Typography>
            <Grid
              container
              sx={{
                color: "#555",
                fontSize: "0.9rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <RoomIcon sx={{ color: "#008FD5", marginRight: "0.5rem" }} />
                {city && country
                  ? city + ", " + country + "."
                  : "Brooklyn, NY 11222"}
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <MailIcon sx={{ color: "#008FD5", marginRight: "0.5rem" }} />
                {email ? email : "olivia.wilson@gmail.com"}
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <CallIcon sx={{ color: "#008FD5", marginRight: "0.5rem" }} />
                {phone ? phone : "804-931-9418"}
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <LinkedInIcon
                  sx={{ color: "#008FD5", marginRight: "0.5rem" }}
                />
                {linkedin ? (
                  <Link href={linkedin}>
                    <a target="_blank">Linkedin</a>
                  </Link>
                ) : (
                  "linked.in/olivia"
                )}
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <GitHubIcon sx={{ color: "#008FD5", marginRight: "0.5rem" }} />
                {github ? (
                  <Link href={github}>
                    <a target="_blank">Github</a>
                  </Link>
                ) : (
                  "github.in/olivia"
                )}
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <LanguageIcon
                  sx={{ color: "#008FD5", marginRight: "0.5rem" }}
                />
                {website ? (
                  <Link href={website}>
                    <a target="_blank">Portfolio</a>
                  </Link>
                ) : (
                  "oliviawilson.me"
                )}
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                color: "#008FD5",
                marginBottom: "0.3rem",
              }}
            >
              education
            </Typography>
            {education.items.length > 0 ? (
              <>
                {education.items.map((edu) => {
                  return (
                    <Box sx={{ marginBottom: "1rem" }} key={edu.id}>
                      <Typography>
                        <strong>
                          {edu.institution
                            ? edu.institution
                            : "Vaagdevi Engineering College, Warangal"}
                        </strong>
                      </Typography>
                      <Typography>
                        {edu.major ? edu.major : "Dept of Computer Science"}<br/>
                      </Typography>
                      <Typography variant="body2">
                      <strong>CGPA: {edu.grade ? edu.grade : "7.19"}</strong> {" "}| {" "}
                        {edu.startDate && edu.endDate
                          ? edu.startDate + " - " + edu.endDate
                          : "July 2016 - Sept 2020"}
                      </Typography>
                    </Box>
                  );
                })}
              </>
            ) : (
              <>
                <Typography sx={{ color: "#555", marginBottom: "1rem" }}>
                  2015 - 2019 <br />
                  B.S in Computer Science <br />
                  University of Pittsburgh
                </Typography>
                <Typography sx={{ color: "#555" }}>
                  2019 - 2021 <br />
                  M.S in Computer Science <br />
                  University of Pittsburgh
                </Typography>
              </>
            )}
          </Box>

          <Box sx={{ marginBottom: "1rem", color: "#555" }}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                color: "#008FD5",
                marginBottom: "0.3rem",
              }}
            >
              Skills
            </Typography>
            {skills.items.length > 0 ? (
              <>
                {skills?.items.map((skill, i) => {
                  return (
                    <Typography key={skill.id} sx={{ marginBottom: "0.5rem" }}>
                      {skill.name}
                    </Typography>
                  );
                })}
              </>
            ) : (
              <>
                {localStateSkills.map((skill, i) => {
                  return (
                    <Typography key={i} sx={{ marginBottom: "0.5rem" }}>
                      {skill}
                    </Typography>
                  );
                })}
              </>
            )}
          </Box>
        </Box>
        <Box className={styles.rightBlock}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                color: "#008FD5",
                marginBottom: "0.3rem",
              }}
            >
              work experience
            </Typography>
            {workExperience.items.length > 0 ? (
              <>
                {workExperience.items.map((work) => {
                  return (
                    <Box key={work.id}>
                      <Typography sx={{ color: "#111", fontWeight: "700" }}>
                        <Link href={work.companyUrl} className={styles.link}>
                          <a target="_blank">
                            {work.companyName ? work.companyName : "OzoneAI"}
                          </a>
                        </Link>
                      </Typography>
                      <Box
                        sx={{
                          colo: "#008FD5",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>
                          {work.role
                            ? work.role
                            : "Software Developer Engineer"}
                        </Typography>
                        <Typography sx={{ color: "#008FD5" }}>
                          {work.startDate ? work.startDate : "2008"} -{" "}
                          {work.endDate ? work.endDate : "Present"}
                        </Typography>
                      </Box>
                      <Typography sx={{ color: "#555" }}>
                        {work.description
                          ? work.description
                          : "Work with development engineers to test product features and functions."}
                      </Typography>
                    </Box>
                  );
                })}
              </>
            ) : (
              <>
                {
                  <Box>
                    <Typography sx={{ color: "#111", fontWeight: "700" }}>
                      OzoneAI
                    </Typography>
                    <Box
                      sx={{
                        colo: "#008FD5",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>Software Developer Engineer</Typography>
                      <Typography sx={{ color: "#008FD5" }}>
                        2018 - Present
                      </Typography>
                    </Box>
                    <Typography sx={{ color: "#555" }}>
                      <ul>
                        <li>
                          Work with development engineers to test product
                          features and functions
                        </li>
                        <li>
                          Work with development engineers to validate corrected
                          problem reports
                        </li>
                        <li>
                          Troubleshoot and analyze problem reports to help
                          determine root cause of the reported issue
                        </li>
                      </ul>
                    </Typography>
                  </Box>
                }
              </>
            )}
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                color: "#008FD5",
                marginBottom: "0.3rem",
              }}
            >
              Projects
            </Typography>
            {projects.items.length > 0 ? (
              <>
                {projects.items.map((project) => {
                  return (
                    <Box key={project.id} sx={{ marginBottom: "0.5rem" }}>
                      <Typography
                        sx={{ color: "#111", fontWeight: "700" }}
                        className={styles.link}
                      >
                        <Link href={project.demoUrl}>
                          <a target="_blank">{project.title}</a>
                        </Link>
                      </Typography>
                      <Typography sx={{ color: "#555" }}>
                        {project.description}
                      </Typography>
                    </Box>
                  );
                })}
              </>
            ) : (
              <>
                {
                  <Box>
                    <Typography sx={{ color: "#111", fontWeight: "700" }}>
                      Campus Events
                    </Typography>
                    <Typography sx={{ color: "#555" }}>
                      <ul>
                        <li>
                          Led the data ingestion efforts for our three person
                          team which developed a real time tracker of campus
                          events.
                        </li>
                        <li>
                          Built web scraper in Python that got data from
                          websites of campus groups then built an ETL.
                        </li>
                      </ul>
                    </Typography>
                  </Box>
                }
              </>
            )}
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                color: "#008FD5",
                marginBottom: "0.3rem",
              }}
            >
              Interests
            </Typography>
            <Box sx={{ color: "#555", display: "flex" }}>
              {hobbies.items.length > 0 ? (
                <>
                  {hobbies.items.map((interest, i) => {
                    return (
                      <Typography key={i} sx={{ marginRight: "2rem" }}>
                        {interest.name}
                      </Typography>
                    );
                  })}
                </>
              ) : (
                <>
                  {localStateHobbies.map((interest, i) => {
                    return (
                      <Typography key={i} sx={{ marginRight: "2rem" }}>
                        {interest}
                      </Typography>
                    );
                  })}
                </>
              )}
            </Box>
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                color: "#008FD5",
                marginBottom: "0.3rem",
              }}
            >
              Languages
            </Typography>
            <Box sx={{ color: "#555", display: "flex" }}>
              {languages.items.length > 0 ? (
                <>
                  {languages.items.map((language, i) => {
                    return (
                      <Typography key={i} sx={{ marginRight: "2rem" }}>
                        {language.name}
                      </Typography>
                    );
                  })}
                </>
              ) : (
                <>
                  {localStateLanguages.map((language, i) => {
                    return (
                      <Typography key={i} sx={{ marginRight: "2rem" }}>
                        {language}
                      </Typography>
                    );
                  })}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default Template1;
