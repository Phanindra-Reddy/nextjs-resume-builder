import { Typography } from "@mui/material";
import React, { memo } from "react";
import styles from "../../styles/Home.module.css";
import SaveButton from "../from controls/Button/SaveButton";
import Link from "next/link";
import { useSelector } from "react-redux";

function AboutApp() {
  const state = useSelector((state) => state.profile);
  const { firstName, lastName } = state;
  React.useEffect(() => {
    document.title = `${firstName} ${lastName} Resume`;
  }, [firstName, lastName]);
  return (
    <>
      <div
        className={styles.profileDiv}
        style={{
          border: "1px solid #4A5568",
          padding: "0.5rem",
          borderRadius: "0.5rem",
        }}
      >
        <Typography>
          This is a side project to learn some new stuff about react and nextjs.
          Basically i inspired from{" "}
          <Link href="https://buildresume.learncodeonline.in/">
            <a
              target="_blank"
              style={{ textDecoration: "underline", color: "#670FB5" }}
            >
              Resume Builder by LCO
            </a>
          </Link>{" "}
          and{" "}
          <Link href="https://rxresu.me/">
            <a
              target="_blank"
              style={{ textDecoration: "underline", color: "#670FB5" }}
            >
              Reactive Resume
            </a>
          </Link>
          .
        </Typography>
        <SaveButton title="Download or Print" onClick={() => window.print()} />
      </div>
      <div
        className={styles.profileDiv}
        style={{
          border: "1px solid #4A5568",
          padding: "0.5rem",
          borderRadius: "0.5rem",
        }}
      >
        <Typography>
          Don&apos;t worry about your personal data as it stores in localstorage of  your web browser.
        </Typography>
      </div>
    </>
  );
}

export default memo(AboutApp);
