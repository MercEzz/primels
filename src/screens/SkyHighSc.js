import React from "react";
import DownloadBtn from "../components/sky-high/DownloadBtn";
import DropDown from "../components/sky-high/DropDown";
import EightSec from "../components/sky-high/EightSec";
import FifthSec from "../components/sky-high/FifthSec";
import FirstSec from "../components/sky-high/FirstSec";
import FourthSec from "../components/sky-high/FourthSec";
import LastSec from "../components/sky-high/LastSec";
import NinethSec from "../components/sky-high/NinethSec";
import SecondSec from "../components/sky-high/SecondSec";
import SeventhSec from "../components/sky-high/SeventhSec";
import SixthSec from "../components/sky-high/SixthSec";
import TenthSec from "../components/sky-high/TenthSec";
import ThirdSec from "../components/sky-high/ThirdSec";

const SkyHighSc = () => {
  return (
    <>
      {" "}
      <DownloadBtn />
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <SixthSec />
      <SeventhSec />
      <EightSec />
      <NinethSec />
      <TenthSec />
      <LastSec />
      <DropDown />
    </>
  );
};

export default SkyHighSc;
