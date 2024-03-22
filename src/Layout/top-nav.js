import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Style from "../Css/common.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import en from "../lang/en"
import rf from "../lang/rf";

export default function TopNav() {
  const [check,setCheck]=useState("block")
  const [lang, setLang] = useState("");
  console.log("en==>",en);
     useEffect(()=>{
      const lan = localStorage.getItem("language");
      setLang(lan);

     },[])
  return (
    <>
   
    <div style={{display:`${check}`}} >
    <div className={Style.top_nav}>
      <Grid container>
        <Grid lg={11} md={11} xs={11}>
          <div className={Style.top_nav_inner_text_button}>
            <Typography className={Style.text_top_nav}>
            {lang === "en"?en.header_top_message:rf.header_top_message}
            </Typography>
            &nbsp;&nbsp;
            <Button className={Style.text_top_nav_button}>{lang === "en"?en.header_top_button_text:rf.header_top_button_text}</Button>
          </div>
        </Grid>
        <Grid lg={1} md={1} xs={1} className={Style.top_nav_inner_icon}>
          <Link>
          <div >
            <CloseIcon onClick={()=>{
              setCheck("none")
            }} sx={{ backgroundColor: "white", borderRadius: "50%" }} />
          </div>
          </Link>
        </Grid>
      </Grid>
    </div>
    </div>
    </>
  );
}
