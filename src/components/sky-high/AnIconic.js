import {
  Flex,
  Heading,
  IconButton,
  Box,
  Divider,
  Text,
} from "@chakra-ui/react";
// import { useInView } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";

import { useRef } from "react";
import Slider from "react-slick";

import intro1 from "../sky-high imgs/INTRO1.jpg";
import intro2 from "../sky-high imgs/INTRO2.jpg";

const SecondSec = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
  });

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
      py="6.25rem"
    >
      <Heading
        transform={inView ? "translateY(0)" : "translateY(-50px)"}
        opacity={inView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        fontWeight="400"
        textTransform="uppercase"
        textAlign="center"
        pb="1.5rem"
      >
        An iconic dwell of <br />
        sky high residences and retail spaces
      </Heading>
      <Flex px="100px" w="100%" h="100%" align="center" justify="center">
        <Flex
          transform={inView ? "translateY(0)" : "translateY(-50px)"}
          opacity={inView ? "1" : "0"}
          transition="all 2s"
          w="100%"
          h="100%"
        >
          <Box
            transform={inView ? "translateX(0)" : "translateX(-100px)"}
            opacity={inView ? "1" : "0"}
            transition="all 2s 2s"
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
                  w="46rem"
                  height="35.5rem"
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
              mx="0.3rem"
              mb="1.5rem"
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
              mx="0.3rem"
              mb="1.5rem"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              {/* <Text>02</Text> */}
            </IconButton>
          </Box>
        </Flex>

        <Flex h="100%" alignSelf="flex-start">
          <Flex
            transform={inView ? "translateY(0)" : "translateY(-50px)"}
            opacity={inView ? "1" : "0"}
            transition="all 2s 2s"
            direction="column"
            align="center"
            px="1.5rem"
          >
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="84px"
            />
            <Box
              height="30px"
              width="30px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
            />
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" direction="column" alignSelf="center">
          <Text
            opacity={inView ? "1" : "0"}
            transition="all 2s 2s"
            mb="0.9rem"
            fontFamily="veralaRound"
            fontSize="1rem"
          >
            THE ULTIMATE ADDRESS: Experience the breathtaking views of Chennai's
            stunning skyline from Arete Homes SKY HIGH Tower the top 20th floor.
            A new world of luxury has taken shape in North Chennai, Ponneri.{" "}
          </Text>
          <Flex
            opacity={inView ? "1" : "0"}
            transition="all 2s 4s"
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="0.9rem"
            mb="1.2rem"
          >
            <Text fontFamily="avenir" fontSize="1.2rem" fontWeight="bold">
              18 STOREY’S TALL
            </Text>
          </Flex>
          <Flex
            opacity={inView ? "1" : "0"}
            transition="all 2s 6s"
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="0.9rem"
            mb="1.2rem"
          >
            <Text fontFamily="avenir" fontSize="1.2rem" fontWeight="bold">
              2 TOWER LOBBIES
            </Text>
          </Flex>
          <Flex
            opacity={inView ? "1" : "0"}
            transition="all 2s 8s"
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="0.9rem"
            mb="1.2rem"
          >
            <Text fontFamily="avenir" fontSize="1.2rem" fontWeight="bold">
              4 ELEVATORS
            </Text>
          </Flex>
          <Flex
            opacity={inView ? "1" : "0"}
            transition="all 2s 10s"
            w="271px"
            borderRadius="10px"
            bgColor="#DFBD69"
            p="0.9rem"
          >
            <Text fontFamily="avenir" fontSize="1.2rem" fontWeight="bold">
              20 RETAIL SHOPS
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SecondSec;

const introImgs = [intro1, intro2];
