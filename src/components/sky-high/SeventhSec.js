import { Box, Flex, Image, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Slider from "react-slick";

const MtnBx = motion(Box);

const SeventhSec = () => {
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
    <Flex w="100%" h="100vh">
      <MtnBx
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, type: "just" }}
        position={"relative"}
        height={"100%"}
        width={"100%"}
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
          {bannerImgs.map((prime) => (
            <Image
              key={prime.id}
              w="100%"
              height="100%"
              // position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              src={prime}
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
          mx="5px"
          mb="25px"
          zIndex={2}
          onClick={() => {
            slider?.slickNext();
          }}
          color="white"
          _hover={{ bgColor: "none" }}
        >
          <Text>02</Text>
        </IconButton>
      </MtnBx>{" "}
    </Flex>
  );
};

export default SeventhSec;

const bannerImgs = [
  "/images/sky-high/7TH SECTION 1.jpg",
  "/images/sky-high/7TH SECTION 2.jpg",
];
