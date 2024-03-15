import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import bannerImg from "../../Images/homePicture.png";
import Style from "../../Css/home.module.css";
import buttonImg from "../../Images/watch_video_white_1.png";
export default function Banner() {
  return (
    <Grid container className={Style.banner_outer_grid}>
      <Grid lg={6} md={12} xs={12} className={Style.banner_grid_text}>
        <Typography className={Style.banner_heading}>
          Revolutionizing Identity for a Trusted & Secure Digital World.
        </Typography>
        <Typography className={Style.banner_text}>
          Welcome to BIOMIID, where we are revolutionizing digital identity
          verification and fraud prevention to ensure identity certainty for
          citizens, users, employees and customers around the world.
        </Typography>
        <div className={Style.banner_button_outer}>
          <Button
            variant="contained"
            size="large"
            className={Style.banner_button_gettouch}
          >
            Get In touch
          </Button>
          <Button
            variant="contained"
            size="large"
            className={Style.banner_button_watch}
          >
            <img style={{ width: "12%" }} src={buttonImg} /> &nbsp;&nbsp;Watch
            the video
          </Button>
        </div>
      </Grid>
      <Grid lg={6} md={12} xs={12} className={Style.banner_grid_img}>
        <img className={Style.banner_img}   src={bannerImg} />
      </Grid>
    </Grid>
  );
}
