import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import Style from "../../Css/home.module.css";
import rightImg from "../../Images/verify.png";

export default function About() {
  return (
    <div className={Style.solution_outer_div}>
      <Typography className={Style.solution_heading_dif}>Abour Us</Typography>
      <br />
      <br />
      <Typography className={Style.solution_heading_dif_head}>
        "Revolutionizing Digital Identity: Easy, Secure Access for All!"
      </Typography>
      <br />
      <Typography sx={{ fontSize: "20px", textAlign: "start" }}>
        We're a passionate group driven by two things: Security and Innovation!
      </Typography>
      <Typography
        sx={{ fontSize: "20px", textAlign: "start", marginTop: "1rem" }}
      >
        We believe that a strong digital identity is the cornerstone of a safe
        and trusted online world.
      </Typography>
      <Typography
        sx={{ fontSize: "20px", textAlign: "start", marginTop: "1rem" }}
      >
        The{" "}
        <span style={{ fontWeight: "600", color: "#000066" }}>problem </span>?
        Existing verification systems are clunky, expensive, and leave everyone
        vulnerable – individuals, businesses, and organizations alike.
        <br />
        That's why we built BIOMID. Here our mission is to create the most
        user-friendly, reliable, and privacy-conscious digital identity
        ecosystem in the world.
      </Typography>
      <br />
      <br />
      <Typography className={Style.solution_heading_dif_head}>
        Here's what makes us different :
      </Typography>
      <br />
      <br />
      <Grid container>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
              Effortless for you
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            >
              We take the complexity out of identity verification.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
              Protection You can trust
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            >
              Our cutting-edge technology safeguards against cyber threats,
              fraud, and data breaches.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
              Empowering Everyone
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            >
              Our solutions are accessible and affordable for individuals,
              businesses, and governments.
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <br/>
    <Typography sx={{ fontSize: "20px", textAlign: "start", marginTop: "3rem" }}>Together, let's build a secure and thriving digital future.</Typography>
    <Typography sx={{ fontSize: "20px", textAlign: "start", marginTop: "0rem" }}>Ready to experience secure and seamless digital identity? Contact us today!</Typography><br/><br/>
    <Typography className={Style.solution_heading_dif_head}>
    Careers  at BIOMIID
      </Typography>
      <Typography sx={{ fontSize: "20px", textAlign: "start", marginTop: "3rem",marginBottom:"5rem" }}>If you share BIOMIID's vision and would like to join our team in the fight against cybercrime in the digital world, please apply and share your contact details. Let us know if you are interested in joining us, and we will contact you as soon as possible!</Typography>
      <Button
            variant="contained"
            size="large"
            className={Style.About_button}
          >
            Get in Touch
          </Button><br/><br/>
    </div>
  );
}
