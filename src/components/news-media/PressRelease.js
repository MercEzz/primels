import { Flex, Text, Box, IconButton, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import { useInView } from "framer-motion";
import press1 from "../news-and-media/PRESS-RELEASE1.PNG";
import press2 from "../news-and-media/PRESS-RELEASE2.PNG";
import press3 from "../news-and-media/PRESS-RELEASE3.PNG";
import press4 from "../news-and-media/PRESS-RELEASE4.PNG";
import press5 from "../news-and-media/PRESS-RELEASE5.PNG";
import press6 from "../news-and-media/PRESS-RELEASE6.png";

const SecondSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(33.333);
  const settings = {
    draggable: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    afterChange: () => {
      setCurrentSlide(currentSlide++);
    },
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="6.25rem"
      pt="5rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        lineHeight="3rem"
      >
        PRESS RELEASE
      </Text>
      <Box
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        mt="3.125rem"
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
          {pressRelease.map((prime) => (
            <Flex pr="1.25rem">
              <Image
                boxShadow="Dark lg"
                key={prime}
                w="100%"
                h="18.75rem"
                position="relative"
                objectPosition="center top"
                backgroundRepeat="no-repeat"
                objectFit="cover"
                src={prime.img}
                
              />
              <Flex py="1.562rem" w="100%" align="center" justify="space-between">
                <Text fontFamily="avenir" fontWeight="bold" fontSize="1.5rem">
                  {prime.title}
                </Text>
                <Text fontFamily="veralaRound" fontSize="1.25rem">
                  {prime.date}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Box>
      {/* Left Icon */}
      <Flex
        opacity={isInView ? "1" : "0"}
        transition="all 2s 2s"
        w="100%"
        h="100%"
        align="center"
        justify="center"
      >
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          // position="absolute"
          // bottom="0"
          // left="0"
          // transform={"translate(0%, -50%)"}
          mx="0.312rem"
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
            setCurrentSlide(currentSlide--);
          }}
        >
          <AiOutlineLeft color="#B88746" size="1.875rem" />
        </IconButton>
        {/* fill box */}
        <Text fontFamily="avenir"  fontWeight="bold" color="#B88746">01</Text>
        <ImgBar slide={currentSlide} />
        <Text fontFamily="avenir" fontWeight="bold" color="#B88746">03</Text>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          // position="absolute"
          // right={side}
          // top={top}
          // bottom="0"
          // right="0"
          // transform={"translate(0%, -50%)"}
          mx="0.312rem"
          zIndex={2}
          onClick={() => {

            slider?.slickNext();
            setCurrentSlide(currentSlide++);
          }}
        >
          <AiOutlineRight color="#B88746" size="1.875rem" />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default SecondSec;

const ImgBar = ({ slide }) => {
  let barFillWidth = "0%";
  if (slide > 0) {
    barFillWidth = slide + slide + "%";
  }

  return (
    <Flex
      ml="1"
      mr="1"
      w="6.25rem"
      h="0.312rem"
      borderRadius="0.937rem"
      align="center"
      justify="flex-start"
    >
      <Flex
        borderRadius="25px"
        color="black"
        bgColor="#B88746"
        style={{ width: barFillWidth }}
        p="1"
        justifyContent="center"
        transition="all .3s"
      ></Flex>
    </Flex>
  );
};

const pressRelease = [
  {
    title: "DECCAN CHRONICLE",
    date: "29 AUG 2022",
    img: press1,
  },
  {
    title: "DECCAN CHRONICLE",
    date: "18 SEPT 2022",
    img: press2,
  },
  {
    title: "THE ECONOMIC TIMES",
    date: "26 JULY 2021",
    img: press3,
  },
  {
    title: "THE ECONOMIC TIMES",
    date: "26 MARCH 2021",
    img: press4,
  },
  {
    title: "NARDECO",
    date: "JULY 2021",
    img: press5,
  },
  {
    title: "",
    date: "",
    img: press6,
  },
];
