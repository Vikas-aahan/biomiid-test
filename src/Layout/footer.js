import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../Images/logo_foot.png";
import Style from "../Css/common.module.css";
import facebooklogo from "../Images/facebook.png";
import linkdinlogo from "../Images/lindin.png";
import { Link } from "react-router-dom";
import en from "../lang/en";
import rf from "../lang/rf";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const [lang, setLang] = React.useState("");

  React.useEffect(() => {
    const lan = localStorage.getItem("language");
    setLang(lan);
  }, []);
  return (
    <div className={Style.footer_outer_div}>
      <Box>
        <Grid container>
          <Grid lg={4} md={4} xs={12} className={Style.logo_grid_footer}>
            <img style={{ width: "70%" }} src={logo} />
          </Grid>
          <Grid lg={3} md={4} xs={12} className={Style.tab_grid_footer}>
            <Typography className={Style.tab_footer1}>
              {lang === "en" ? en.section1_title10 : rf.section1_title10}
            </Typography>
            <HashLink
              to="/#eId-verification"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography className={Style.tab_footer}>
              {lang === "en" ? en.section2_title : rf.section2_title}
              </Typography>
            </HashLink>

            <HashLink
              to="/#identity-verification"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography className={Style.tab_footer}>
              {lang === "en" ? en.section4_title : rf.section4_title}
              </Typography>
            </HashLink>
            <HashLink
              to="/#biometric-authentication"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <Typography className={Style.tab_footer}>
              {lang === "en" ? en.section3_title : rf.section3_title}
              </Typography>
            </HashLink>
            <HashLink
              to="/#digital-identity-network"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <Typography className={Style.tab_footer}>
              {lang === "en" ? en.section5_title : rf.section5_title}
              </Typography>
            </HashLink>
          </Grid>
          <Grid lg={3} md={4} xs={12} className={Style.tab_grid_footer}>
            <HashLink
              to="/#industries"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <Typography className={Style.tab_footer1}>
                {lang === "en" ? en.section6_title : rf.section6_title}{" "}
              </Typography>
            </HashLink>
            <HashLink
              to="/#organization"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Typography className={Style.tab_footer1}>
                {lang === "en" ? en.section8_title : rf.section8_title}
              </Typography>
            </HashLink>
            <HashLink
              to="/#individuals"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography className={Style.tab_footer1}>
                {lang === "en"
                  ? en.header_menu_individuals
                  : rf.header_menu_individuals}
              </Typography>
            </HashLink>
            <HashLink
              to="/#about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Typography className={Style.tab_footer1}>
                {lang === "en" ? en.header_menu_about : rf.header_menu_about}
              </Typography>
            </HashLink>
            <HashLink
              to="/#contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <Typography className={Style.tab_footer1}>
                {" "}
                {lang === "en"
                  ? en.header_menu_contactus
                  : rf.header_menu_contactus}
              </Typography>
            </HashLink>
          </Grid>
          <Grid lg={2} md={4} xs={12} className={Style.icon_grid_footer}>
            <Link to="https://www.facebook.com/profile.php?id=61557465283165"><img style={{ width: "18%" }} src={facebooklogo} /></Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="https://www.linkedin.com/posts/biomiid_welcome-to-biomiid-where-we-are-revolutionizing-activity-7178454405963276289-N8bh"><img style={{ width: "18%" }} src={linkdinlogo} /></Link>
          </Grid>
        </Grid>
        <Grid container className={Style.lower_grid_footer}>
          <Grid lg={6} sx={{textAlign:"start"}}>
            <Typography sx={{ color: "white" }}>
              {lang === "en" ? en.footer_all_rights : rf.footer_all_rights}
            </Typography>
          </Grid>
          <Grid lg={6} sx={{ display: "flex",justifyContent:"flex-end"}}>
            <Link to="/term-of-service">
              <Typography sx={{ color: "white" }}>
                {lang === "en" ? en.footer_terms : rf.footer_terms}
              </Typography>
            </Link>
            &nbsp;
            <Typography sx={{ color: "white" }}>|</Typography>&nbsp;
            <Link to="/privacy-policy">
              <Typography sx={{ color: "white" }}>
                {lang === "en" ? en.footer_privacy : rf.footer_privacy}
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
