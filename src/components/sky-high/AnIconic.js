import {
  Flex,
  Heading,
  IconButton,
  Box,
  Divider,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
//import { useInView } from "react-intersection-observer";
import React, { useEffect,useState } from "react";

import { useRef } from "react";
import Slider from "react-slick";

import intro1 from "../sky-high imgs/INTRO1.jpg";
import intro2 from "../sky-high imgs/INTRO2.jpg";

// icons
import first from "../sky-high imgs/1ST.svg";
import second from "../sky-high imgs/2ND.svg";
import third from "../sky-high imgs/3RD.svg";
import fourth from "../sky-high imgs/4TH.svg";

const MtnFlx = motion(Flex);
const MtnHead = motion(Heading);
const MtnTxt = motion(Text);

const SecondSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const animateX = useAnimation();
  const animateY = useAnimation();
  const animateFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateX.start({
        opacity: 1,
        x: 0,
      });
      animateY.start({
        opacity: 1,
        y: 0,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateX, animateY, animateFade]);

  const [slider, setSlider] = useState(null);
  const settings = {
    draggable: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pt="5rem"
      pb="3.125rem"
      px="6.25rem"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <MtnHead
        initial={{ y: -100, opacity: 0 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontSize="2.5rem"
        fontWeight="400"
        textTransform="uppercase"
        textAlign="center"
        pb="1.875rem"
      >
        An iconic dwell of <br />
        sky high residences and retail spaces
      </MtnHead>
      <Flex w="100%" h="100%" align="center" justify="center">
        <Flex
          transform={isInView ? "translateX(0)" : "translateX(-100px)"}
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          w="47.5%"
          h="100%"
        >
          <Box
            position={"relative"}
            height={"100%"}
            width={"100%"}
            overflow={"hidden"}
            boxShadow="dark-lg"
          >
            {/* CSS files for react-slick */}
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
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {introImgs.map((prime) => (
                <Box
                  key={prime.id}
                  w="100%"
                  height="29.25rem"
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  bgImage={prime}
                />
              ))}
            </Slider>
            <IconButton
              pos="absolute"
              aria-label="left-arrow"
              variant="outline"
              borderColor="#fff"
              borderWidth="2px"
              borderRadius="full"
              bottom="0"
              right="50%"
              // transform={"translateX(-50%)"}
              mx="0.3rem"
              mb="1.5rem"
              zIndex={2}
              onClick={() => {
                slider?.slickPrev();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <Text>01</Text>
            </IconButton>

            {/* Right Icon */}
            <IconButton
              pos="absolute"
              aria-label="right-arrow"
              borderRadius="full"
              variant="outline"
              borderColor="#fff"
              borderWidth="2px"
              bottom="0"
              left="50%"
              // transform={"translate(-50%)"}
              mx="0.3rem"
              mb="1.5rem"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <Text>02</Text>
            </IconButton>
          </Box>
        </Flex>

        <Flex
          transform={isInView ? "translateY(0)" : "translateY(-50px)"}
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          direction="column"
          align="center"
          px="1.5rem"
          alignSelf="flex-start"
        >
          <Divider
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
            h="2.75rem"
          />
          <Box
            height="1.875rem"
            width="1.875rem"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
          />
        </Flex>

        <Flex w="100%" h="100%" direction="column" alignSelf="center">
        <MtnTxt
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            mb="0.9rem"
            fontFamily="veralaRound"
            fontSize="1rem"
          >
            THE ULTIMATE ADDRESS: Experience the breathtaking views of Chennai's
            stunning skyline from Arete Homes SKY HIGH Tower the top 20th floor.
            A new world of luxury has taken shape in North Chennai, Ponneri.{" "}
          </MtnTxt>
          <Flex
            opacity={isInView ? "1" : "0"}
            transition="all 2s 4s"
            w="16.937rem"
            borderRadius="0.625rem"
            bgColor="#DFBD69"
            px="0.938rem"
            py="0.625rem"
            mb="1.2rem"
          >
            <HStack>
              {" "}
              <Image src={first} />
              <Text fontFamily="avenir" fontSize="1.2rem" fontWeight="bold">
                18 STOREY’S TALL
              </Text>
            </HStack>
          </Flex>
          <Flex
            opacity={isInView ? "1" : "0"}
            transition="all 2s 6s"
            w="16.937rem"
            borderRadius="0.625rem"
            bgColor="#DFBD69"
            p="0.938rem"
            py="0. 625rem"
            mb="1.2rem"
          >
            <HStack>
              {" "}
              <Image src={second} />
              <Text fontFamily="avenir" fontSize="1.2rem" fontWeight="bold">
                2 TOWER LOBBIES
              </Text>
            </HStack>
          </Flex>
          <Flex
            opacity={isInView ? "1" : "0"}
            transition="all 1s 8s"
            w="16.937rem"
            borderRadius="0.625rem"
            bgColor="#DFBD69"
            p="0.938rem"
            mb="1.2rem"
          >
            <HStack>
              <Image src={third} />
              <Text fontFamily="avenir" fontSize="1.2rem" fontWeight="bold">
                4 ELEVATORS
              </Text>
            </HStack>
          </Flex>
          <Flex
            opacity={isInView ? "1" : "0"}
            transition="all 1s 10s"
            w="16.937rem"
            borderRadius="0.625rem"
            bgColor="#DFBD69"
            px="0.938rem"
            py="0.625rem"
          >
            <HStack>
              <Image src={fourth} />
              <Text fontFamily="avenir" fontSize="1.2rem" fontWeight="bold">
                20 RETAIL SHOPS
              </Text>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SecondSec;

const introImgs = [intro1, intro2];
