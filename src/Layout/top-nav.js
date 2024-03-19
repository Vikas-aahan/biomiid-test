import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Style from "../Css/common.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function TopNav() {
  const [check,setCheck]=useState("block")
  return (
    <div style={{display:`${check}`}}>
    <div className={Style.top_nav}>
      <Grid container>
        <Grid lg={11} md={11} xs={11}>
          <div className={Style.top_nav_inner_text_button}>
            <Typography className={Style.text_top_nav}>
              Join BIOMIID's Digital Identity Network and become an integral
              part of the global fight against cybercrime.
            </Typography>
            &nbsp;&nbsp;
            <Button className={Style.text_top_nav_button}>Learn more</Button>
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
  );
}
