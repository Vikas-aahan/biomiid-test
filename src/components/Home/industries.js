import React from "react";
import Style from "../../Css/home.module.css";
import { Button, Card, Grid, Typography } from "@mui/material";
import goveImg from "../../Images/government.png";
import finacImg from "../../Images/financialServices.png";
import healthImg from "../../Images/healthCare.png";
import retailImg from "../../Images/retail_ecom.png";
import travelImg from "../../Images/travel.png";
import sharImg from "../../Images/sharing_economy.png";

export default function Industries() {
  return (
    <div className={Style.solution_outer_div}>
      <Typography className={Style.solution_heading_dif}>Industries</Typography>
      <Typography className={Style.solution_heading_dif_head}>
        Empowering Industries with Trusted Solutions
      </Typography>
      <Typography
        sx={{ textAlign: "start", fontWeight: "600", fontSize: "24px" }}
      >
        Industries We Serve :
      </Typography>

      <Grid container>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={goveImg} />
            <Typography className={Style.Industries_card_head}>
              Government
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "24" }}
            >
              Forge ahead with groundbreaking online services that harness the
              power of secure digital identities, enhancing both security and
              convenience for citizens.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={finacImg} />
            <Typography className={Style.Industries_card_head}>
              Financial Services
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "24" }}
            >
              Revolutionize online banking with trusted and secure identity
              solutions. Say goodbye to manual processes and errors as you boost
              account openings, save time, and cut costs.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={healthImg} />
            <Typography className={Style.Industries_card_head}>
              Health Care
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "24" }}
            >
              Transform patient experiences with innovative online health
              services. From seamless check-ins to safeguarding sensitive data,
              prioritize privacy without compromising efficiency.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={retailImg} />
            <Typography className={Style.Industries_card_head}>
              Retail and e-commerce
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "24" }}
            >
              Drive conversions and reduce cart abandonment rates with
              lightning-fast remote identity verification. Seamlessly onboard
              customers and streamline checkout processes for unparalleled
              convenience.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={travelImg} />
            <Typography className={Style.Industries_card_head}>
              Travel & Transportation
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "24" }}
            >
              Elevate customer experiences with hassle-free online registrations
              and check-ins. Ensure compliance with industry standards while
              verifying identity and travel documents remotely.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={sharImg} />
            <Typography className={Style.Industries_card_head}>
              Sharing Economy
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "24" }}
            >
              ity within your community. Enhance registration experiences for
              users and employees alike, laying the foundation for stronger,
              more connected communities.
            </Typography>
          </Card>
        </Grid>
        
      
       
      </Grid><br/><br/><br/><br/><br/>
      <Button
            variant="contained"
            size="large"
            className={Style.Industries_button}
          >
            Your Industry don't listed? Please  contact Us
          </Button>
    </div>
  );
}
