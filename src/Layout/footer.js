import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../Images/logo_foot.png";
import Style from "../Css/common.module.css";
import facebooklogo from "../Images/facebook.png"
import linkdinlogo from "../Images/lindin.png"
import { Link } from "react-router-dom";
import en from "../lang/en";
import rf from "../lang/rf";

export default function Footer() {
  const [lang, setLang] = React.useState("");
  
  React.useEffect(()=>{
   const lan = localStorage.getItem("language");
   setLang(lan);

  },[])
  return (
    <div className={Style.footer_outer_div}>
      <Box>
        <Grid container>
          <Grid lg={4} md={4} xs={12} className={Style.logo_grid_footer}>
            <img style={{ width: "70%" }} src={logo} />
          </Grid>
          <Grid lg={4} md={4} xs={12} className={Style.tab_grid_footer}>
            <Link><Typography className={Style.tab_footer}>{lang === "en"?en.section1_title10:rf.section1_title10}</Typography></Link>
            <Link><Typography className={Style.tab_footer}>Business</Typography></Link>
            <Link><Typography className={Style.tab_footer}>{lang === "en"?en.header_menu_individuals:rf.header_menu_individuals}</Typography></Link>
            <Link><Typography className={Style.tab_footer}>{lang === "en"?en.header_menu_about:rf.header_menu_about}</Typography></Link>
           <Link> <Typography className={Style.tab_footer}> {lang === "en"?en.header_menu_contactus:rf.header_menu_contactus}</Typography></Link>
          </Grid>
          <Grid lg={4} md={4} xs={12} className={Style.icon_grid_footer}>
            <img style={{width:"10%"}} src={facebooklogo}/>&nbsp;&nbsp;&nbsp;&nbsp;
            <img style={{width:"10%"}} src={linkdinlogo}/>
          </Grid>
        </Grid>
        <Grid container className={Style.lower_grid_footer}>
          <Grid lg={3}>
            <Typography sx={{ color: "white" }}>
            {lang === "en"?en.footer_all_rights:rf.footer_all_rights}
             
            </Typography>
          </Grid>
          <Grid lg={4}>
            <Typography sx={{ color: "white" }}>
            {lang === "en"?en.footer_terms:rf.footer_terms}
             
            </Typography>
            <Typography sx={{ color: "white" }}>
            {lang === "en"?en.footer_privacy:rf.footer_privacy}
             
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
