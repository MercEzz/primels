import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState } from "react";

import { useRef } from "react";
import Slider from "react-slick";

const FifthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [slider, setSlider] = useState(null);
  const settings = {
    // className: "center",
    centerMode: true,
    autoplay:true,
    infinite: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      pb="1.875rem"
      px="1rem"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Text
        transform={isInView ? "none" : "translateY(-100px)"}
        opacity={isInView ? 1 : 0}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        mb="1.875rem"
      >
        A TOWNSHIP THAT DEFINES SMART LIVING
      </Text>
      <Box
        transform={isInView ? "scale(1)" : "scale(0.6)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s 1s"
        position={"relative"}
        height={"100%"}
        width={"full"}
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
        <Flex px="1rem" direction="column" textAlign="center" mb="1.875rem">
            <Heading h="6.5rem" fontSize="1.5rem" fontFamily="avenir" pt="0.938rem">
              ARETE MEDITATION RETREAT
            </Heading>
            <Image
              className="expandcar reveal"
              src="/images/arete-homes/arete meditation retreat 1.jpg"
              h="20rem"
              w="100%"
              boxShadow="lg"
            />
        </Flex>
        <Flex px="1rem" textAlign="center" direction="column">
            <Heading h="6.5rem" fontSize="1.5rem" fontFamily="avenir" pt="0.938rem">
              KIDS PLAY AREA
            </Heading>
            <Image
              className="expandcar reveal"
              src="/images/arete-homes/kids play area.jpeg"
              h="20rem"
              w="100%"
              boxShadow="lg"
            />
          </Flex>
          <Flex px="1rem" textAlign="center" direction="column" align="center" mb="1.875rem">
            <Heading h="6.5rem" fontSize="1.5rem" fontFamily="avenir" pt="0.938rem">
              GARDEN & JOGGING TRACK
            </Heading>
            <Image
              className="expandcar reveal"
              src="/images/arete-homes/garden and jogging track.jpg"
              h="20rem"
              w="100%"
              boxShadow="lg"
            />
            
          </Flex>
          <Flex px="1rem" textAlign="center" direction="column" align="center">
            <Heading h="6.5rem" fontSize="1.5rem" fontFamily="avenir" pt="0.938rem">
              OPEN EXERCISE AREA
            </Heading>
            <Image
              className="expandcar reveal"
              src="/images/arete-homes/open exercise area.jpg"
              h="20rem"
              w="100%"
              boxShadow="lg"
            />
          </Flex>
        </Slider>
      </Box>
    </Flex>
  );
};

export default FifthSec;
