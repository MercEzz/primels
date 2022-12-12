import {
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Radio,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsWhatsapp, BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import styled from 'styled-components';
const StyledFooter = styled.div`
    .collapsible-button{
      background-color: #B88746;
      display:flex;
      color: white;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 2rem;
      height:5rem;
    }
    .collapsible-button-text{
      align:flex-start;
    }
    .collapsible-button-icon{
      width:50px;
      height:50px;
      text-align: center;
      margin-left:auto;
      margin-right:100px;
      border: 3px solid;
      border-color:white;
      border-radius:50%;
      font-size: 2rem;
      padding-bottom: 1rem;
    }
    .collapsible-content{
      display: none;
    }
  `
const Footer = () => {
  const collapseRef= useRef(null);
  const scrollTo=(ref)=>ref.current.scrollIntoView();
  
  const toggleCollapsible=()=>{
    const collapse=document.getElementsByClassName("collapsible-content");
    let i=0;
    for (i; i < collapse.length; i++) {
      if(collapse[i].style.display === "block"){
        collapse[i].style.display = "none";
      }
      else{
        collapse[i].style.display = "block";
        scrollTo(collapseRef);
      }
    }
  }
  return (
    <StyledFooter>
    <button className="collapsible-button" onClick={()=>toggleCollapsible()}><div className="collapsible-button-text">MORE INFORMATION</div><div className="collapsible-button-icon">&#8964;</div></button>
    <Flex
      ref={collapseRef}
      className="collapsible-content"
      pos="relative"
      direction="column"
      align="center"
      bgColor="black"
      color="white"
      justify="center"
      px="12"
      pb="1.563rem"
    >
      <Flex py="10">
        <Flex direction="column" px="10" w="30%">
          Logo
          <Flex align="flex-start" py="6">
            <Icon mt="1" w="8" h="6" color="#DFBD69" as={ImLocation} />
            <Text fontSize="1rem" fontFamily="veralaRound">
              Prime Expat Infra No. 33, Mandapam Road, Kilpauk, Chennai -
              600010.
            </Text>
          </Flex>
          <VStack align="flex-start">
            <Heading fontSize="20px" fontFamily="avenir" fontWeight="600">
              GET IN TOUCH:
            </Heading>

            <Flex align="center">
              <Icon as={MdEmail} w="8" h="6" color="#DFBD69" />
              <Link fontSize="1rem" fontFamily="veralaRound">
                sales@primelifespace.com
              </Link>
            </Flex>
            <Flex align="center">
              <Icon as={BsWhatsapp} w="8" h="6" color="#DFBD69" />
              <Link fontSize="1rem" fontFamily="veralaRound">
                +91 9003199000
              </Link>
            </Flex>
            <Flex align="center">
              <Icon as={BsFillTelephoneFill} w="8" h="6" color="#DFBD69" />
              <Link fontSize="1rem" fontFamily="veralaRound">
                +91 7338808775
              </Link>
            </Flex>
          </VStack>
        </Flex>
        <Flex direction="column" px="10" w="25%">
          <Heading fontSize="20px" fontFamily="veralaRound" fontWeight="600" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
            Who we are
          </Heading>
          <VStack
            align="flex-start"
            fontFamily="veralaRound"
            fontWeight="400"
            pt="4px"
          >
            <Link fontSize="1rem">ABOUT US</Link>
            <Link fontSize="1rem">EXPERTISE</Link>
            <Link fontSize="1rem">GREEN POWER</Link>
          </VStack>
          <VStack align="flex-start" pt="10">
            <Heading fontSize="20px" fontFamily="avenir" fontWeight="600" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
              Services
            </Heading>
            <Link fontFamily="veralaRound" fontWeight="400" fontSize="1rem">
              SERVICED HOUSING
            </Link>
            <Link fontFamily="veralaRound" fontWeight="400" fontSize="1rem">
              PGC MEMBERSHIP
            </Link>
          </VStack>
        </Flex>
        <Flex direction="column" px="10" w="45%">
          <Flex align={"flex-start"}>
          <Flex direction="column" px="10" w="100%">
          <Heading fontSize="20px" fontFamily="avenir" fontWeight="600" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
            Projects
          </Heading>
          <VStack
            align="flex-start"
            fontFamily="veralaRound"
            fontWeight="400"
            pt="4px"
            >
            <Link fontSize="1rem">ARETE HOMES</Link>
            <Link fontSize="1rem">SKY HIGH TOWER</Link>
            <Link fontSize="1rem">COMMERCIAL PROPERTIES</Link>
          </VStack>
          </Flex>
          <Flex direction="column" px="10" w="100%" ml="auto">
          <Heading fontSize="20px" fontFamily="veralaRound" fontWeight="600" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
            Invest
          </Heading>
          <VStack
            align="flex-start"
            fontFamily="veralaRound"
            fontWeight="400"
            pt="4px"
            >
            <Link fontSize="1rem">WHY INVEST</Link>
            <Link fontSize="1rem">8% ROI ON HOMES</Link>
            <Link fontSize="1rem">7% ROI ON HOMES</Link>
          </VStack>
          </Flex>
          </Flex>
          <Flex direction="column" px="10" w="100%">
          <Heading fontSize="20px" fontFamily="avenir" fontWeight="600" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
            Helpful Links
          </Heading>
          <Flex pt="4px" align={"flex-start"}>
          <VStack
            align="flex-start"
            fontFamily="veralaRound"
            fontWeight="400"
            >
            <Link fontSize="1rem">CHANNEL PARTNER LOGIN</Link>
            <Link fontSize="1rem">CONTACT US</Link>
            <Link fontSize="1rem">CAREERS</Link>
          </VStack>
          <VStack
            align="flex-start"
            fontFamily="veralaRound"
            fontWeight="400"
            ml="auto"
            >
            <Link fontSize="1rem">NEWS & MEDIA</Link>
            <Link fontSize="1rem">REFER & EARN</Link>
            <Link fontSize="1rem">BLOG</Link>
          </VStack>
          </Flex>
          </Flex>
        </Flex>
      </Flex>
      <hr style={{color:"white"}}/>
      <Flex direction="row" align="center" py="1.563rem">
        <Text fontSize="1rem" fontWeight="600">
        &#169; 2022. PRIMELIFESPACE PVT. LTD.
        </Text>
        <HStack ml="auto" mr="100px">
          <Icon w="14" h="14" px="1" as={AiFillInstagram} />
          <Icon w="14" h="14" px="1" as={AiFillLinkedin} />
          <Icon w="12" h="12" px="1" as={BsFacebook} />
          <Icon w="14" h="14" px="1" as={AiFillYoutube} />
        </HStack>
      </Flex>
    </Flex>
    </StyledFooter>
  );
};

export default Footer;
