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
import en from "../../lang/en";
import rf from "../../lang/rf";

export default function Organization() {
  const [lang, setLang] = React.useState("");
  
  React.useEffect(()=>{
   const lan = localStorage.getItem("language");
   setLang(lan);

  },[])
  return (
    <div className={Style.solution_outer_div} >
      <Typography className={Style.solution_heading_dif}>
      {lang === "en"?en.section8_title:rf.section8_title}
       
      </Typography>
      <Typography className={Style.individual_heading_dif_head}>
        <img className={Style.Individuals_logo} src={indiImg} />
       
        {lang === "en"?en.section8_subtitle1:rf.section8_subtitle1}
       
      </Typography>
      <br />
      <Typography className={Style.individual_textbottom_head}>
      {lang === "en"?en.section8_content1:rf.section8_content1}
       
      </Typography>
      <Typography className={Style.individual_textbottom_head_benefit}>
      {lang === "en"?en.section8_subtitle2:rf.section8_subtitle2}
        
      </Typography>

      <Grid container>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "50%" }} src={froudImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section8_fraud_label:rf.section8_fraud_label}
        
            
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "18px" ,lineHeight:"24px"}}
            >
               {lang === "en"?en.section8_fraud_content:rf.section8_fraud_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={accountImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section8_account_label:rf.section8_account_label}
             
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "18px" ,lineHeight:"24px"}}
            >
               {lang === "en"?en.section8_account_content:rf.section8_account_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={userImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section8_document_label:rf.section8_document_label}
             
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "18px" ,lineHeight:"24px"}}
            >
                 {lang === "en"?en.section8_document_content:rf.section8_document_content}
              
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={starImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section8_onboarding_label:rf.section8_onboarding_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "18px" ,lineHeight:"24px"}}
            >
                {lang === "en"?en.section8_onboarding_content:rf.section8_onboarding_content}
              
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={arrowImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section8_compiliance_label:rf.section8_compiliance_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "18px" ,lineHeight:"24px"}}
            >
               {lang === "en"?en.section8_compiliance_content:rf.section8_compiliance_content}
              
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={complImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section8_conversion_label:rf.section8_conversion_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "18px" ,lineHeight:"24px"}}
            >
                {lang === "en"?en.section8_conversion_content:rf.section8_conversion_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={userplusImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section8_protection_label:rf.section8_protection_label}
             
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "18px" ,lineHeight:"24px"}}
            >
                {lang === "en"?en.section8_protection_content:rf.section8_protection_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={privacyImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section8_privacy_label:rf.section8_privacy_label}
             
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "18px" ,lineHeight:"24px"}}
            >
               {lang === "en"?en.section8_privacy_content:rf.section8_privacy_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={interImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section8_interoperability_label:rf.section8_interoperability_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "18px" ,lineHeight:"24px"}}
            >
              {lang === "en"?en.section8_interoperability_content:rf.section8_interoperability_content}
              
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Typography className={Style.solution_heading_dif_head}>
      {lang === "en"?en.section8_subtitle3:rf.section8_subtitle3}
       
      </Typography>
      <Typography sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" ,lineHeight:"24px"}}>
      {lang === "en"?en.section8_content2:rf.section8_content2}
        
      </Typography>
      <Typography sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" ,lineHeight:"24px"}}>
      {lang === "en"?en.section8_content3:rf.section8_content3}
        
      </Typography>
      
      <Typography sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" ,lineHeight:"24px"}}>
      {lang === "en"?en.section8_content4:rf.section8_content4}
        
      </Typography>
     
      <Typography sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" ,lineHeight:"24px"}}>
      {lang === "en"?en.section8_content5:rf.section8_content5}
        
      </Typography>
      <br/><br/>
      <br/><br/>
      <Button
            variant="contained"
            size="large"
            className={Style.Organizations_button}
          >
            {lang === "en"?en.section8_button_text:rf.section8_button_text}
            
          </Button><br/><br/>
          <div id="about"></div>
    </div>
  );
}
