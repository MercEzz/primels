import React, { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  IconButton,
  Image,
  Button,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const NinethSec = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    draggable: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Flex
      w="100%"
      h="100%"
      px="25px"
      pt="100px"
      pb="50px"
      mb="50px"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <Text fontFamily="goudy" fontSize="40px" lineHeight="48px">
        SMART HOMES
      </Text>
      <Heading fontFamily="avenir" fontSize="34px" lineHeight="48px" py="25px">
        BUY . RENT . INVEST .
      </Heading>
      <Text fontFamily="veralaRound" fontSize="18px" pb="25px">
        Premium 2 BHK & 3 BHK serviced apartments in North Chennai, with
        customized experience, your way.
      </Text>

      <Box
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        pl="75px"
        pr="55px"
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
          {primeEvents.map((prime) => (
            <Flex pr="20px">
              <Image
                key={prime}
                w="100%"
                h="400px"
                position="relative"
                objectPosition="center center"
                backgroundRepeat="no-repeat"
                objectFit="cover"
                src={prime}
                boxShadow="md"
              />
            </Flex>
          ))}
        </Slider>
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          position="absolute"
          top="50%"
          left="0"
          h="50px"
          w="50px"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
          }}
        >
          <AiOutlineLeft color="#B88746" size="40px" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          position="absolute"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          right="0"
          top="50%"
          h="50px"
          w="50px"
          onClick={() => {
            slider?.slickNext();
            // setCurrentSlide(currentSlide++);
          }}
        >
          <AiOutlineRight color="#B88746" size="40px" />
        </IconButton>
      </Box>
      <Button
        w="146px"
        h="51px"
        mt="25px"
        fontSize="16px"
        fontFamily="avenir"
        bgGradient="linear(to-b, #B88746 ,#DFBD69)"
        color="white"
        _hover={{
          bgGradient: "linear(to-b, #DFBD69, #B88746)",
        }}
        _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
      >
        KNOW MORE
      </Button>
    </Flex>
  );
};

const primeEvents = [
  "/images/ARETE HOMES/SMART HOME1.jpg",
  "/images/ARETE HOMES/SMART HOME2.jpg",
  "/images/ARETE HOMES/SMART HOME3.jpg",
  "/images/ARETE HOMES/SMART HOME4.jpg",
  "/images/ARETE HOMES/SMART HOME5.jpg",
  "/images/ARETE HOMES/SMART HOME6.jpg",
  "/images/ARETE HOMES/SMART HOME7.jpg",
  "/images/ARETE HOMES/SMART HOME8.jpg",
  "/images/ARETE HOMES/SMART HOME9.jpg",
];

export default NinethSec;
