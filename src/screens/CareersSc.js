import React from "react";
import Buildchng from "../components/careers/Buildchng";
import FirstSec from "../components/careers/firstSec";
import ImgSlider from "../components/careers/ImgSlider";
import Jobopp from "../components/careers/Jobopp";
import Lifeatls from "../components/careers/Lifeatls";
import OurEmp from "../components/careers/OurEmp";
import ResForm from "../components/careers/ResForm";
import SectionC from "../components/careers/SectionC";

const CareersSc = () => {
  return (
    <>
      <FirstSec />
      <Lifeatls />
      {/* <ImgSlider /> */}
      {/* <SectionC/> */}
      <Buildchng />
      <OurEmp />
      <Jobopp />
      {/* <ResForm /> */}
    </>
  );
};

export default CareersSc;
