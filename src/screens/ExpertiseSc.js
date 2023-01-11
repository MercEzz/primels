import React, { useLayoutEffect } from "react";
import AboutBanner from "../components/expertise/aboutBanner";
import Award from "../components/expertise/award";
import BoardofDirectors from "../components/expertise/BoardofDirectors";
import LeaderShip from "../components/expertise/LeaderShip";
import Consultation from "../components/expertise/Consultation";
import Whoweare from "../components/expertise/Whoweare";
import DropDown from "../components/sky-high/DropDown";
import { revealAgain, revealOnce } from "../hooks/util";
const ExpertiseSc =()=>{
    useLayoutEffect(()=>{
        window.addEventListener("scroll", revealAgain);
        window.addEventListener("scroll", revealOnce);
        return()=>{
          window.removeEventListener("scroll", revealAgain);
          window.removeEventListener("scroll", revealOnce);
        }
      });
      return (<>
        <AboutBanner/>
        <Whoweare/>
        <Consultation/>
        <BoardofDirectors/>
        <LeaderShip/>
        <Award/>
        <DropDown/>
      </>)
}
export default ExpertiseSc;