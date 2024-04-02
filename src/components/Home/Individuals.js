import React from "react";
import Style from "../../Css/home.module.css";
import { Card, Grid, Typography } from "@mui/material";
import indiImg from "../../Images/individual_benefits.png";
import rightImg from "../../Images/verify.png";
import en from "../../lang/en";
import rf from "../../lang/rf";

export default function Individuals() {
  const [lang, setLang] = React.useState("");
  
  React.useEffect(()=>{
   const lan = localStorage.getItem("language");
   setLang(lan);

  },[])
  return (
    <div className={Style.solution_outer_div} >
      <Typography className={Style.solution_heading_dif}>
      {lang === "en"?en.section7_title:rf.section7_title}
       
      </Typography>
      <Typography className={Style.individual_heading_dif_head}>
        <img className={Style.Individuals_logo} src={indiImg} />
        {lang === "en"?en.section7_subtitle1:rf.section7_subtitle1}
      
      </Typography>
      <br />
      <Typography className={Style.individual_textbottom_head}>
      {lang === "en"?en.section7_content:rf.section7_content}
      
      </Typography><br/>
      <Typography className={Style.individual_textbottom_head_benefit}>
      {lang === "en"?en.section7_subtitle2:rf.section7_subtitle2}
       
      </Typography>

      <Grid container>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section7_sovereignty_label:rf.section7_sovereignty_label}
           
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" ,lineHeight:"24px",fontFamily: "Poppins"}}
            >
              {lang === "en"?en.section7_sovereignty_content:rf.section7_sovereignty_content}
            
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section7_verification_label:rf.section7_verification_label}
             
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" ,lineHeight:"24px" ,fontFamily: "Poppins"}}
            > {lang === "en"?en.section7_financial_content:rf.section7_financial_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section7_control_label:rf.section7_control_label}
            
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px",lineHeight:"24px" ,fontFamily: "Poppins"}}
            > 
            {lang === "en"?en.section7_control_content:rf.section7_control_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section7_protection_label:rf.section7_protection_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px",lineHeight:"24px" ,fontFamily: "Poppins"}}
            >{lang === "en"?en.section7_protection_content:rf.section7_protection_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section7_access_label:rf.section7_access_label}
             
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" ,lineHeight:"24px" ,fontFamily: "Poppins"}}
            > {lang === "en"?en.section7_access_content:rf.section7_access_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.Individual_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section7_effortless_label:rf.section7_effortless_label}
             
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" ,lineHeight:"24px" ,fontFamily: "Poppins"}}
            > {lang === "en"?en.section7_effortless_content:rf.section7_effortless_content}
            
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <div id="organization"></div>
    </div >
    
  );
}
