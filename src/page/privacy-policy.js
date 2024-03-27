import { Typography } from '@mui/material';
import React from 'react';
import ten from './../lang/p-en';
import Ren from './../lang/p-rf';
import Style from '../Css/term-service.module.css'
import UserLayout from '../Layout';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    const [lang, setLang] = React.useState("");
  
  React.useEffect(()=>{
   const lan = localStorage.getItem("language");
   setLang(lan);
   window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  },[])
  return (
    <UserLayout page={"PrivacyPolicy"}>
    <div  className={Style.outer_div}>
     <Typography className={Style.header_title}>
        {lang === "en"?ten.header_title:Ren.header_title}
     </Typography>
     <Typography className={Style.paragraph}>
        <span style={{color:"#7F00FF"}}>{lang === "en"?ten.last_update:Ren.last_update}</span>
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section1_title:Ren.section1_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section1_content:Ren.section1_content}
     </Typography>
    
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section2_title:Ren.section2_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content:Ren.section2_content}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle1:Ren.section2_subtitle1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle1_content1:Ren.section2_subtitle1_content1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle1_content2:Ren.section2_subtitle1_content2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle1_content3:Ren.section2_subtitle1_content3}
     </Typography>
     <Typography className={Style.paragraph}>
        <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle1_content3_1:Ren.section2_subtitle1_content3_1}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle1_content3_2:Ren.section2_subtitle1_content3_2}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle1_content3_3:Ren.section2_subtitle1_content3_3}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle1_content3_4:Ren.section2_subtitle1_content3_4}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle1_content3_5:Ren.section2_subtitle1_content3_5}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle1_content4:Ren.section2_subtitle1_content4}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle1_content4_1:Ren.section2_subtitle1_content4_1}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle1_content4_2:Ren.section2_subtitle1_content4_2}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle1_content4_3:Ren.section2_subtitle1_content4_3}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle1_content4_4:Ren.section2_subtitle1_content4_4}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle1_content4_5:Ren.section2_subtitle1_content4_5}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle1_content5:Ren.section2_subtitle1_content5}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle2:Ren.section2_subtitle2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle2_content:Ren.section2_subtitle2_content}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle3:Ren.section2_subtitle3}
     </Typography>
     {/* .................................. */}
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle3_content1:Ren.section2_subtitle3_content1}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle3_content1_1:Ren.section2_subtitle3_content1_1}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle3_content1_2:Ren.section2_subtitle3_content1_2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle3_content2:Ren.section2_subtitle3_content2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle3_content3:Ren.section2_subtitle3_content3}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle3_content4:Ren.section2_subtitle3_content4}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle3_content4_1:Ren.section2_subtitle3_content4_1}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section2_subtitle3_content4_2:Ren.section2_subtitle3_content4_2}
     </Typography>
    
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle4:Ren.section2_subtitle4}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_subtitle4_content:Ren.section2_subtitle4_content}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section3_title:Ren.section3_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section3_content:Ren.section3_content}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section3_subtitle1:Ren.section3_subtitle1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section3_subtitle1_content1:Ren.section3_subtitle1_content1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section3_subtitle1_content2:Ren.section3_subtitle1_content2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section3_subtitle1_content3:Ren.section3_subtitle1_content3}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle1_content3_1:Ren.section3_subtitle1_content3_1}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle1_content3_2:Ren.section3_subtitle1_content3_2}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle1_content3_3:Ren.section3_subtitle1_content3_3}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle1_content3_4:Ren.section3_subtitle1_content3_4}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle1_content3_5:Ren.section3_subtitle1_content3_5}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section3_subtitle1_content4:Ren.section3_subtitle1_content4}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle1_content4_1:Ren.section3_subtitle1_content4_1}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle1_content4_2:Ren.section3_subtitle1_content4_2}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle1_content4_3:Ren.section3_subtitle1_content4_3}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle1_content4_4:Ren.section3_subtitle1_content4_4}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle1_content4_5:Ren.section3_subtitle1_content4_5}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section3_subtitle2:Ren.section3_subtitle2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section3_subtitle2_content1:Ren.section3_subtitle2_content1}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section3_subtitle3:Ren.section3_subtitle3}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section3_subtitle3_content1:Ren.section3_subtitle3_content1}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle3_content1_1:Ren.section3_subtitle3_content1_1}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle3_content1_2:Ren.section3_subtitle3_content1_2}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle3_content1_3:Ren.section3_subtitle3_content1_3}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle3_content1_4:Ren.section3_subtitle3_content1_4}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section3_subtitle3_content1_5:Ren.section3_subtitle3_content1_5}
     </Typography>
     <Typography className={Style.paragraph}>
     {lang === "en"?ten.section3_subtitle3_content2:Ren.section3_subtitle3_content2}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section4_title:Ren.section4_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section4_content1:Ren.section4_content1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section4_content2:Ren.section4_content2}
     </Typography>

     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section5_title:Ren.section5_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section5_content1:Ren.section5_content1}
     </Typography>
     <Typography className={Style.paragraph}>
        <span style={{color:"#000066"}}>{lang === "en"?ten.section5_content1_label1:Ren.section5_content1_label1}</span>
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section5_content1_label1_text:Ren.section5_content1_label1_text}
     </Typography>
     <Typography className={Style.paragraph}>
        <span style={{color:"#000066"}}>{lang === "en"?ten.section5_content1_label2:Ren.section5_content1_label2}</span>
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section5_content1_label2_text:Ren.section5_content1_label2_text}
     </Typography>
     <Typography className={Style.paragraph}>
        <span style={{color:"#000066"}}>{lang === "en"?ten.section5_content1_label3:Ren.section5_content1_label3}</span>
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section5_content1_label3_text:Ren.section5_content1_label3_text}
     </Typography>
     <Typography className={Style.paragraph}>
        <span style={{color:"#000066"}}>{lang === "en"?ten.section5_content1_label4:Ren.section5_content1_label4}</span>
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section5_content1_label4_text:Ren.section5_content1_label4_text}
     </Typography>
     <Typography className={Style.paragraph}>
        <span style={{color:"#000066"}}>{lang === "en"?ten.section5_content1_label5:Ren.section5_content1_label5}</span>
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section5_content1_label5_text:Ren.section5_content1_label5_text}
     </Typography>
     <Typography className={Style.paragraph}>
        <span style={{color:"#000066"}}>{lang === "en"?ten.section5_content1_label6:Ren.section5_content1_label6}</span>
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section5_content1_label6_text:Ren.section5_content1_label6_text}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section5_content1_label6_text_l:Ren.section5_content1_label6_text_l}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section5_content1_label6_text_2:Ren.section5_content1_label6_text_2}
     </Typography>
     <Typography className={Style.paragraph}>
     <FiberManualRecordIcon sx={{fontSize:"10px"}}/> {lang === "en"?ten.section5_content1_label6_text_3:Ren.section5_content1_label6_text_3}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section5_content2:Ren.section5_content2} <Link to="www.google.com/policies/privacy/partners">
     
        {lang === "en"?ten.section5_content2_googlelink:Ren.section5_content2_googlelink}
    
     </Link>
     </Typography>
    
    


     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section6_title:Ren.section6_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section6_content1:Ren.section6_content1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section6_content2:Ren.section6_content2}
     </Typography>
     {/* ..................///////////////////////................ */}

     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section7_title:Ren.section7_title}
     </Typography>
     <Typography className={Style.paragraph}>
        <span style={{color:"#000066"}}>{lang === "en"?ten.section7_content1_label:Ren.section7_content1_label}</span>
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section7_content1_label_text:Ren.section7_content1_label_text}
     </Typography>
     <Typography className={Style.paragraph}>
        <span style={{color:"#000066"}}>{lang === "en"?ten.section7_content2_label:Ren.section7_content2_label}</span>
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section7_content2_label_text:Ren.section7_content2_label_text}
     </Typography>
    
     {/* ............////////////////...................... */}

     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section8_title:Ren.section8_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section8_content1:Ren.section8_content1}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section9_title:Ren.section9_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section9_content1:Ren.section9_content1}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section10_title:Ren.section10_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section10_content1:Ren.section10_content1}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section11_title:Ren.section11_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section11_content1:Ren.section11_content1}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section12_title:Ren.section12_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section12_content1:Ren.section12_content1}
     </Typography>
    

    </div>
    </UserLayout>
  )
}
