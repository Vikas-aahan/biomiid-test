import React from "react";
import Style from "../../Css/home.module.css";
import { Button, Card, Grid, Typography } from "@mui/material";
import goveImg from "../../Images/government.png";
import finacImg from "../../Images/financialServices.png";
import healthImg from "../../Images/healthCare.png";
import retailImg from "../../Images/retail_ecom.png";
import travelImg from "../../Images/travel.png";
import sharImg from "../../Images/sharing_economy.png";
import en from "../../lang/en";
import rf from "../../lang/rf";

export default function Industries() {
  const [lang, setLang] = React.useState("");
  
  React.useEffect(()=>{
   const lan = localStorage.getItem("language");
   setLang(lan);

  },[])
  return (
    <div className={Style.solution_outer_div} id="industries">
      <Typography className={Style.solution_heading_dif}> {lang === "en"?en.section6_title:rf.section6_title}</Typography>
      <Typography className={Style.solution_heading_dif_head}>
      {lang === "en"?en.section6_subtitle:rf.section6_subtitle}
        
      </Typography>
      <Typography
        sx={{ textAlign: "start", fontWeight: "600", fontSize: "28px" }}
      >
       {lang === "en"?en.section6_content:rf.section6_content}
      
      </Typography>

      <Grid container>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={goveImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section6_government_label:rf.section6_government_label}
             
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            > {lang === "en"?en.section6_government_content:rf.section6_government_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={finacImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section6_financial_label:rf.section6_financial_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            > {lang === "en"?en.section6_financial_content:rf.section6_financial_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={healthImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section6_health_label:rf.section6_health_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            >        
          {lang === "en"?en.section6_health_content:rf.section6_health_content}
              
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={retailImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section6_retail_label:rf.section6_retail_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            >  {lang === "en"?en.section6_retail_content:rf.section6_retail_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={travelImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section6_travel_label:rf.section6_travel_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            >  
            {lang === "en"?en.section6_travel_content:rf.section6_travel_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Industries_card_grid}>
          <Card variant="outlined" className={Style.Industries_card}>
            <img style={{ width: "35%" }} src={sharImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section6_sharing_label:rf.section6_sharing_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            >{lang === "en"?en.section6_sharing_content:rf.section6_sharing_content}
             
            </Typography>
          </Card>
        </Grid>
        
      
       
      </Grid><br/><br/><br/><br/><br/>
      <Button
            variant="contained"
            size="large"
            className={Style.Industries_button}
          >{lang === "en"?en.section6_button_text:rf.section6_button_text}
         
          </Button>
          <div id="individuals"></div>
    </div>
  );
}
