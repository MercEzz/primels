import React, { useLayoutEffect } from "react";
import Passionatwork from "../components/AboutUs/Passionatwork";
import Whoweare from "../components/AboutUs/Whoweare";
import { revealAgain, revealOnce } from "../hooks/util";
const AboutUsSc =()=>{
    useLayoutEffect(()=>{
        window.addEventListener("scroll", revealAgain);
        window.addEventListener("scroll", revealOnce);
        return()=>{
          window.removeEventListener("scroll", revealAgain);
          window.removeEventListener("scroll", revealOnce);
        }
      });
      return (<div style={{overflow:"hidden"}}>
        <Whoweare/>
        <Passionatwork/>
      </div>)
}
export default AboutUsSc;