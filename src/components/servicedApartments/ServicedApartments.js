import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  SimpleGrid,
  HStack,
  VStack,
  Grid,
  GridItem,
  Button,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Container,
  Checkbox,
  Icon,
} from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React, { useLayoutEffect } from "react";
import banner from "../serviced apartments imgs/MIVAN TECHNOLOGY TOWER.jpg";
import apartment from "../serviced apartments imgs/serviced apartments icons/smart way of living - 1st.svg";
import time from "../serviced apartments imgs/serviced apartments icons/smart way of living-2nd.svg";
import ringbell from "../serviced apartments imgs/serviced apartments icons/smart way of living -3rd.svg";
import edit from "../serviced apartments imgs/serviced apartments icons/smart way of living -4th.svg";
import studentHousing from "../serviced apartments imgs/group-indian-people.jpg";
import coliving from "../serviced apartments imgs/arabian-men-women-sitting-kitchen-discussing-news.jpg";
import managedLiving from "../serviced apartments imgs/portrait-happy-indian-asian-young-family-while-sitting-sofa-lying-floor-sitting-against-wall.jpg";
import television from "../serviced apartments imgs/serviced apartments icons/telivision.svg";
import sofa from "../serviced apartments imgs/serviced apartments icons/sofa.svg";
import REFRIGERATOR from "../serviced apartments imgs/serviced apartments icons/refrigrator.svg";
import studyTable from "../serviced apartments imgs/serviced apartments icons/study.svg";
import airConditioning from "../serviced apartments imgs/serviced apartments icons/ac.svg";
import electricalPoints from "../serviced apartments imgs/serviced apartments icons/electrical point.svg";
import wallMirror from "../serviced apartments imgs/serviced apartments icons/wall mirror.svg";
import windowBalcony from "../serviced apartments imgs/serviced apartments icons/window.svg";
import comfortableBed from "../serviced apartments imgs/serviced apartments icons/bed.svg";
import cupboards from "../serviced apartments imgs/serviced apartments icons/cupboard.svg";
import washrooms from "../serviced apartments imgs/serviced apartments icons/washroom.svg";
import dinningTable from "../serviced apartments imgs/serviced apartments icons/dining.svg";
import wifi from "../serviced apartments imgs/serviced apartments icons/wifi.svg";
import housekeeping from "../serviced apartments imgs/serviced apartments icons/house keeping.svg";
import laundry from "../serviced apartments imgs/serviced apartments icons/laundry.svg";
import cctv from "../serviced apartments imgs/serviced apartments icons/cctv.svg";
import meals from "../serviced apartments imgs/serviced apartments icons/meals.svg";
import garbage from "../serviced apartments imgs/serviced apartments icons/garbage schute.svg";
import cable from "../serviced apartments imgs/serviced apartments icons/tv cable.svg";
import parking from "../serviced apartments imgs/serviced apartments icons/parking.svg";
import toiletries from "../serviced apartments imgs/serviced apartments icons/toiletries.svg";
// Grid Images
import partyArea from "../serviced apartments imgs/party area.JPG";
import garden from "../serviced apartments imgs/garden and jogging track.jpg";
import gym from "../serviced apartments imgs/gym.JPG";
import meditation from "../serviced apartments imgs/arete meditation retreat 3.jpg";
import sports from "../serviced apartments imgs/multi sports arena.jpg";
import pool from "../serviced apartments imgs/pool.JPG";
import exercise from "../serviced apartments imgs/open exercise area.jpg";
import cafe from "../serviced apartments imgs/cafe.jpg";

import manStanding from "../serviced apartments imgs/1stock-removebg-preview.png";

// second grid
import hall from "../serviced apartments imgs/8.jpeg";
import cricket from "../serviced apartments imgs/d22de3dc-9dff-4ab2-a5ba-6c87a89e0e7a.JPG";
import kidsplaying from "../serviced apartments imgs/kids play area.jpeg";
import badminton from "../serviced apartments imgs/IMG_4483.jpg";
import tabletenis from "../serviced apartments imgs/WhatsApp Image 2021-12-14 at 1.14.08 PM (1).jpeg";
import meditating from "../serviced apartments imgs/meditate.png";
import yoga from "../serviced apartments imgs/activity area.jpeg";
import planting from "../serviced apartments imgs/WhatsApp Image 2020-06-05 at 10.51.57 PM.jpeg";

