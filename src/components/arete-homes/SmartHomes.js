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
import { useRef } from "react";
import { useInView } from "framer-motion";

const NinethSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
      ref={ref}
      w="100%"
      h="100%"
      px="1.562rem"
      pt="6.25rem"
      pb="3.125rem"
      mb="3.125rem"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        lineHeight="3rem"
      >
        SMART HOMES
      </Text>
      <Heading
        transform={isInView ? "translateY(0)" : "translateY(50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="2.125rem"
        lineHeight="3rem"
        py="1.562rem"
      >
        BUY . RENT . INVEST .
      </Heading>
      <Text fontFamily="veralaRound" fontSize="1.125rem" pb="1.562rem">
        Premium 2 BHK & 3 BHK serviced apartments in North Chennai, with
        customized experience, your way.
      </Text>

      <Box
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        pl="4.687rem"
        pr="3.437rem"
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
            <Flex pr="1.25rem">
              <Image
                key={prime}
                w="100%"
                h="25rem"
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
          h="3.125rem"
          w="3.125rem"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
          }}
        >
          <AiOutlineLeft color="#B88746" size="2.5rem" />
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
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            slider?.slickNext();
            // setCurrentSlide(currentSlide++);
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
      </Box>
      <Button
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        w="9.125rem"
        h="3.187rem"
        mt="1.562rem"
        fontSize="1rem"
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
  "/images/arete-homes/SMART HOME1.jpg",
  "/images/arete-homes/SMART HOME2.jpg",
  "/images/arete-homes/SMART HOME3.jpg",
  "/images/arete-homes/SMART HOME4.jpg",
  "/images/arete-homes/SMART HOME5.jpg",
  "/images/arete-homes/SMART HOME6.jpg",
  "/images/arete-homes/SMART HOME7.jpg",
  "/images/arete-homes/SMART HOME8.jpg",
  "/images/arete-homes/SMART HOME9.jpeg",
];

export default NinethSec;
