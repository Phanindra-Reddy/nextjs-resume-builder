import React from "react";
import styles from "./Template2.module.css";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import { Avatar, Paper, Typography, Box, Grid } from "@mui/material";
import Link from "next/link";
import Markdown from "../../Markdown";
import { useSelector } from "react-redux";

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

function Template2() {
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
    <Paper elevation={12} className={styles.template}>
      <Box
        sx={{ height: 200, backgroundColor: "#0E2433" }}
        className={styles.intro}
      >
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
            <Typography sx={{ color: "#04C2C9", textTransform: "uppercase" }}>
              {role ? role : "Software Engineer"}
            </Typography>
          </div>
          <Typography variant="subtitle2" sx={{ color: "#fff" }}>
            {objective
              ? objective
              : "A Python developer with 5.8 years of experience in Django, Flask for Retail eCommerce, POS and Storage domain."}
          </Typography>
        </Box>
        <Avatar
          src={photoUrl}
          //src="https://www.linkpicture.com/q/generated_photos_5e68893b6d3b380006f22f8b.jpg"
          alt="Profile"
          sx={{
            width: 150,
            height: 150,
            marginRight: "1.5rem",
            border: "5px solid #04C2C9",
          }}
        />
      </Box>

      <Box
        sx={{
          color: "#FFF",
          backgroundColor: "#111",
          height: 120,
          padding: "1rem 2rem",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <RoomIcon sx={{ marginRight: "1rem" }} />
            {city && country
              ? city + ", " + country + "."
              : "Brooklyn, NY 11222"}
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <LinkedInIcon sx={{ marginRight: "1rem" }} />
            {linkedin ? (
              <Link href={linkedin}>
                <a target="_blank">Linkedin</a>
              </Link>
            ) : (
              "linkedin.com/olivia"
            )}
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <CallIcon sx={{ marginRight: "1rem" }} />
            {phone ? phone : "804-931-9418"}
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <GitHubIcon sx={{ marginRight: "1rem" }} />
            {github ? (
              <Link href={github}>
                <a target="_blank">Github</a>
              </Link>
            ) : (
              "github.com/olivia"
            )}
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ marginRight: "1rem" }} />
            {email ? email : "olivia.wilson@email.net"}
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <LanguageIcon sx={{ marginRight: "1rem" }} />
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
                textDecoration: "underline",
              }}
            >
              education
            </Typography>
            <Box>
              {education.items.length > 0 ? (
                <>
                  {education.items.map((edu) => {
                    return (
                      <>
                        <Box sx={{ marginBottom: "1rem" }} key={edu.id}>
                          <Typography>
                            <strong>
                              {edu.institution && edu.city
                                ? edu.institution + ", " + edu.city
                                : "Vaagdevi Engineering College, Warangal"}
                            </strong>
                          </Typography>
                          <Typography>
                            {edu.major ? edu.major : "Dept of Computer Science"}{" "}
                            |{" "}
                            <strong>
                              CGPA: {edu.grade ? edu.grade : "7.19"}
                            </strong>
                          </Typography>
                          <Typography variant="body2">
                            {edu.startDate && edu.endDate
                              ? edu.startDate + " - " + edu.endDate
                              : "July 2016 - Sept 2020"}
                          </Typography>
                        </Box>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography>
                      <strong>Vaagdevi Engineering College, Warangal</strong>
                    </Typography>
                    <Typography>
                      Dept of Computer Science | <strong>CGPA: 7.19</strong>
                    </Typography>
                    <Typography variant="body2">
                      July 2016 - Sept 2020
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      <strong>Narayana Junior College, Hyderabad</strong>
                    </Typography>
                    <Typography>
                      Higher Secondary Education | <strong>CGPA: 9.3</strong>
                    </Typography>
                    <Typography variant="body2">
                      June 2014 - April 2016
                    </Typography>
                  </Box>
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
                textDecoration: "underline",
              }}
            >
              Experience
            </Typography>
            {workExperience.items.length > 0 ? (
              <>
                {workExperience.items.map((work) => {
                  return (
                    <Box key={work.id} sx={{ marginBottom: "1rem" }}>
                      <Typography>
                        <strong>
                          {work.companyName ? work.companyName : "OzoneAI"}
                        </strong>
                      </Typography>
                      <Typography>
                        {work.role ? work.role : "Software Developer Intern"} |{" "}
                        <strong>2018 - 2019</strong>
                      </Typography>
                      <Typography variant="subtitle2">
                        {work.description
                          ? work.description
                          : "Work with development engineers to test product features and functions"}
                      </Typography>
                    </Box>
                  );
                })}
              </>
            ) : (
              <>
                <Box sx={{ marginBottom: "1rem" }}>
                  <Typography>
                    <strong>OzoneAI</strong>
                  </Typography>
                  <Typography>
                    Software Developer Intern | <strong>2018 - 2019</strong>
                  </Typography>
                  <Typography>
                    <ul>
                      <li>
                        Work with development engineers to test product features
                        and functions
                      </li>
                      <li>
                        Work with development engineers to validate corrected
                        problem reports
                      </li>
                    </ul>
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "1rem" }}>
                  <Typography>
                    <strong>OzoneAI</strong>
                  </Typography>
                  <Typography>
                    ML Engineer | <strong>2019 - Present</strong>
                  </Typography>
                  <Typography>
                    <ul>
                      <li>
                        Utilized PySpark to distribute data processing on large
                        streaming datasets to improve ingestion and processing
                        speed
                      </li>
                    </ul>
                  </Typography>
                </Box>
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
                textDecoration: "underline",
              }}
            >
              Interests
            </Typography>
            <Box sx={{ color: "#555", display: "flex" }}>
              {hobbies.items.length > 0 ? (
                <>
                  {hobbies.items.map((hobby, i) => {
                    return (
                      <Typography
                        key={hobby.id}
                        sx={{ marginRight: "2rem" }}
                      >
                        {hobby.name}
                      </Typography>
                    );
                  })}
                </>
              ) : (
                <>
                  {localStateHobbies.map((hobby, i) => {
                    return (
                      <Typography key={i} sx={{ marginRight: "2rem" }}>
                        {hobby}
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
                textDecoration: "underline",
              }}
            >
              Languages
            </Typography>
            <Box sx={{ color: "#555", display: "flex" }}>
              {languages.items.length > 0 ? (
                <>
                  {languages.items.map((language, i) => {
                    return (
                      <Typography
                        key={language.id}
                        sx={{ marginRight: "2rem" }}
                      >
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
        <Box className={styles.rightBlock}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                color: "#008FD5",
                marginBottom: "0.3rem",
                textDecoration: "underline",
              }}
            >
              Skills
            </Typography>
            <Box
              // sx={{
              //   display: "grid",
              //   gridTemplateColumns: "repeat(3, 1fr)",
              //   gridGap: "0.7rem",
              // }}
              className={styles.skillBox}
            >
              {skills.items.length > 0 ? (
                <>
                  {skills.items.map((skill, i) => {
                    return (
                      <Typography
                        sx={{
                          width: 100,
                          color: "#fff",
                          backgroundColor: "#0E2433",
                          textAlign: "center",
                          borderRadius: "0.5rem",
                          padding: "0.4rem 0rem",
                        }}
                        key={skill.id}
                      >
                        {skill.name}
                      </Typography>
                    );
                  })}
                </>
              ) : (
                <>
                  {localStateSkills.map((skill, i) => {
                    return (
                      <Typography
                        sx={{
                          width: 100,
                          color: "#fff",
                          backgroundColor: "#0E2433",
                          textAlign: "center",
                          borderRadius: "0.5rem",
                          padding: "0.4rem 0rem",
                        }}
                        key={i}
                      >
                        {skill}
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
                textDecoration: "underline",
              }}
            >
              Projects
            </Typography>
            {projects.items.length > 0 ? (
              <>
                {projects.items.map((project) => {
                  return (
                    <Box key={project.id} sx={{ marginBottom: "0.5rem" }}>
                      <Typography>
                        <strong>
                          <Link href={project.demoUrl ? project.demoUrl : "#"}>
                            <a target="_blank">
                              {project.title
                                ? project.title
                                : "An API-connected website"}
                            </a>
                          </Link>
                        </strong>
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {project.description
                          ? project.description
                          : "Developed COVID Tracker and Weather App and Recipe App using API s like API setu, edamam api, openweather api."}
                      </Typography>
                    </Box>
                  );
                })}
              </>
            ) : (
              <>
                <Box sx={{ marginBottom: "0.5rem" }}>
                  <Typography>
                    <strong>
                      <Link href="#">
                        <a target="_blank">An API-connected website</a>
                      </Link>
                    </strong>
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Developed COVID Tracker and Weather App and Recipe App using
                    API s like API setu, edamam api, openweather api.
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "0.5rem" }}>
                  <Typography>
                    <strong>
                      <Link href="#">
                        <a target="_blank">CRUD Applications</a>
                      </Link>
                    </strong>
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    CRUD Apps like Contact Book and React TODO App where we can
                    peform crud operation in a database. I used fiebase for
                    Contact book and localstorage for TODO app.
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "0.5rem" }}>
                  <Typography>
                    <strong>
                      <Link href="#">
                        <a target="_blank">Resume Builder</a>
                      </Link>
                    </strong>
                  </Typography>

                  <Typography variant="caption">
                    With the powerful editor and wide range of professinal/job
                    ready templates, you can build your resume within a matter
                    few clicks &amp; key strokes.
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "0.5rem" }}>
                  <Typography>
                    <strong>
                      <Link href="#">
                        <a target="_blank">Clones using React</a>
                      </Link>
                    </strong>
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Developed Amazon clone using reactjs, firebase(for
                    authentication) and stripe for payments and Google Drive
                    clone using reactjs, bootstrap and firebase. I used firebase
                    for authentication and as database to store files, folders
                    of a user
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default Template2;
