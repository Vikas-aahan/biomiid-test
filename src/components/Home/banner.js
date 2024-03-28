import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import bannerImg from "../../Images/home_picture_biomiid.png";
import Style from "../../Css/home.module.css";
import buttonImg from "../../Images/watch_video_white_1.png";
import en from "../../lang/en";
import rf from "../../lang/rf";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';   
export default function Banner() {
  const [lang, setLang] = React.useState("");
  const [isOpen, setOpen] = useState(false)
     React.useEffect(()=>{
      const lan = localStorage.getItem("language");
      setLang(lan);

     },[])
     
  return (
    <>
    <Grid container className={Style.banner_outer_grid} >
      <Grid lg={6} md={12} xs={12} className={Style.banner_grid_text}>
        <Typography className={Style.banner_heading}>
        {lang === "en"?en.header_title:rf.header_title}
        </Typography>
        <Typography className={Style.banner_text}>
        {lang === "en"?en.header_messages:rf.header_messages}
        </Typography>
        <div className={Style.banner_button_outer}>
        <HashLink
              to="/#contact"
              style={{ textDecoration: "none" }}
            ><Button
            variant="contained"
            size="large"
            className={Style.banner_button_gettouch}
            
          >
           {lang === "en"?en.header_left_button_text:rf.header_left_button_text}
          </Button></HashLink>
          <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='5Br9ozuOBak'
        onClose={() => setOpen(false)}
      />
          {/* <Link to="https://youtu.be/5Br9ozuOBak"> */}
            <Button
            variant="outlined"
            size="large"
            className={Style.banner_button_watch}
            onClick={()=> setOpen(true)}
          >
            <img style={{ width: "12%" }} src={buttonImg} /> &nbsp;&nbsp;
            {lang === "en"?en.header_right_button_text:rf.header_right_button_text}
          </Button>
          {/* </Link> */}
        </div>
      </Grid>
      <Grid lg={6} md={12} xs={12} className={Style.banner_grid_img}>
        {/* <img className={Style.banner_img}   src={bannerImg} /> */}
      </Grid>
    </Grid>
    <div id="our-solution"></div>
    </>
  );
}
