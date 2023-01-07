import {
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Radio,
  Spacer,
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
import DropDown from "./sky-high/DropDown";

const Footer = () => {
  return (
    <>
    {/*<DropDown />*/}
    <Flex
      pos="relative"
      direction="column"
      bgColor="black"
      color="white"
      justify="center"
      px="100px"
    >
      <Flex pt="10" pb="1.125rem" pos="relative">
        <Flex direction="column" w="30%">
        <Image  w="12.5rem"  src="/images/logo.png" />
          <Flex align="left" py="6">
            <Icon mt="1" w="8" h="6" color="#DFBD69" as={ImLocation} />
            <Text fontSize="1rem" fontFamily="veralaRound">
              Prime Expat Infra No. 33,<br/>Mandapam Road,Kilpauk,<br/>Chennai -
              600010.
            </Text>
          </Flex>
          <VStack align="left">
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
        <Flex direction="column" px="10" w="20%">
          <Heading fontSize="1rem" fontFamily="veralaRound" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
            Who we are
          </Heading>
          <VStack
            align="flex-start"
            fontFamily="veralaRound"
            pt="4px"
          >
            <Link fontSize="1rem">ABOUT US</Link>
            <Link fontSize="1rem">EXPERTISE</Link>
            <Link fontSize="1rem">GREEN POWER</Link>
          </VStack>
          <VStack mt="0.325rem" align="flex-start" pt="10">
            <Heading fontSize="1rem" fontFamily="avenir" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
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
        <Flex direction="column" px="10" w="50%"  >
          <Flex align={"flex-start"} pos="relative">
          <Flex direction="column" px="10" w="100%">
          <Heading fontSize="1rem" fontFamily="avenir" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
            Projects
          </Heading>
          <VStack
            align="flex-start"
            fontFamily="veralaRound"
            fontWeight="400"
            pt="4px"
            >
            <Link href="/arete-homes" fontSize="1rem">ARETE HOMES</Link>
            <Link href="/sky-high" fontSize="1rem">SKY HIGH TOWER</Link>
            <Link href="/commercial-properties"  fontSize="1rem">COMMERCIAL PROPERTIES</Link>
          </VStack>
          </Flex>
          <Flex direction="column" pl="10" w="100%" pos="relative">
          
          <VStack
            align="flex-start"
            fontFamily="veralaRound"
            fontWeight="400"
            pt="4px"
            pos="absolute"
            right="3"
            >
              <Heading fontSize="1rem" fontFamily="veralaRound" textUnderlineOffset={"4px"} textDecoration={"underline"} textColor={"#DFBD69"}>
            Invest
          </Heading>
            <Link fontSize="1rem">WHY INVEST</Link>
            <Link fontSize="1rem">8% ROI ON HOMES</Link>
            <Link fontSize="1rem">7% ROI ON HOMES</Link>
          </VStack>
          </Flex>
          </Flex>
          <Flex  mt="1rem" direction="column" px="10" w="100%">
          <Heading fontSize="1rem" fontFamily="avenir" borderBottom="2px solid #DFBD69" textColor={"#DFBD69"}>
            Helpful Links
          </Heading>
          <Flex pt="4px" align={"flex-start"}>
          <VStack
            align="flex-start"
            fontFamily="veralaRound"
            fontWeight="400"
            >
            <Link href="/channel-partner" fontSize="1rem">CHANNEL<br/>PARTNER LOGIN</Link>
            <Link href="/contact-us" fontSize="1rem">CONTACT US</Link>
            <Link href="/careers" fontSize="1rem">CAREERS</Link>
          </VStack>
          <VStack
            align="flex-start"
            fontFamily="veralaRound"
            fontWeight="400"
            ml={""/*"auto"*/}
            pos="absolute"
            right="20"
            >
            <Link href="/news-and-media" fontSize="1rem">NEWS & MEDIA</Link>
            <Link href="/refer-and-earn" fontSize="1rem">REFER & EARN</Link>
            <Link href="/blog" fontSize="1rem">BLOG</Link>
          </VStack>
          </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider/>
      <Flex align="center" py="1.125rem" w="100%">
        <Text fontSize="1rem" fontWeight="600">
        &#169; 2022. PRIMELIFESPACE PVT. LTD.
        </Text>
        <Spacer/>
        <HStack>
          <Icon w="14" h="14" px="1" as={AiFillInstagram} />
          <Icon w="14" h="14" px="1" as={AiFillLinkedin} />
          <Icon w="12" h="12" px="1" as={BsFacebook} />
          <Icon w="14" h="14" px="1" as={AiFillYoutube} />
        </HStack>
      </Flex>
    </Flex>
    </>
  );
};

export default Footer;
