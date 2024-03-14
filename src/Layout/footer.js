import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../Images/logo_foot.png";
import Style from "../Css/common.module.css";
import facebooklogo from "../Images/facebook.png"
import linkdinlogo from "../Images/lindin.png"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={Style.footer_outer_div}>
      <Box>
        <Grid container>
          <Grid lg={4} md={4} xs={12} className={Style.logo_grid_footer}>
            <img style={{ width: "70%" }} src={logo} />
          </Grid>
          <Grid lg={4} md={4} xs={12} className={Style.tab_grid_footer}>
            <Link><Typography className={Style.tab_footer}>Solutions</Typography></Link>
            <Link><Typography className={Style.tab_footer}>Business</Typography></Link>
            <Link><Typography className={Style.tab_footer}>Individual</Typography></Link>
            <Link><Typography className={Style.tab_footer}>About</Typography></Link>
           <Link> <Typography className={Style.tab_footer}>Contact</Typography></Link>
          </Grid>
          <Grid lg={4} md={4} xs={12} className={Style.icon_grid_footer}>
            <img style={{width:"10%"}} src={facebooklogo}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <img style={{width:"10%"}} src={linkdinlogo}/>
          </Grid>
        </Grid>
        <Grid container className={Style.lower_grid_footer}>
          <Grid lg={3}>
            <Typography sx={{ color: "white" }}>
              2023 BIOMIID. All rights reserved.
            </Typography>
          </Grid>
          <Grid lg={4}>
            <Typography sx={{ color: "white" }}>
              Wesite Terms of Service | Privacy Policy
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
