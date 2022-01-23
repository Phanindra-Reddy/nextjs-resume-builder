import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/MainPage.module.css";
import { Avatar, Typography } from "@mui/material";
import Image from "next/image";

function About() {
  return (
    <div>
      <Head>
        <title>MPR Resume Builder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Avatar
              src="/logo1.png"
              alt="navbar_profile"
              sx={{ width: 50, height: 50 }}
            />
          </Link>
          <Link href="/" passHref>
            <Typography variant="h5" sx={{ marginLeft: "1rem" }}>
              MPR Resume Builder
            </Typography>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/cover-letters">
            <a className={styles.link}>Cover Letters</a>
          </Link>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
          <Link href="https://phanindra-reddy.github.io/react-portfolio/">
            <a target="_blank" className={styles.link}>
              Portfolio
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.main}>
        <div>
          <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
            Single Page
            <br />
            Resume Builder
          </Typography>
          <Link href="/editor">
            <a className={styles.button}>Get started</a>
          </Link>
        </div>
        <div>
          <Image src="/logo5.svg" alt="resume-image" width={300} height={300} />
        </div>
      </div>
      <div className={styles.about}>
        This is a Single Page Resume Builder to built your resume in minutes
        just by enetering your details and selecting a template.
        <br />I used Nextjs, Redux and some other npm packages to build this
        project.
      </div>

      <div className={styles.footer}>
        Copyright &copy; 2022 | Designed and Developed By{" "}
        <a
          href="https://phanindra-reddy.github.io/react-portfolio/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Phanindra Reddy
        </a>
      </div>
    </div>
  );
}

export default About;