// icons
import temples from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/TEMPLES.svg";
import hospitals from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/HOSPITAL.svg";
import institute from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/INSTITUTES.svg";
import social from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/SOCIAL FABRIC.svg";
import industry from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/INDUSTRY.svg";
import ports from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/PORT.svg";
import { ImLocation } from "react-icons/im";
import Slider from "react-slick";

// logos
import herocoop from "../serviced apartments imgs/HERO MOTOR CORP.jpg";
import velammal from "../serviced apartments imgs/VELAMMAL.png";
import kobelco from "../serviced apartments imgs/KOBELCO.png";
import siemens from "../serviced apartments imgs/SIEMENS.png";
import lAndt from "../serviced apartments imgs/L&T .png";
import adani from "../serviced apartments imgs/ADANI.png";
import linde from "../serviced apartments imgs/LINDE.png";
import yanmar from "../serviced apartments imgs/YANMAR.png";
import DropDown from "./DropDown";
import "./serviceaptAnimation.css"
import "./serviceaptStyle.css"
const ServicedApartments = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    try{

    for (var i = 0; i <= reveals.length; i++) {
      
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i]
        ? reveals[i].getBoundingClientRect().top
        : null;
      var elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }catch(e){
    
  }
  }
  useLayoutEffect(()=>{
    window.addEventListener("scroll", reveal);
    return()=>{
      window.removeEventListener("scroll", reveal);
    }
  });
  return (
    <>
      {/* Banner section  */}
      <Flex w="100%" h="100vh" pos="relative">
        <Image
          w="100%"
          h="100%"
          pos="absolute"
          src={banner}
          objectFit="cover"
          objectPosition="bottom"
        />
        <Flex
          pos="absolute"
          bottom="0"
          w="100%"
          h="100%"
          bgColor="rgba(0,0,0,0.4)"
          align="center"
          justify="center"
          color="white"
          direction="column"
          pt="7.25rem"
          overflow="hidden"
        >
          <Text
            animation="serv-text-up 1 1s linear"
            fontFamily="goudy"
            fontSize="3rem"
            textShadow="black 1px 1px 10px"
            pb="1.563rem"
          >
            WELCOME TO ARETE HOMES!
          </Text>
          <Heading
            animation="serv-text-down 1 1s linear"
            fontFamily="avenir"
            fontSize="2.125rem"
            textShadow="black 1px 1px 10px"
            pb="4.5rem"
          >
            PREMIUM RENTAL SERVICED APARTMENTS
          </Heading>
          <Flex
            w="100%"
            h="100%"
            gap="1rem"
            align="center"
            justify="center"
            px="11.25rem"
            overflow="hidden"
          >
            <Box w="100%" pos="relative" animation="serv-text-down 1 2s linear">
              <Image
                w="100%"
                h="18.75rem"
                objectFit="cover"
                src={studentHousing}
              />
              <Heading
                textAlign="center"
                w="100%"
                fontFamily="avenir"
                fontSize="1.5rem"
                pos="absolute"
                bottom="1.563rem"
                textShadow="black 1px 1px 10px"
              >
                STUDENT HOUSING
              </Heading>
            </Box>
            <Box w="100%" pos="relative" animation="serv-text-down 1 2s linear">
              <Image
                w="100%"
                h="18.75rem"
                objectFit="cover"
                objectPosition="left"
                src={coliving}
              />
              <Heading
                textAlign="center"
                w="100%"
                fontFamily="avenir"
                fontSize="1.5rem"
                pos="absolute"
                bottom="1.563rem"
                textShadow="black 1px 1px 10px"
              >
                CO-LIVING FOR PROFESSIONALS
              </Heading>
            </Box>
            <Box w="100%" pos="relative" animation="serv-text-down 1 2s linear">
              <Image
                w="100%"
                h="18.75rem"
                objectFit="cover"
                src={managedLiving}
              />
              <Heading
                textAlign="center"
                w="100%"
                fontFamily="avenir"
                fontSize="1.5rem"
                pos="absolute"
                bottom="1.563rem"
                textShadow="black 1px 1px 10px"
              >
                MANAGED LIVING
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {/** Smart way of living section  **/}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        px="6.25rem"
        align="center"
        direction="column"
        pt="5rem"
        pb="3.125rem"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="serv-text-up reveal">
          A SMART WAY OF LIVING
        </Text>
        <Flex w="100%" h="100%" gap="1.25rem">
          <Flex w="100%" align="center" justify="center" direction="column" overflow="hidden">
            <Image mb="1rem" src={apartment} className="fadein reveal"/>
            <Flex w="100%" align="center" mb="1rem" className="discoleft1 reveal">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              className="fadein reveal"
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Choose your APARTMENT
            </Heading>
          </Flex>
          <Flex w="100%" align="center" justify="center" direction="column" overflow="hidden">
            <Image mb="1rem" src={time} className="fadein2 reveal"/>
            <Flex w="100%" align="center" mb="1rem" className="discoleft2 reveal">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              className="fadein2 reveal"
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Choose your Rental Duration
            </Heading>
          </Flex>
          <Flex w="100%" align="center" justify="center" direction="column" overflow="hidden">
            <Image mb="1rem" src={ringbell} className="fadein3 reveal"/>
            <Flex w="100%" align="center" mb="1rem" className="discoleft3 reveal">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              className="fadein3 reveal"
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Tailor the services your way
            </Heading>
          </Flex>
          <Flex w="100%" align="center" justify="center" direction="column" overflow="hidden">
            <Image mb="1rem" src={edit} className="fadein4 reveal"/>
            <Flex w="100%" align="center" mb="1rem" className="discoleft4 reveal">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              className="fadein4 reveal"
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Agreement - get what you want
            </Heading>
          </Flex>
        </Flex>
      </Flex>
      {/** PREMIUM SMART HOMES section  **/}
      <Flex
        w="100%"
        h="100%"
        align="center"
        direction="column"
        py="1.875rem"
        px="6.25rem"
        overflow="hidden"
      >
        {" "}
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.563rem" className="serv-text-up reveal">
          PREMIUM SMART HOMES
        </Text>
        <Text
          className="fadein reveal"
          textAlign="center"
          fontFamily="goudy"
          fontSize="1.125rem"
          pb="1.563rem"
        >
          Arete Homes is a well-planned smart township that offers a taste of
          luxury in a rental flat at affordable pricing that feels owned. Our
          services cater for all - Bachelors, Students, Working Genre and
          Family.
        </Text>
        Carousels
      </Flex>
      {/** premium smart homes 2nd section **/}
      <Flex w="100%" h="100%" px="6.25rem" py="3.125rem" overflow="hidden">
        <Flex w="30%">video</Flex>
        <Flex
          className="discoup reveal"
          w="10%"
          h="100%"
          direction="column"
          justify="center"
          align="center"
          px="1.563rem"
        >
          {" "}
          <Divider
            h="21.25rem"
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
        <Flex w="60%" h="100%" align="flex-start" direction="column">
          {" "}
          <TableContainer pb="1rem">
            <Table>
              <Thead
                textTransform="uppercase"
                bgGradient="linear(to-b, #DFBD69, #B88746)"
              >
                {" "}
                <Tr>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="1.25rem"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    px="4rem"
                    py="1.125rem"
                  >
                    Configuration
                  </Th>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="1.25rem"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    px="4rem"
                    py="1.125rem"
                  >
                    OCCUPANCY (MAX.)
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      2 BHK
                    </Heading>
                  </Td>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      4 GUESTS
                    </Heading>
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      2.5 BHK
                    </Heading>
                  </Td>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      5 GUESTS
                    </Heading>
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      3 BHK
                    </Heading>
                  </Td>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      6 GUESTS
                    </Heading>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Text fontFamily="veralaRound" fontSize="1.125rem" pb="1.875rem">
            Rooms available for Private or Sharing use.
          </Text>
          <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.25rem">
            FURNISHED AMENITIES
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="2.5rem">
            {furnishedAmenities.map((items) => (
              <HStack key={items.title}>
                <Image h="3.125rem" w="3.125rem" src={items.icon} />
                <Heading fontFamily="avenir" fontSize="1rem">
                  {items.title}
                </Heading>
              </HStack>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" direction="column" px="6.25rem" py="1.875rem" overflow="hidden">
        <Text
          className="serv-text-up reveal"
          textAlign="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          pb="1.875rem"
        >
          PREMIUM HOME SERVICES
        </Text>
        <Flex
          className="fadein reveal"
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
          gap="3.75rem"
          pb="3.125rem"
        >
          {premiumHouseFirst.map((item) => (
            <VStack>
              <Image h="5rem" w="5rem" src={item.icon} />
              <Heading
                w="100%"
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.25rem"
              >
                {item.title}
              </Heading>
            </VStack>
          ))}
        </Flex>{" "}
        <Flex
          className="fadein reveal"
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
          gap="3.75rem"
          px="8.125rem"
        >
          {premiumHouseSecond.map((item) => (
            <VStack>
              <Image h="5rem" w="5rem" src={item.icon} />
              <Heading
                w="100%"
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.25rem"
              >
                {item.title}
              </Heading>
            </VStack>
          ))}
        </Flex>
      </Flex>
      {/* amenities sec */}
      <Flex w="100%" h="100%" pt="3.125rem" pb="0.938rem" direction="column" overflow="hidden">
        <Text
          className="serv-text-up reveal"
          w="100%"
          textAlign="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          pb="1.563rem"
        >
          AMENITIES
        </Text>
        <Flex overflow="hidden">
        <Heading
          className="serv-text-down reveal"
          w="100%"
          textAlign="center"
          fontFamily="avenir"
          fontSize="2.125rem"
          pb="1.563rem"
        >
          EVERYTHING UNDER ONE ROOF
        </Heading>
        </Flex>
        <Flex w="100%" h="100%" gap="0.938rem">
          <Flex w="100%" h="100%">
            <Grid templateColumns="repeat(2, 1fr)" gap="0.938rem">
              <GridItem rowSpan={2} colSpan={1} pos="relative" className="serv-expand-img reveal">
                <Image
                  w="100%"
                  h="35.313rem"
                  objectFit="cover"
                  src={partyArea}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    OPEN PARTY AREA
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative" className="serv-expand-img reveal">
                <Image w="100%" h="17.188rem" objectFit="cover" src={garden} />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    GARDEN
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative" className="serv-expand-img reveal">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={gym}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    GYM
                  </Heading>
                </Box>
              </GridItem>
              <GridItem colSpan={2} pos="relative" className="serv-expand-img reveal">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={meditation}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    MEDITATION CENTRE
                  </Heading>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
          <Flex w="100%" h="100%">
            <Grid
              h="100%"
              templateColumns="repeat(2, 1fr)"
              // templateRows="repeat(3, 1fr)"
              gap="0.938rem"
            >
              <GridItem colSpan={2} pos="relative" className="serv-expand-img reveal">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={sports}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    MULTI SPORTS ARENA
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative" className="serv-expand-img reveal">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={pool}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    SWIMMING POOL
                  </Heading>
                </Box>
              </GridItem>{" "}
              <GridItem rowSpan={2} colSpan={1} pos="relative" className="serv-expand-img reveal">
                <Image w="100%" h="35.313rem" objectFit="cover" src={cafe} />
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    CAFETERIA
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative" className="serv-expand-img reveal">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={exercise}
                />
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    OPEN EXERCISE AREA
                  </Heading>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
      {/*move in sec*/}
      <Flex
        overflow="hidden"
        w="100%"
        h="95vh"
        bgGradient="linear(to-b, #DFBD69, #B88746)"
        py="3.125rem"
        pos="relative"
        direction="column"
      >
        <Flex w="100%" h="100%">
          <Flex
            overflow="hidden"
            w="55%"
            h="100%"
            align="flex-start"
            justify="center"
            direction="column"
            pl="6.25rem"
            
          >
            <Flex overflow="hidden">
            <Heading
              className="serv-text-up reveal"
              fontFamily="avenir"
              color="black"
              fontSize="2.125rem"
              pb="0.938rem"
            >
              MOVE IN WITH JUST YOUR CLOTHES
            </Heading>
            </Flex>
            <Flex overflow="hidden">
            <Heading
              className="serv-text-down reveal"
              fontFamily="avenir"
              color="white"
              fontSize="2.125rem"
              pb="2.5rem"
            >
              WE GOT THE REST COVERED
            </Heading>
            </Flex>
            <Text fontFamily="veralaRound" fontSize="1.25rem" pb="1.563rem" className="fadein2 reveal">
              You can choose from an array of apartments with services and
              customize according to your needs.
            </Text>
            <Button
              className="fadein2 reveal"
              bgColor="#000"
              color="#fff"
              _hover={{ bgColor: "#000", color: "#fff" }}
            >
              SCHEDULE A VISIT
            </Button>
          </Flex>
          <Flex w="45%" h="100%" pos="relative" align="center" justify="center">
            <Flex
              w="100%"
              h="100%"
              pos="absolute"
              bgGradient="linear(to-b, #b88746, #B88746)"
              clipPath="polygon(10% 10%, 100% 40%, 35% 100%)"
            />
            <Image pos="absolute" h="100%" src={manStanding} />
            <Flex
              w="100%"
              h="100%"
              pos="absolute"
              bgGradient="linear(to-b, #CBA257,#BD8E4B)"
              clipPath="polygon(68% 70%, 100% 100%, 35% 100%)"
            />
          </Flex>
        </Flex>
        <Flex
          className="fadein2 reveal"
          w="100%"
          direction="column"
          align="center"
          pos="absolute"
          bottom="3.125rem"
        >
          {" "}
          <Text fontFamily="goudy" fontSize="2.125rem" pb="0.625rem">
            LIFE JUST GOT BETTER
          </Text>
          <HStack color="white" gap="0.938rem" lineHeight="1.188rem">
            <Heading fontFamily="avenir" fontSize="1rem">
              BETTER APARTMENTS
            </Heading>
            <Heading fontFamily="avenir" fontSize="1rem">
              BETTER SERVICES
            </Heading>
            <Heading fontFamily="avenir" fontSize="1rem">
              BETTER AMENITIES
            </Heading>
          </HStack>
        </Flex>
      </Flex>
      {/*Arete Homes Img Galary*/}
      <Flex w="100%" h="100%" pt="0.938rem">
        <Flex w="100%" h="100%">
          {" "}
          <Flex
            w="45%"
            // pos="absolute"
            direction="column"
            justify="center"
            pl="6.25rem"
            
          >
            <Text w="100%" fontFamily="goudy" fontSize="2.5rem" pb="1.563rem" className="serv-text-up reveal">
              A LIFE WHERE YOU DON’T HAVE TO WAIT FOR WEEKENDS TO ENJOY
            </Text>
            <Text
              w="50%"
              fontFamily="veralaRound"
              fontSize="1.125rem"
              mb="10rem"
            >
              Arete Homes aims to provide better experiences in every aspect of
              life.
              <br /> With innumerable activities lined up for you, there is so
              much to do, so little time.
            </Text>
          </Flex>
          <Flex
            w="55%"
            h="100%"
            direction="column"
            // align="flex-end"
            pr="0.938rem"
          >
            <Flex w="100%" h="100%" justify="flex-end">
              <Image
                w="20.125rem"
                h="13.75rem"
                // pos="absolute"
                objectPosition="center"
                objectFit="contain"
                src={hall}
              />
              <Image
                mt="4.688rem"
                w="19.625rem"
                h="20.313rem"
                // pos="absolute"
                top="5.625rem"
                objectPosition="70%"
                objectFit="cover"
                src={cricket}
              />
            </Flex>
            <Flex
              w="100%"
              h="100%"
              gap="0.938rem"
              // mr="8.65rem"
              // pos="relative"
              wrap="nowrap"
              // top="-4rem"
            >
              <Box pos="relative" w="15.688rem" h="10.938rem">
                <Image src={kidsplaying} pos="absolute" />
              </Box>{" "}
              <Box pos="relative" w="15.375rem" h="22.125rem">
                <Image
                  zIndex="3"
                  objectFit="contain"
                  objectPosition="cover"
                  src={badminton}
                  pos="absolute"
                />
              </Box>
              <Box pos="relative" w="21.125rem" h="19.688rem">
                <Image
                  zIndex="5"
                  objectFit="cover"
                  objectPosition="80%"
                  // top="-8.5rem"
                  // right="10rem"
                  src={tabletenis}
                  pos="absolute"
                />
              </Box>
            </Flex>
            <Flex
              pos="relative"
              w="100%"
              h="100%"
              gap="0.938rem"
              align="flex-end"
              bgColor="red"
              // ml="-19.7rem"
              // pt="0.938rem"
            >
              <Image
                w="25rem"
                h="16.125rem"
                objectPosition="center"
                objectFit="cover"
                left="0"
                src={meditating}
                pos="relative"
              />
              <Image
                w="20.75rem"
                h="18.438rem"
                src={yoga}
                pos="relative"
                left="0"
              />
              <Image
                w="17.5rem"
                h="23.875rem"
                src={planting}
                pos="relative"
                left="0"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* location advantage */}
      <Flex
        w="100%"
        h="100%"
        direction="column"
        pt="5rem"
        align="center"
        justify="center"
        px="6.25rem"
        pb="3.125rem"
      >
        {" "}
        <Text fontFamily="goudy" pb="1.875rem" fontSize="2.5rem" className="serv-text-up reveal">
          LOCATION ADVANTAGE
        </Text>
        <Flex w="100%" h="100%" justify="space-between" pb="3.125rem">
          <Flex w="60%" h="100%" direction="column">
            <Box w="100%" h="29.25rem" className="expand reveal">
              <embed
                class="gmap_iframe"
                width="100%"
                height="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=918&amp;height=700&amp;hl=en&amp;q=Prime lifespace&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </Box>
            <Button
              w="100%"
              h="3.187rem"
              fontSize="1rem"
              mt="0.938rem"
              fontFamily="avenir"
              fontWeight="bold"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              <ImLocation size="1.875rem" /> SHOW LOCATION ON GOOGLE MAPS
            </Button>
          </Flex>
          <Flex
            className="discoup reveal"
            w="10%"
            h="100%"
            direction="column"
            justify="center"
            align="center"
            px="1.563rem"
          >
            {" "}
            <Divider
              h="3.5rem"
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
          <Flex
            w="30%"
            h="100%"
            direction="column"
            alignSelf="center"
            justify="center"
          >
            <Flex pb="1.563rem" align="center" className="fadein reveal">
              <Box
                borderRadius="50%"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                p="0.625rem"
                mr="1rem"
                _hover={{ cursor: "pointer" }}
              >
                <Image w="1.875rem" h="1.875rem" src={temples} />
              </Box>

              <Heading fontFamily="avenir" fontSize="1.25rem">
                TEMPLES
              </Heading>
            </Flex>
            <Flex pb="1.563rem" align="center" className="fadein reveal">
              <Box
                borderRadius="50%"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                p="0.625rem"
                mr="1rem"
                _hover={{ cursor: "pointer" }}
              >
                <Image w="1.875rem" h="1.875rem" src={hospitals} />
              </Box>

              <Heading fontFamily="avenir" fontSize="1.25rem">
                HOSPITALS
              </Heading>
            </Flex>
            <Flex pb="1.563rem" align="center" className="fadein reveal">
              <Box
                borderRadius="50%"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                p="0.625rem"
                mr="1rem"
                _hover={{ cursor: "pointer" }}
              >
                <Image w="1.875rem" h="1.875rem" src={institute} />
              </Box>

              <Heading fontFamily="avenir" fontSize="1.25rem">
                EDUCATIONAL INSTITUTES
              </Heading>
            </Flex>{" "}
            <Flex pb="1.563rem" align="center" className="fadein reveal">
              <Box
                borderRadius="50%"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                p="0.625rem"
                mr="1rem"
                _hover={{ cursor: "pointer" }}
              >
                <Image w="1.875rem" h="1.875rem" src={social} />
              </Box>

              <Heading fontFamily="avenir" fontSize="1.25rem">
                SOCIAL FABRIC
              </Heading>
            </Flex>{" "}
            <Flex pb="1.563rem" align="center" className="fadein reveal">
              <Box
                borderRadius="50%"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                p="0.625rem"
                mr="1rem"
                _hover={{ cursor: "pointer" }}
              >
                <Image w="1.875rem" h="1.875rem" src={industry} />
              </Box>

              <Heading fontFamily="avenir" fontSize="1.25rem">
                INDUSTRIAL PARKS
              </Heading>
            </Flex>
            <Flex align="center" className="fadein reveal">
              <Box
                borderRadius="50%"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="3.125rem"
                h="3.125rem"
                align="center"
                p="0.625rem"
                mr="1rem"
                _hover={{ cursor: "pointer" }}
              >
                <Image w="1.875rem" h="1.875rem" src={ports} />
              </Box>

              <Heading fontFamily="avenir" fontSize="1.25rem">
                PORTS
              </Heading>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%">
          <Flex w="100%" direction="column">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" className="discoball-slidein-left1 reveal">
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="4rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Heading
              className="fadein reveal"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.5rem"
              pb="1rem"
            >
              5 MINS
            </Heading>
            <UnorderedList fontFamily="veralaRound" fontSize="1rem" className="fadein reveal">
              <ListItem pb="0.625rem">Velammal International School</ListItem>
              <ListItem pb="0.625rem">Origin By Mahindra</ListItem>
              <ListItem>Ponneri Railway Station</ListItem>
            </UnorderedList>
          </Flex>
          <Flex w="100%" direction="column">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" className="discoball-slidein-left2 reveal">
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="4rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Heading
              className="fadein2 reveal"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.5rem"
              pb="1rem"
            >
              10 MINS
            </Heading>
            <UnorderedList fontFamily="veralaRound" fontSize="1rem" className="fadein2 reveal">
              <ListItem pb="0.625rem">Connect To Outer Ring Road</ListItem>
              <ListItem pb="0.625rem">Siruvapuri Murugan Temple</ListItem>
              <ListItem pb="0.625rem">VELS Medical Hospital</ListItem>
              <ListItem>R.M.K. Engineering College</ListItem>
            </UnorderedList>
          </Flex>
          <Flex w="100%" direction="column">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" className="discoball-slidein-left3 reveal">
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="4rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Heading
              className="fadein3 reveal"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.5rem"
              pb="1rem"
            >
              20 MINS
            </Heading>
            <UnorderedList fontFamily="veralaRound" fontSize="1rem" className="fadein3 reveal">
              <ListItem pb="0.625rem">Gummidipoondi SIPCOT</ListItem>
              <ListItem pb="0.625rem">Amazon</ListItem>
              <ListItem pb="0.625rem">Minjur</ListItem>
              <ListItem>Pulicat Lake</ListItem>
            </UnorderedList>
          </Flex>
          <Flex w="100%" direction="column">
            {" "}
            <Flex w="100%" align="center" pb="1.563rem" className="discoball-slidein-left4 reveal">
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="4rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Heading
              className="fadein4 reveal"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.5rem"
              pb="1rem"
            >
              30 MINS
            </Heading>
            <UnorderedList fontFamily="veralaRound" fontSize="1rem" className="fadein4 reveal">
              <ListItem pb="0.625rem">Sri City</ListItem>
              <ListItem>Kattupalli Adani Port, Chennai Port</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" pb="5rem" px="6.25rem">
        <Flex w="50%" h="100%" direction="column">
          <Heading
            w="100%"
            textAlign="center"
            fontSize="2.5rem"
            fontFamily="goudy"
            fontWeight="400"
          >
            TESTIMONIALS
          </Heading>{" "}
          <Flex pos="relative">
            <Icon
              pos="absolute"
              left="-1%"
              top="1.75rem"
              w="4.375rem"
              h="3.125rem"
              as={ImQuotesLeft}
              color="#DFBD69"
            />
            <TestimonialCarousel testimonial={testimonial} />{" "}
            <Icon
              mr="4"
              color="#DFBD69"
              pos="absolute"
              right="3.25rem"
              bottom="10rem"
              zIndex="10"
              w="4.375rem"
              h="3.125rem"
              as={ImQuotesRight}
            />
          </Flex>
        </Flex>
        <Flex
          w="50%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
        >
          <Text
            fontSize="2.5rem"
            fontFamily="goudy"
            textTransform="uppercase"
            pb="1.563rem"
          >
            SCHEDULE A VISIT
          </Text>
          <Container w="container.sm" align="center">
            {" "}
            <form>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" align="center" justify="center">
                  <Checkbox
                    ml="0.85rem"
                    value="yes"
                    fontFamily="veralaRound"
                    fontSize="1rem"
                    size="lg"
                  >
                    Book a visit
                  </Checkbox>
                </HStack>
              </FormControl>
              <Button
                mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                p="0.938rem"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                SUBMIT NOW
              </Button>
            </form>
          </Container>
        </Flex>
      </Flex>
      <DropDown />
    </>
  );
};

export default ServicedApartments;

const TestimonialCarousel = (props) => {
  const { testimonial } = props;
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Box
      position={"relative"}
      width={"full"}
      height={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings} style={{ display: "flex" }}>
        {testimonial.map((tes) => (
          <Flex
            align="center"
            justify="space-between"
            flexDirection="column"
            w="100%"
            mt="1.875rem"
            key={tes.name}
            height={"100%"}
            pr="5.313rem"
          >
            <Text
              fontSize="1rem"
              fontFamily="veralaRound"
              textAlign="center"
              pt="3.25rem"
              px="2.188rem"
            >
              {tes.text}
            </Text>
            <Flex
              w="100%"
              pt="1.563rem"
              align="center"
              justify="flex-start"
              direction="column"
            >
              <Text fontFamily="veralaRound" fontSize="1.25rem" pb="0.625rem">
                {tes.name}
              </Text>
              <Image
                w="17.75rem"
                h="6.25rem"
                objectFit="contain"
                src={tes.logo}
              />
            </Flex>
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

const furnishedAmenities = [
  {
    icon: television,
    title: "TELEVISION",
  },
  {
    icon: sofa,
    title: "5 SEATED SOFA",
  },
  {
    icon: REFRIGERATOR,
    title: "REFRIGERATOR",
  },
  {
    icon: studyTable,
    title: "STUDY TABLE",
  },
  {
    icon: airConditioning,
    title: "AIR CONDITIONING",
  },
  {
    icon: electricalPoints,
    title: "ELECTRICAL POINTS",
  },
  {
    icon: wallMirror,
    title: "WALL MIRROR",
  },
  {
    icon: windowBalcony,
    title: "WINDOW BALCONY",
  },
  {
    icon: comfortableBed,
    title: "COMFORTABLE BEDS",
  },
  {
    icon: cupboards,
    title: "SPACIOUS CUPBOARDS",
  },
  {
    icon: washrooms,
    title: "CLEAN WASHROOMS",
  },
  {
    icon: dinningTable,
    title: "6 SEATER DINING TABLE",
  },
];

const premiumHouseFirst = [
  {
    icon: wifi,
    title: "HIGH SPEED WIFI",
  },
  {
    icon: housekeeping,
    title: "HOUSEKEEPING SERVICE",
  },
  {
    icon: laundry,
    title: "LAUNDRY SERVICE",
  },
  {
    icon: cctv,
    title: "CCTV SURVEILLANCE",
  },
  {
    icon: meals,
    title: "DELICIOUS MEALS",
  },
];

const premiumHouseSecond = [
  {
    icon: garbage,
    title: "GARBAGE SCHUTE",
  },
  {
    icon: cable,
    title: "TV CABLE",
  },
  {
    icon: parking,
    title: "PARKING",
  },
  {
    icon: toiletries,
    title: "FREE TOILETRIES",
  },
];

const testimonial = [
  {
    text: "I’m glad I got a home with all the requirements of my family, my kids have school nearby and my work is just a few mins drive. It’s the most convenient location and one of the finest township.",
    name: "MR. K SHEKHAR",
    logo: herocoop,
  },
  {
    text: "I have never seen a well-designed township especially for sports lover. Arete Homes covers the needs of all age groups, fantastically developed sports arena, entertainment zones, meditation centre, fitness gym etc.",
    name: "MR. SADAGOPAN SATHISH ",
    logo: velammal,
  },
  {
    text: "At Arete Homes, I feel like I’m living in a resort. It’s wonderful and well designed for modern lifestyle.",
    name: "MR. MADHAN",
    logo: kobelco,
  },
  {
    text: "A best project in a beautiful environment but still at an affordable rate in North Chennai.",
    name: "MR. ANAND",
    logo: siemens,
  },
  {
    text: "This township is beyond excellence & combined this with the upcoming future developments this is the best investment destination iof Chennai. It’s already giving highest returns!",
    name: "MR. KUMAR",
    logo: lAndt,
  },
  {
    text: "We own a 2 BHK and its worth every penny and the construction quality is very good. The team is very helpful in securing home loan and throughout the home buying till the end.",
    name: "mr. mageshkumar",
    logo: adani,
  },
  {
    text: "i’m very happy to be living in integrate Smart Township, it’s like a dream! I have also invested in a property here, it gives the highest returns.",
    name: "mr. DK SINGH",
    logo: linde,
  },
  {
    text: "Hats off to the team for their dedication to the project as they made it with the best quality & beautifully! With malaysian MIVAN technology, they have delivered the best product as promised! I’m glad to be a part of Arete Homes.",
    name: "MR. K PANDIYAN",
    logo: yanmar,
  },
];
