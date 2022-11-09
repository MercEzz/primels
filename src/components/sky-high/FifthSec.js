import {
  Flex,
  Text,
  Box,
  Image,
  Divider,
  Heading,
  Button,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Slider from "react-slick";

const MtnTxt = motion(Text);
const MtnImg = motion(Image);
const MtnFlx = motion(Flex);

const FifthSec = () => {
  const [slider, setSlider] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const animateY = useAnimation();
  const animateX = useAnimation();

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
  }, [isInView, animateX, animateY]);

  const settings = {
    draggable: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
    >
      <MtnTxt
        initial={{ opacity: 0, y: -50 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        mb="50px"
        fontFamily="goudy"
        fontSize="40px"
      >
        LIVE LARGEST, SHOP LARGEST
      </MtnTxt>
      <Box
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
          {plazaImgs.map((prime) => (
            <MtnImg
              initial={{ x: 200, opacity: 0 }}
              animate={animateX}
              transition={{ delay: 1.5, duration: 2, type: "just" }}
              key={prime}
              w="100%"
              height="568px"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime}
            />
          ))}
        </Slider>
        <Flex
          pos="absolute"
          top="0"
          w="100%"
          left="50%"
          bgColor="rgba(255,255,255, 0.5)"
          h="100%"
        >
          <Flex
            w="40%"
            h="100%"
            left="0"
            top="0"
            pos="absolute"
            bgColor="white"
            align="flex-start"
            justify="center"
            pr="50px"
          >
            <MtnFlx
              initial={{ y: -100, opacity: 0 }}
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
                h="170px"
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
            <MtnFlx
              initial={{ x: -100, opacity: 0 }}
              animate={animateX}
              transition={{ delay: 1.5, duration: 2, type: "just" }}
              direction="column"
              alignSelf="center"
            >
              <Heading fontFamily="avenir" fontSize="34px" mb="15px">
                ARETE PLAZA
              </Heading>
              <Text fontFamily="veralaRound" fontSize="16px" mb="15px">
                An impeccable mix of 20 Retail Spaces such as Shopping,
                HyperMarket, Pharmacy, Fine Dining & Entertainment. Two
                enchanting tower lobbies, with a soothing water casacade in the
                front, positioned for your warm welcome.
              </Text>
              <Button
                w="174px"
                h="51px"
                fontSize="16px"
                fontFamily="avenir"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                EXPLORE MORE
              </Button>
            </MtnFlx>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FifthSec;

const plazaImgs = [
  "/images/sky-high/ARETE PLAZA1.jpg",
  "/images/sky-high/ARETE PLAZA2.jpg",
  "/images/sky-high/ARETE PLAZA3.jpg",
  "/images/sky-high/ARETE PLAZA4.jpg",
];
