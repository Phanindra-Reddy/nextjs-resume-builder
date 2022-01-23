import { useState, useRef } from "react";
import styles from "./Dashboard.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const data = [
  "Profile",
  "About Me",
  "Work Experience",
  "Education",
  "Honors & Awards",
  "Certifications",
  "Skills",
  "Hobbies",
  "Languages",
  "Projects",
];

function Navbar(props) {
  const {blockData, block, setBlock} = props
  
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className={styles.App}>
      {scrollX !== 0 && (
        <ArrowBackIosIcon onClick={() => slide(-50)} className={styles.btn} />
      )}
      <ul ref={scrl} onScroll={scrollCheck} className={styles.ul}>
        {blockData.map((d, i) => (
          <Tag data={d} key={i} block={block} setBlock={setBlock}/>
        ))}
      </ul>
      {!scrolEnd && (
          <ArrowForwardIosIcon onClick={() => slide(+50)} className={styles.btn} />
      )}
    </div>
  );
}

const Tag = (props) => {
    const {data, block, setBlock} = props
  return <li className={ block===data ? styles.active : styles.li } onClick={()=>setBlock(data)}>{data}</li>;
};


export default Navbar;
