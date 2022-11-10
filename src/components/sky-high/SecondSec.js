import {
  Flex,
  Heading,
  IconButton,
  Box,
  Divider,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Slider from "react-slick";

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
    infinite: false,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 5000,
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
      py="100px"
    >
      <MtnHead
        initial={{ y: -100, opacity: 0 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontSize="40px"
        fontWeight="400"
        textTransform="uppercase"
        textAlign="center"
        pb="50px"
      >
        An iconic dwell of <br />
        sky high residences and retail spaces
      </MtnHead>
      <Flex px="100px" w="100%" h="100%" align="center" justify="center">
        <MtnFlx
          initial={{ x: -100, opacity: 0 }}
          animate={animateX}
          transition={{ delay: 1.5, duration: 2, type: "just" }}
          w="100%"
          h="100%"
        >
          <Box
            position={"relative"}
            height={"568px"}
            width={"600px"}
            overflow={"hidden"}
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
                  height="568px"
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  bgImage={prime}
                  boxShadow="dark-lg"
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
              mx="5px"
              mb="25px"
              zIndex={2}
              onClick={() => {
                slider?.slickPrev();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              {/* <Text>01</Text> */}
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
              mx="5px"
              mb="25px"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              {/* <Text>02</Text> */}
            </IconButton>
          </Box>{" "}
        </MtnFlx>

        <Flex h="100%" alignSelf="flex-start">
          <MtnFlx
            initial={{ opacity: 0, y: -100 }}
            animate={animateY}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            direction="column"
            align="center"
            px="25px"
          >
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="84px"
            />{" "}
            <Box
              height="30px"
              width="30px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
            />
          </MtnFlx>
        </Flex>
        <Flex w="100%" h="100%" direction="column" alignSelf="center">
          <MtnTxt
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ delay: 1.5, duration: 2, type: "just" }}
            mb="15px"
            fontFamily="veralaRound"
            fontSize="16px"
          >
            THE ULTIMATE ADDRESS: Experience the breathtaking views of Chennai's
            stunning skyline from Arete Homes SKY HIGH Tower the top 20th floor.
            A new world of luxury has taken shape in North Chennai, Ponneri.{" "}
          </MtnTxt>
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ delay: 3, duration: 2, type: "just" }}
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="15px"
            mb="20px"
          >
            <Text fontFamily="avenir" fontSize="20px" fontWeight="bold">
              18 STOREY’S TALL
            </Text>
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ delay: 4.5, duration: 2, type: "just" }}
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="15px"
            mb="20px"
          >
            <Text fontFamily="avenir" fontSize="20px" fontWeight="bold">
              2 TOWER LOBBIES
            </Text>
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ delay: 6, duration: 2, type: "just" }}
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="15px"
            mb="20px"
          >
            <Text fontFamily="avenir" fontSize="20px" fontWeight="bold">
              4 ELEVATORS
            </Text>
          </MtnFlx>
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateFade}
            transition={{ delay: 7.5, duration: 2, type: "just" }}
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="15px"
          >
            <Text fontFamily="avenir" fontSize="20px" fontWeight="bold">
              20 RETAIL SHOPS
            </Text>
          </MtnFlx>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SecondSec;

const introImgs = [
  "/images/sky-high/INTRO1.jpg",
  "/images/sky-high/INTRO2.jpg",
];
