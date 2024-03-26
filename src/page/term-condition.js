import { Typography } from '@mui/material';
import React from 'react';
import ten from './../lang/t-en';
import Ren from './../lang/t-rf';
import Style from '../Css/term-service.module.css'
import UserLayout from '../Layout';

export default function TermCondition() {
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
    <UserLayout page={"TermCondition"}>
    <div  className={Style.outer_div}>
     <Typography className={Style.header_title}>
        {lang === "en"?ten.header_title:Ren.header_title}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section1_title:Ren.section1_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section1_content1:Ren.section1_content1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section1_content2:Ren.section1_content2}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section2_title:Ren.section2_title}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle1:Ren.section2_subtitle1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content1:Ren.section2_content1}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle2:Ren.section2_subtitle2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content2:Ren.section2_content2}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle3:Ren.section2_subtitle3}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content3:Ren.section2_content3}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle4:Ren.section2_subtitle4}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content4:Ren.section2_content4}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle5:Ren.section2_subtitle5}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content5:Ren.section2_content5}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle6:Ren.section2_subtitle6}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content6:Ren.section2_content6}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle7:Ren.section2_subtitle7}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content7:Ren.section2_content7}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle8:Ren.section2_subtitle8}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content8:Ren.section2_content8}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle9:Ren.section2_subtitle9}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content9:Ren.section2_content9}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section2_subtitle10:Ren.section2_subtitle10}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section2_content10:Ren.section2_content10}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section3_title:Ren.section3_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section3_content1:Ren.section3_content1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section3_content2:Ren.section3_content2}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section4_title:Ren.section4_title}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section4_subtitle1:Ren.section4_subtitle1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section4_content1:Ren.section4_content1}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section4_subtitle2:Ren.section4_subtitle2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section4_content2:Ren.section4_content2}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section4_subtitle3:Ren.section4_subtitle3}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section4_content3:Ren.section4_content3}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section4_subtitle4:Ren.section4_subtitle4}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section4_content4:Ren.section4_content4}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section4_subtitle5:Ren.section4_subtitle5}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section4_content5:Ren.section4_content5}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section5_title:Ren.section5_title}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section5_subtitle1:Ren.section5_subtitle1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section5_content1:Ren.section5_content1}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section6_title:Ren.section6_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section5_content2:Ren.section5_content2}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section5_title:Ren.section5_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section6_content1:Ren.section6_content1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section6_content2:Ren.section6_content2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section6_content3:Ren.section6_content3}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section7_title:Ren.section7_title}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section7_subtitle1:Ren.section7_subtitle1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section7_content1:Ren.section7_content1}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section7_subtitle2:Ren.section7_subtitle2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section7_content2:Ren.section7_content2}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section7_subtitle3:Ren.section7_subtitle3}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section7_content3:Ren.section7_content3}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section7_subtitle4:Ren.section7_subtitle4}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section7_content4:Ren.section7_content4}
     </Typography>
     <Typography className={Style.sub_title}>
        {lang === "en"?ten.section8_title:Ren.section8_title}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section8_subtitle1:Ren.section8_subtitle1}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section8_content1:Ren.section8_content1}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section8_subtitle2:Ren.section8_subtitle2}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section8_content2:Ren.section8_content2}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section9_title:Ren.section9_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section9_content:Ren.section9_content}
     </Typography>
     <Typography className={Style.sub}>
        {lang === "en"?ten.section10_title:Ren.section10_title}
     </Typography>
     <Typography className={Style.paragraph}>
        {lang === "en"?ten.section10_content:Ren.section10_content}
     </Typography>
    </div>
    </UserLayout>
  )
}
