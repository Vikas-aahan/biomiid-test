import React from "react";
import UserLayout from "../Layout";
import Banner from "../components/Home/banner";
import OurSolution from "../components/Home/our-solution";
import Industries from "../components/Home/industries";
import Individuals from "../components/Home/Individuals";
import Organization from "../components/Home/organization";
import About from "../components/Home/about";
import ContactUs from "../components/Home/contact-us";

export default function Home({lan,setLang}) {
  return (
    <UserLayout>
        <Banner/>
        <OurSolution/>
        <Industries/>
        <Individuals/>
        <Organization/>
        <About/><br/>
        <ContactUs/>
    </UserLayout>
  );
}
