import React, { useState } from "react";
import Style from "../../Css/home.module.css";
import { Button, Card, Grid, Typography } from "@mui/material";
import idImg from "../../Images/illustration2.jpg";
import bioImg from "../../Images/illustration1.jpg";
import didnImg from "../../Images/illustration3.jpg";
import IdenImg from "../../Images/Identity_proofing.png";
import idLogo from "../../Images/eid.png";
import bioLogo from "../../Images/biometric_auth.png";
import IdenLogo from "../../Images/idv.png";
import didnLogo from "../../Images/digital_id.png";
import solutionImg from "../../Images/homePicture.png"
import en from "../../lang/en";
import rf from "../../lang/rf";
import { HashLink } from "react-router-hash-link";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ModalVideo from "react-modal-video";
import 'react-modal-video/scss/modal-video.scss'; 

export default function OurSolution() {
  const [lang, setLang] = React.useState("");
  const [isOpen, setOpen] = useState(false)
  const [url, setUrl] = useState("")
  
     React.useEffect(()=>{
      const lan = localStorage.getItem("language");
      setLang(lan);

     },[])
  const Setdata = async(value)=>{
      localStorage.setItem("radioOption", value);
      window.location.reload();
     }
  return (
    <div className={Style.solution_outer_div} >
      <Typography className={Style.solution_heading_dif}>
      {lang === "en"?en.section1_title:rf.section1_title}
      </Typography>
      <Typography className={Style.solution_heading_dif_head}>
      {lang === "en"?en.section1_subtitle1:rf.section1_subtitle1}
      </Typography>
      <Typography className={Style.solution_paragrph}>
      {lang === "en"?en.section1_content1:rf.section1_content1}
      </Typography>

      <Typography className={Style.solution_heading_dif_head}>
       
        {lang === "en"?en.section1_subtitle2:rf.section1_subtitle2}
      </Typography>
      <Typography className={Style.solution_paragrph}>
        
        {lang === "en"?en.section1_content2:rf.section1_content2}
      </Typography>
      <img className={Style.solution_img} src={solutionImg} />
      
     
      {/* <----------------------  Image/Text-Section -----------------> */}
     
      <div style={{scrollSnapAlign:"start"}} id="eId-verification" >
      <Grid container >
       
        <Grid lg={12} md={12} xs={12}  sx={{paddingTop:"8rem"}}>
          <Typography className={Style.solution_heading_dif}>
           
            {lang === "en"?en.section2_title:rf.section2_title}
          </Typography>
        </Grid>
        <Grid lg={7} md={12} xs={12} className={Style.solution_grid_text_outer}>
          <img style={{ width: "18%" }} src={idLogo} />
          <Typography className={Style.solution_grid_head}>
          
            {lang === "en"?en.section2_subtitle:rf.section2_subtitle}
          </Typography>
          <Typography className={Style.solution_grid_text}>
            {lang === "en"?en.section2_content:rf.section2_content}
          </Typography>
          <br />
          <div className={Style.button_outer_div}>
          <HashLink
              to="/#contact"
              style={{ textDecoration: "none" }}
            ><Button
            variant="contained"
            size="large"
            className={Style.banner_button_gettouch}
          >
           
            {lang === "en"?en.section10_subtitle:rf.section10_subtitle}
          </Button>
          </HashLink>


          <Button
            variant="outlined"
            size="large"
            className={Style.button_watch_demo}
             onClick={()=> {
              setUrl("L-bBjk-KRBs")
              setOpen(true)
            }}
          >
            <PlayArrowOutlinedIcon sx={{fontSize:"36px"}} /> &nbsp;&nbsp;
            {lang === "en"?en.view_the_demo:rf.view_the_demo}
          </Button>
         
      </div>
        </Grid>
        <Grid lg={5} md={12} xs={12}>
          <img style={{ width: "100%" }} src={idImg} />
        </Grid>
      </Grid>
      </div>
      <Grid container id="biometric-authentication">
        <Grid lg={12} md={12} xs={12} sx={{paddingTop:"8rem"}}>
          <Typography className={Style.solution_heading_dif}>
            
            {lang === "en"?en.section3_title:rf.section3_title}
          </Typography>
        </Grid>
        <Grid lg={6} md={12} xs={12}>
          <img style={{ width: "85%" }} src={bioImg} />
        </Grid>
        <Grid lg={6} md={12} xs={12} className={Style.solution_grid_text_outer}>
          <img style={{ width: "24%" }} src={bioLogo} />
          <Typography className={Style.solution_grid_head}>
          
            {lang === "en"?en.section3_subtitle:rf.section3_subtitle}
          </Typography>
          <Typography className={Style.solution_grid_text}>
          {lang === "en"?en.section3_content:rf.section3_content}
           
          </Typography>
          <br />
          <div className={Style.button_outer_div}>
          <HashLink
              to="/#contact"
              style={{ textDecoration: "none" }}
            ><Button
            variant="contained"
            size="large"
            className={Style.banner_button_gettouch}
            onClick={()=>{
              Setdata("SALES")
            }}
          >
           
            {lang === "en"?en.section9_about_button_text:rf.section9_about_button_text}
          </Button>
          </HashLink>
          

          <Button
            variant="outlined"
            size="large"
            className={Style.button_watch_demo}
            onClick={()=> {
              setUrl("uW_XdO0nGd0")
              setOpen(true)
            }}
          >
            <PlayArrowOutlinedIcon sx={{fontSize:"36px"}} /> &nbsp;&nbsp;
            {lang === "en"?en.view_the_demo:rf.view_the_demo}
          </Button>
          </div>
         
        </Grid>
      </Grid>
      <Grid container id="identity-verification">
        <Grid lg={12} md={12} xs={12} sx={{paddingTop:"8rem"}}>
          <Typography className={Style.solution_heading_dif}>
           
            {lang === "en"?en.section4_title:rf.section4_title}
          </Typography>
        </Grid>

        <Grid lg={6} md={12} xs={12} className={Style.solution_grid_text_outer}>
          <img style={{ width: "24%" }} src={IdenLogo} />
          <Typography className={Style.solution_grid_head}>
           
            {lang === "en"?en.section4_subtitle:rf.section4_subtitle}
          </Typography>
          <Typography className={Style.solution_grid_text}>
          {lang === "en"?en.section4_content:rf.section4_content}
            
          </Typography>
          <br />
          <div className={Style.button_outer_div}>
          <HashLink
              to="/#contact"
              style={{ textDecoration: "none" }}
            ><Button
            variant="contained"
            size="large"
            className={Style.banner_button_gettouch}
            onClick={()=>{
              Setdata("SALES")
            }}
          >
           
            {lang === "en"?en.section9_about_button_text:rf.section9_about_button_text}
          </Button>
          </HashLink>
          
       
          <Button
            variant="outlined"
            size="large"
            className={Style.button_watch_demo}
            onClick={()=> {
              setUrl("4kFBc2o2FWU")
              setOpen(true)
            }}
          >
            <PlayArrowOutlinedIcon sx={{fontSize:"36px"}} /> &nbsp;&nbsp;
            {lang === "en"?en.view_the_demo:rf.view_the_demo}
          </Button>
          </div>
          
        </Grid>
        <Grid lg={6} md={12} xs={12}>
          <img style={{ width: "85%" }} src={IdenImg} />
        </Grid>
      </Grid>
      <Grid container id="digital-identity-network">
        <Grid lg={12} md={12} xs={12} sx={{paddingTop:"8rem"}}>
          <Typography className={Style.solution_heading_dif}>
          {lang === "en"?en.section5_title:rf.section5_title}
           
          </Typography>
        </Grid>

        <Grid lg={6} md={12} xs={12} >
          <img  style={{ width: "85%" ,marginTop:"4rem"}} src={didnImg} />
        </Grid>
        <Grid lg={6} md={12} xs={12} className={Style.solution_grid_text_outer}>
          <img style={{ width: "24%" }} src={didnLogo} />
          <Typography className={Style.solution_grid_head}>
          {lang === "en"?en.section5_subtitle:rf.section5_subtitle}
          
          </Typography>
          <Typography className={Style.solution_grid_text}>
          {lang === "en"?en.section5_content1:rf.section5_content1}
            
          </Typography><br/>
          <Typography className={Style.solution_grid_text}>
          {lang === "en"?en.section5_content2:rf.section5_content2}
            
          </Typography>
          <br />
          <div className={Style.button_outer_div}>
          <HashLink
              to="/#contact"
              style={{ textDecoration: "none" }}
            ><Button
            variant="contained"
            size="large"
            className={Style.banner_button_gettouch}
            onClick={()=>{
              Setdata("SALES")
            }}
          >
           
            {lang === "en"?en.section9_about_button_text:rf.section9_about_button_text}
          </Button>
          </HashLink>
          
         
          <Button
            variant="outlined"
            size="large"
            className={Style.button_watch_demo}
            onClick={()=> {
              setUrl("n4eIdbwKo8s")
              setOpen(true)
            }}
          >
            <PlayArrowOutlinedIcon sx={{fontSize:"36px"}} /> &nbsp;&nbsp;
            {lang === "en"?en.view_the_demo:rf.view_the_demo}
          </Button>
          </div>
          
        </Grid>
      </Grid>
      <div id="industries"></div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId={url}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
