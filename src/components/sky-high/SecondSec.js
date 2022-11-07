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

const MtnBx = motion(Box);
const MtnFlx = motion(Flex);

const SecondSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateX = useAnimation();
  const animateY = useAnimation();

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
    }
  });

  const [slider, setSlider] = useState(null);
  const settings = {
    draggable: false,
    infinite: true,
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
      p="100px"
    >
      <Heading
        fontFamily="goudy"
        fontSize="40px"
        fontWeight="400"
        textTransform="uppercase"
        textAlign="center"
        pb="50px"
      >
        An iconic dwell of <br />
        sky high residences and retail spaces
      </Heading>
      <Flex w="100%" h="100%" align="center" justify="center">
        <Flex w="100%" h="100%">
          <MtnBx
            initial={{ x: -100 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, type: "just" }}
            // position={"relative"}
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
              transform={"translateX(-50%)"}
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
              transform={"translate(-50%)"}
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
          </MtnBx>{" "}
        </Flex>

        <Flex h="100%" alignSelf="flex-start">
          <MtnFlx
            initial={{ opacity: 0, y: -100 }}
            animate={animateY}
            transition={{ duration: 2, type: "just" }}
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
          <Text mb="15px" fontFamily="veralaRound" fontSize="16px">
            THE ULTIMATE ADDRESS: Experience the breathtaking views of Chennai's
            stunning skyline from Arete Homes SKY HIGH Tower the top 20th floor.
            A new world of luxury has taken shape in North Chennai, Ponneri.{" "}
          </Text>
          <Flex
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="15px"
            mb="20px"
          >
            <Text fontFamily="avenir" fontSize="20px" fontWeight="bold">
              18 STOREY’S TALL
            </Text>
          </Flex>
          <Flex
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="15px"
            mb="20px"
          >
            <Text fontFamily="avenir" fontSize="20px" fontWeight="bold">
              2 TOWER LOBBIES
            </Text>
          </Flex>
          <Flex
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="15px"
            mb="20px"
          >
            <Text fontFamily="avenir" fontSize="20px" fontWeight="bold">
              4 ELEVATORS
            </Text>
          </Flex>
          <Flex w="271px" borderRadius="10px" bgColor="#DFBD69" p="15px">
            <Text fontFamily="avenir" fontSize="20px" fontWeight="bold">
              20 RETAIL SHOPS
            </Text>
          </Flex>
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
