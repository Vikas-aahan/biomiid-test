import React from "react";
import Style from "../../Css/home.module.css";
import { Button, Grid, Typography } from "@mui/material";
import idImg from "../../Images/illustration2.jpg";
import bioImg from "../../Images/illustration1.jpg";
import didnImg from "../../Images/illustration3.jpg";
import IdenImg from "../../Images/Identity_proofing.png";
import idLogo from "../../Images/eid.png";
import bioLogo from "../../Images/biometric_auth.png";
import IdenLogo from "../../Images/idv.png";
import didnLogo from "../../Images/digital_id.png";

export default function OurSolution() {
  return (
    <div className={Style.solution_outer_div}>
      <Typography className={Style.solution_heading}>
        Ensuring Certainty in Digital Identity
      </Typography>
      <Typography className={Style.solution_paragrph}>
        In the current digital era, verifying identities with confidence is
        paramount. BIOMIID's suite of digital identity and fraud prevention
        solutions leverages proprietary technologies to establish trust and
        security with unmatched simplicity, accuracy, and speed. From eID
        verification to facial biometric authentication, we offer future-proof
        solutions tailored to meet the KYC and IAM needs of diverse industries.
      </Typography>
      <Typography className={Style.solution_heading_dif}>
        Our Solutions
      </Typography>
      <Typography className={Style.solution_heading_dif_head}>
        Our Innovative Solutions: Empowering Trust & Security
      </Typography>
      <Typography className={Style.solution_paragrph}>
        we're committed to crafting solutions that redefine the digital
        landscape, ensuring seamless experiences while safeguarding identities
        with unparalleled security.
      </Typography>
      {/* <----------------------  Image/Text-Section -----------------> */}
      <Grid container>
        <Grid lg={12} md={12} xs={12}>
          <Typography className={Style.solution_heading_dif}>
            eID Verification
          </Typography>
        </Grid>
        <Grid lg={7} md={12} xs={12} className={Style.solution_grid_text_outer}>
          <img style={{ width: "18%" }} src={idLogo} />
          <Typography className={Style.solution_grid_head}>
            NFC-Based eID Document Authentication
          </Typography>
          <Typography className={Style.solution_grid_text}>
            Seamlessly authenticate your identity with our cutting-edge eID
            verification solutions. Utilizing NFC technology, we swiftly
            validate government-issued electronic identity documents,
            guaranteeing 100% accuracy in seconds.
          </Typography>
          <br />
          <Button
            variant="contained"
            size="large"
            className={Style.banner_button_gettouch}
          >
            Get In touch
          </Button>
        </Grid>
        <Grid lg={5} md={12} xs={12}>
          <img style={{ width: "100%" }} src={idImg} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid lg={12} md={12} xs={12}>
          <Typography className={Style.solution_heading_dif}>
            Biometric Authentication
          </Typography>
        </Grid>
        <Grid lg={6} md={12} xs={12}>
          <img style={{ width: "85%" }} src={bioImg} />
        </Grid>
        <Grid lg={6} md={12} xs={12} className={Style.solution_grid_text_outer}>
          <img style={{ width: "24%" }} src={bioLogo} />
          <Typography className={Style.solution_grid_head}>
            Advanced Biometric Authentication Solution
          </Typography>
          <Typography className={Style.solution_grid_text}>
            Experience security like never before with our biometric
            authentication solutions. Our advanced technology combines face
            matching and passive liveness verification, thwarting any attempts
            at identity fraud with precision. From 2D/3D face masks to deepfake
            videos, we've got you covered.
          </Typography>
          <br />
          <Button
            variant="contained"
            size="large"
            className={Style.banner_button_gettouch}
          >
            Contact Sales
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid lg={12} md={12} xs={12}>
          <Typography className={Style.solution_heading_dif}>
            Identity Verification
          </Typography>
        </Grid>

        <Grid lg={6} md={12} xs={12} className={Style.solution_grid_text_outer}>
          <img style={{ width: "24%" }} src={IdenLogo} />
          <Typography className={Style.solution_grid_head}>
            Instant Identity Verification Solution
          </Typography>
          <Typography className={Style.solution_grid_text}>
            Say goodbye to uncertainties with our instant identity verification
            solution. Simply match a selfie with a genuine government-issued ID,
            and rest assured of 100% accuracy. With unrivaled liveness detection
            and face matching, we ensure the authenticity of every interaction,
            shielding you from deep fakes and spoofing.
          </Typography>
          <br />
          <Button
            variant="contained"
            size="large"
            className={Style.banner_button_gettouch}
          >
            Contact Sales
          </Button>
        </Grid>
        <Grid lg={6} md={12} xs={12}>
          <img style={{ width: "85%" }} src={IdenImg} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid lg={12} md={12} xs={12}>
          <Typography className={Style.solution_heading_dif}>
            Digital identity Network
          </Typography>
        </Grid>

        <Grid lg={6} md={12} xs={12}>
          <img style={{ width: "85%" }} src={didnImg} />
        </Grid>
        <Grid lg={6} md={12} xs={12} className={Style.solution_grid_text_outer}>
          <img style={{ width: "24%" }} src={didnLogo} />
          <Typography className={Style.solution_grid_head}>
            Strengthen Connections: Elevating Trust and Security Across Digital
            and Physical Domains
          </Typography>
          <Typography className={Style.solution_grid_text}>
            Step into a world of enhanced trust and security with our Digital
            Identity Network. Seamlessly bridging the digital and physical
            realms, our network protects users, employees, and customers from
            data breaches, identity theft, fraud, and synthetic identity
            threats. With unmatched convenience, accuracy, and adaptability,
            trust BIOMIID to safeguard your digital journey.
          </Typography>
          <Typography className={Style.solution_grid_text}>
            Join us in shaping a secure future where digital interactions are
            not only effortless but also fortified with unparalleled trust and
            security. At BIOMIID, we're not just innovators.
          </Typography>
          <br />
          <Button
            variant="contained"
            size="large"
            className={Style.banner_button_gettouch}
          >
            Contact Sales
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
