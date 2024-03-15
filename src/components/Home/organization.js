import React from "react";
import Style from "../../Css/home.module.css";
import { Button, Card, Grid, Typography } from "@mui/material";
import indiImg from "../../Images/company.png";
import froudImg from "../../Images/cardProtection.png";
import accountImg from "../../Images/account_protection_ato.png";
import userImg from "../../Images/idv.png";
import starImg from "../../Images/rating.png";
import arrowImg from "../../Images/decrease2.png";
import complImg from "../../Images/compliance.png";
import userplusImg from "../../Images/userPlus.png";
import privacyImg from "../../Images/privay_by_design.png";
import interImg from "../../Images/interoperability.png";

export default function Individuals() {
  return (
    <div className={Style.solution_outer_div}>
      <Typography className={Style.solution_heading_dif}>
        Organizations
      </Typography>
      <Typography className={Style.individual_heading_dif_head}>
        <img className={Style.Individuals_logo} src={indiImg} />
        &nbsp; 
        Empower Your Enterprise:Certainty in Identity, Security, and
        Compliance
      </Typography>
      <br />
      <Typography className={Style.individual_textbottom_head}>
        Unlock the potential of your business or government organization with
        BIOMIID's groundbreaking solutions, designed to provide absolute
        certainty in identity verification while fortifying security and
        compliance.
      </Typography>
      <Typography className={Style.individual_textbottom_head_benefit}>
        Benefits
      </Typography>

      <Grid container>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "50%" }} src={froudImg} />
            <Typography className={Style.Industries_card_head}>
              Fraud Prevention
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Safeguard your transactions with our robust solutions, preventing
              payment fraud and securing card-not-present (CNP) payments by
              verifying the identity of cardholders and validating credit card
              possession.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={accountImg} />
            <Typography className={Style.Industries_card_head}>
              Account Protection
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Defend against online threats such as account takeover with our
              advanced identity verification and biometric authentication tools,
              ensuring secure logins and access.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={userImg} />
            <Typography className={Style.Industries_card_head}>
              Document Verification
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Swiftly verify identity documents from any location, establishing
              a trusted and secure digital identity that replaces cumbersome
              physical documents.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={starImg} />
            <Typography className={Style.Industries_card_head}>
              Enhanced Onboarding
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Streamline the onboarding process for new users, instilling trust
              with seamless identity verification and reducing operational costs
              associated with manual processes.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={arrowImg} />
            <Typography className={Style.Industries_card_head}>
              Regulatory Compliance
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Ensure compliance with stringent KYC and AML regulations
              effortlessly, leveraging our reliable and trusted digital identity
              solution.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={complImg} />
            <Typography className={Style.Industries_card_head}>
              Improved Conversions
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Enhance customer acquisition and conversion rates with a
              streamlined experience, featuring automatic population of customer
              information for unparalleled convenience.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={userplusImg} />
            <Typography className={Style.Industries_card_head}>
              Identity Protection
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Mitigate the risks of identity fraud and theft through biometric
              authentication and accurate instant identity verification,
              ensuring the integrity of every interaction.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={privacyImg} />
            <Typography className={Style.Industries_card_head}>
              Privacy and Security
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Prioritize privacy by design with our solutions, allowing
              individuals to control the sharing of their identity data and
              protecting personal information from fraudulent activity.
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={interImg} />
            <Typography className={Style.Industries_card_head}>
              Global Interoperability
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}
            >
              Embrace interoperability across network participants with
              transparent standards, supporting diverse use cases and ensuring
              seamless integration across platforms
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Typography className={Style.solution_heading_dif_head}>
        Join the Secure Future with BIOMIID
      </Typography><br/>
      <Typography sx={{ textAlign: "start", marginTop: "12px", fontSize: "22px" ,lineHeight:"24px"}}>
        Are you ready to step boldly into the future of security and resilience?
        Join BIOMIID's Digital Identity Network and become an integral part of
        the global fight against cybercrime.<br/><br/>As businesses or government
        organizations, your partnership with us signifies more than just
        protection for your digital assets. It's a commitment to advancing
        global cybersecurity and building a trusted, secure digital world.<br/><br/>By
        registering as relying partners, you not only secure your spot in the
        cyber defense revolution but also contribute to the collective effort to
        safeguard our digital ecosystem. Together, let's forge ahead and pave
        the way for a future where security is paramount and resilience is
        assured.<br/><br/> Become a Partner with BIOMIID today and be at the forefront of shaping a secure and resilient future for all.
      </Typography><br/><br/><br/><br/>
      <Button
            variant="contained"
            size="large"
            className={Style.Organizations_button}
          >
            Become  a  Relying Party Partner Now!
          </Button><br/><br/>
    </div>
  );
}
