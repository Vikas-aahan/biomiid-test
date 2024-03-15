import React from 'react';
import Style from "../../Css/home.module.css";
import { Card, Typography } from '@mui/material';

export default function ContactUs() {
  return (
    <div className={Style.outer_div_contact}>
        <br/>
        <br/>
        <Typography className={Style.solution_heading_dif}>Contact Us</Typography>
        {/* <Card variant='outlined' sx={{ maxWidth: 1000 }}>
             <Typography className={Style.contact_heading}>Get in touch</Typography>
        </Card> */}
    </div>
  )
}
