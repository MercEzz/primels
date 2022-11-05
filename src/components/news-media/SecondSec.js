import { Flex, Heading, Text, Box, IconButton, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const SecondSec = () => {
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    infinite: false,
    autoplay: false,
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
      w="100%"
      h="100%"
      px="100px"
      py="50px"
      direction="column"
      align="center"
      justify="center"
    >
      <Text fontFamily="goudy" fontSize="40px" lineHeight="48px">
        PRESS RELEASE
      </Text>
      <Box
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        mt="50px"
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
            <Flex pr="20px">
              <Image
                key={prime}
                w="100%"
                h="300px"
                position="relative"
                objectPosition="center top"
                backgroundRepeat="no-repeat"
                objectFit="cover"
                src={prime.img}
              />
              <Flex py="25px" w="100%" align="center" justify="space-between">
                <Text fontFamily="avenir" fontWeight="bold" fontSize="24px">
                  {prime.title}
                </Text>
                <Text fontFamily="veralaRound" fontSize="20px">
                  {prime.date}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Box>
      {/* Left Icon */}
      <Flex w="100%" h="100%" align="center" justify="center">
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          // position="absolute"
          // bottom="0"
          // left="0"
          // transform={"translate(0%, -50%)"}
          mx="5px"
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
            setCurrentSlide(currentSlide--);
          }}
        >
          <AiOutlineLeft color="#B88746" size="30px" />
        </IconButton>
        {/* fill box */}
        01
        <ImgBar slide={currentSlide} />
        06
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
          mx="5px"
          zIndex={2}
          onClick={() => {
            slider?.slickNext();
            setCurrentSlide(currentSlide++);
          }}
        >
          <AiOutlineRight color="#B88746" size="30px" />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default SecondSec;

const ImgBar = ({ slide }) => {
  let barFillWidth = "0%";
  if (slide > 0) {
    barFillWidth = slide * 16.666 + "%";
  }
  console.log(barFillWidth);
  return (
    <Flex
      ml="1"
      mr="1"
      w="100px"
      h="5px"
      borderRadius="15px"
      align="center"
      justify="flex-start"
    >
      <Flex
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
    img: "/images/news-and-media/PRESS-RELEASE1.PNG",
  },
  {
    title: "DECCAN CHRONICLE",
    date: "18 SEPT 2022",
    img: "/images/news-and-media/PRESS-RELEASE2.PNG",
  },
  {
    title: "THE ECONOMIC TIMES",
    date: "26 JULY 2021",
    img: "/images/news-and-media/PRESS-RELEASE3.PNG",
  },
  {
    title: "THE ECONOMIC TIMES",
    date: "26 MARCH 2021",
    img: "/images/news-and-media/PRESS-RELEASE4.PNG",
  },
  {
    title: "NARDECO",
    date: "JULY 2021",
    img: "/images/news-and-media/PRESS-RELEASE5.PNG",
  },
  {
    title: "",
    date: "",
    img: "/images/news-and-media/PRESS-RELEASE6.PNG",
  },
];
