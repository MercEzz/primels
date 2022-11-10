import {
  Flex,
  Heading,
  IconButton,
  Box,
  Divider,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Slider from "react-slick";

const MtnFlx = motion(Flex);
const MtnBx = motion(Box);

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
        initial={{ y: -50, opacity: 0 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontSize="40px"
        fontWeight="400"
        textTransform="uppercase"
        textAlign="center"
        pb="50px"
      >
        A place of purity and excellence
      </MtnHead>
      <Flex px="100px" w="100%" h="100%" align="center" justify="center">
        <MtnFlx
          initial={{ opacity: 0 }}
          animate={animateFade}
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
            initial={{ opacity: 0, y: -50 }}
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
            mb="25px"
            fontFamily="veralaRound"
            fontSize="16px"
          >
            Arete homes, is the first largest smart integrated residential
            township in North Chennai, Ponneri, just Opposite Velammal
            International school. A Total of 20.25 Acres Land with phase I as a
            well planned gated community, comprising magnificent towers, rising
            with the elevated podium and many other unique amenities.
          </MtnTxt>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="25px">
            <MtnBx
              initial={{ opacity: 0 }}
              animate={animateFade}
              transition={{ delay: 3, duration: 2, type: "just" }}
            >
              <Text
                fontFamily="avenir"
                fontSize="24px"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                20.25 ACRES
              </Text>
              <Text fontFamily="veralaRound" fontSize={"16px"} color={"black"}>
                Largest Smart Township
              </Text>
            </MtnBx>
            <MtnBx
              initial={{ opacity: 0 }}
              animate={animateFade}
              transition={{ delay: 3, duration: 2, type: "just" }}
            >
              <Text
                fontFamily="avenir"
                fontSize="24px"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                PRIVATE CLUB
              </Text>
              <Text fontFamily="veralaRound" fontSize={"16px"} color={"black"}>
                PGC - 60,000 SQFT.
              </Text>
            </MtnBx>
            <MtnBx
              initial={{ opacity: 0 }}
              animate={animateFade}
              transition={{ delay: 4.5, duration: 2, type: "just" }}
            >
              <Text
                fontFamily="avenir"
                fontSize="24px"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                74% OPEN SPACE
              </Text>
              <Text fontFamily="veralaRound" fontSize={"16px"} color={"black"}>
                IGBC pre-certified Platinum Rated Township
              </Text>
            </MtnBx>
            <MtnBx
              initial={{ opacity: 0 }}
              animate={animateFade}
              transition={{ delay: 4.5, duration: 2, type: "just" }}
            >
              <Text
                fontFamily="avenir"
                fontSize="24px"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                100+
              </Text>
              <Text fontFamily="veralaRound" fontSize={"16px"} color={"black"}>
                Smart Amenities
              </Text>
            </MtnBx>
            <MtnBx
              initial={{ opacity: 0 }}
              animate={animateFade}
              transition={{ delay: 6, duration: 2, type: "just" }}
            >
              <Text
                fontFamily="avenir"
                fontSize="24px"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                2, 2.5, 3 BHK
              </Text>
              <Text fontFamily="veralaRound" fontSize={"16px"} color={"black"}>
                Smart Residences
              </Text>
            </MtnBx>
            <MtnBx
              initial={{ opacity: 0 }}
              animate={animateFade}
              transition={{ delay: 6, duration: 2, type: "just" }}
            >
              <Text
                fontFamily="avenir"
                fontSize="24px"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                A1 TO A6 TOWERS
              </Text>
              <Text fontFamily="veralaRound" fontSize={"16px"} color={"black"}>
                10 Floors
              </Text>
            </MtnBx>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SecondSec;

const introImgs = [
  "/images/arete-homes/INTRO1.jpg",
  "/images/arete-homes/INTRO2.png",
];

const stats = [
  {
    title: "20.25 ACRES",
    txt: "Largest Smart Township",
  },
  {
    title: "PRIVATE CLUB",
    txt: "PGC - 60,000 SQFT.",
  },
  {
    title: "74% OPEN SPACE",
    txt: "IGBC pre-certified Platinum Rated Township",
  },
  {
    title: "100+",
    txt: "Smart Amenities",
  },
  {
    title: "2, 2.5, 3 BHK",
    txt: "Smart Residences",
  },
  {
    title: "A1 TO A6 TOWERS",
    txt: "10 Floors",
  },
];
