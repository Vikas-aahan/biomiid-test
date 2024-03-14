import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import bannerImg from "../../Images/homePicture.png";
import Style from "../../Css/home.module.css";
import buttonImg from "../../Images/watch_video_white_1.png"
export default function Banner() {
  return (
    <Grid container className={Style.banner_outer_grid}>
      <Grid lg={6} md={12} xs={12} className={Style.banner_grid_text}>
        <Typography className={Style.banner_heading}>
          Building convenient, Trusted & Secure Digital Identity Worldwide.
        </Typography>
        <Typography className={Style.banner_text}>
          Welcome to BIOMIID, where we revolutionize digital identity
          verification and fraud prevention to ensure certainty in user,
          employee, and customer identities across the globe. Our mission is to
          empower businesses and government organizations with cutting-edge
          solutions that mitigate risks of data breaches, regulatory
          non-compliance, and identity-related fraud, all while prioritizing
          user experience and convenience.
        </Typography>
        <div className={Style.banner_button_outer}>
            <Button variant="contained" size="large" className={Style.banner_button_gettouch}>Get In touch</Button>
            <Button variant="contained" size="large" className={Style.banner_button_watch}><img style={{width:"12%"}} src={buttonImg}/> &nbsp;&nbsp;Watch the video</Button>
        </div>
      </Grid>
      <Grid lg={6} md={12} xs={12} className={Style.banner_grid_text}>
        <img style={{ width: "95%" }} src={bannerImg} />
      </Grid>
    </Grid>
  );
}
