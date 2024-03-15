import React from "react";
import Style from "../../Css/home.module.css";
import { Card, Grid, Typography } from "@mui/material";
import indiImg from "../../Images/individual_benefits.png";
import rightImg from "../../Images/verify.png";

export default function Individuals() {
  return (
    <div className={Style.solution_outer_div}>
      <Typography className={Style.solution_heading_dif}>
        Individuals
      </Typography>
      <Typography className={Style.individual_heading_dif_head}>
        <img className={Style.Individuals_logo} src={indiImg} />
        Empower Yourself
      </Typography>
      <br />
      <Typography className={Style.individual_textbottom_head}>
        Embark on a journey of empowerment with BIOMIID, where you shape your
        digital identity with confidence and security.
      </Typography><br/>
      <Typography className={Style.individual_textbottom_head_benefit}>
        Benefits
      </Typography>

      <Grid container>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
              Sovereignty
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Unleash the power of a trusted and secure digital identity right
              at your fingertips, accessible on your mobile device anytime,
              anywhere.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
              Swift Verification
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Verify your identity in a matter of seconds, ensuring seamless
              access to a myriad of services and opportunities.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
              Total Control
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px",lineHeight:"24px" }}
            >
              Take charge of your Personal Identity Information (PII) like never
              before. Safeguarded securely on your device, you decide what
              information to share, ensuring utmost privacy and control.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
              Fortified Protection
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px",lineHeight:"24px" }}
            >
              Safeguard your digital realm with a robust digital wallet,
              fortified against identity theft, fraud, and data breaches,
              ensuring your peace of mind in every transaction.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
              Seamless Access
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Enjoy highly secure access to a plethora of services, from
              government and financial to healthcare, with the assurance that
              you share only what's necessary.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
              Effortless Experience
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Say goodbye to friction as you embrace a seamless and frictionless
              user experience, where every interaction unfolds effortlessly.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
