import { Flex, Text, Divider, Box } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./nm.css"
const FourthSec = () => {
  const videos=[{source:"https://www.youtube.com/embed/Psmw1t_S6-c"},{source:"https://www.youtube.com/embed/Psmw1t_S6-c"},{source:"https://www.youtube.com/embed/Psmw1t_S6-c"},{source:"https://www.youtube.com/embed/Psmw1t_S6-c"},{source:"https://www.youtube.com/embed/Psmw1t_S6-c"}]
  const [vid,setVid] = useState({id:"0",src:videos[0].source});
  const [discoHeight,setDiscoHeight] = useState("1.8");
  const changeVid=(e)=>{
    //console.log(e.ta);
    document.getElementById(`${vid.id}`).classList.remove("bold");
    const id = e.target.id;
    document.getElementById(`${id}`).classList.add("bold");
    setVid({id:String(id),src:videos[id].source});
    switch(e.target.id){
    case "0":
      setDiscoHeight("1.8")
      break;
    case "1":
      setDiscoHeight("6.563")
      break;
    case "2":
      setDiscoHeight("15.5")
      break;
    case "3":
      setDiscoHeight("20.5")
      break;
    case "4":
      setDiscoHeight("25")
      break;
    default:
      break;
    }
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if(isInView===true){
      setTimeout(() => {
        document.getElementById("0").click();
      }, 2000);
      setTimeout(() => {
        document.getElementById("1").click();
      }, 4000);
      setTimeout(() => {
        document.getElementById("2").click();
      }, 6000);
      setTimeout(() => {
        document.getElementById("3").click();
      }, 8000);
      setTimeout(() => {
        document.getElementById("4").click();
      }, 10000);
    }
    return()=>{
      clearTimeout();
    }
},[isInView]);
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="1rem"
      pt="3.125rem"
      direction="column"
      align="center"
      justify="center"
    >
      {" "}
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
      >
        PRIME TALKS
      </Text>
      <Flex direction="column" w="100%" h="100%" align="flex-start" justify="flex-start" pt="1.875rem">
        <Flex
          boxShadow="2px 4px 6px rgba(0,0,0, .2)"
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          w="100%"
          h="100%"
          flex="3"
          mr="1.562rem"
        ><div style={{height:"29.5rem",width:"41.75rem"}}>
          <embed
            height="100%"
            width="100%"
            src={vid.src}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></embed>
          </div>
        </Flex>
        <Flex>
        <Flex
          transform={isInView ? "translateY(0)" : "translateY(-50px)"}
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          h="100%"
          direction="column"
          justify="flex-start"
          align="center"
        >
          <Divider
            transitionTimingFunction={"ease-in-out"}
            transitionProperty={"height"}
            h={`${discoHeight}rem`}
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
          />
          <Box
            height="1.875rem"
            width="1.875rem"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </Flex>
        <Flex w="100%" h="100%">
          <Flex
          height="100%"
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            flex="1"
            direction="column"
            fontFamily="veralaRound"
            fontSize="1.25rem"
            justify="center"
          >
            <Text _hover={{cursor:"pointer"}} id={0} onClick={(e)=>changeVid(e)} pb="1.562rem" mt="2rem" pl="1.562rem" verticalAlign="middle">
              Best Realty Brand 2021<br/>The Economic Times
            </Text>
            <Text _hover={{cursor:"pointer"}} id={1} onClick={(e)=>changeVid(e)} pb="1.562rem" pl="1.562rem">
              The Future Of Real Estate
            </Text>
            <Text _hover={{cursor:"pointer"}} id={2} onClick={(e)=>changeVid(e)} pb="1.562rem" pl="1.562rem" verticalAlign="middle">
              Best Real Estate Investment<br/>8% Guaranteed Rental Return At<br/>Arete
              Homes
            </Text>
            <Text _hover={{cursor:"pointer"}} id={3} onClick={(e)=>changeVid(e)} pb="1.562rem" pl="1.562rem" verticalAlign="middle">
              Sky High Tower Launch Event
            </Text>
            <Text _hover={{cursor:"pointer"}} id={4} onClick={(e)=>changeVid(e)} pl="1.562rem" verticalAlign="middle">
              Dr. Janani Rex Talks About<br/>Arete Homes Sky High Towers
            </Text>
          </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FourthSec;