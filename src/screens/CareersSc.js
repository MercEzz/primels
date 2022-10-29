import React from "react";
import Buildchng from "../components/careers/Buildchng";
import FirstSec from "../components/careers/firstSec";
import ImgSlider from "../components/careers/ImgSlider";
import Jobopp from "../components/careers/Jobopp";
import Lifeatls from "../components/careers/Lifeatls";
import OurEmp from "../components/careers/OurEmp";
import ResForm from "../components/careers/ResForm";

const CareersSc = () => {
  return (
    <>
      <FirstSec />
      <Lifeatls />
      {/* <ImgSlider /> */}
      <Buildchng />
      <OurEmp />
      <Jobopp />
      {/* <ResForm /> */}
    </>
  );
};

export default CareersSc;
