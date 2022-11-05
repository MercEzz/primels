import React, { useState } from "react";
import { Flex, Heading, Text, Box, IconButton, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ThirdSec = () => {
  const [slider, setSlider] = useState(null);
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
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
        PRIME EVENTS
      </Text>
      <Heading fontFamily="avenir" fontSize="34px" lineHeight="48px" py="25px">
        SKY HIGH TOWER LAUNCH AT HYATT REGENCY, CHENNAI{" "}
      </Heading>
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
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          // left={side}
          // top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <AiOutlineLeft />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          // right={side}
          // top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <AiOutlineRight />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {primeEvents2.map((prime) => (
            <Image
              w={prime.width}
              height="468px"
              pr="20px"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime.img}
            />
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

const primeEvents = [
  "/images/news-and-media/EVENTS1.jpeg",
  "/images/news-and-media/EVENTS2.jpeg",
  "/images/news-and-media/EVENTS3.jpeg",
  "/images/news-and-media/EVENTS4.jpeg",
  "/images/news-and-media/EVENTS5.jpeg",
  "/images/news-and-media/EVENTS6.jpeg",
  "/images/news-and-media/EVENTS7.jpeg",
  "/images/news-and-media/EVENTS8.jpeg",
  "/images/news-and-media/EVENTS9.jpeg",
  "/images/news-and-media/EVENTS10.jpeg",
];

const primeEvents2 = [
  {
    width: "520px",
    img: "/images/news-and-media/EVENTS1.jpeg",
  },
  {
    width: "700px",
    img: "/images/news-and-media/EVENTS2.jpeg",
  },
  {
    width: "520px",
    img: "/images/news-and-media/EVENTS3.jpeg",
  },
  {
    width: "700px",
    img: "/images/news-and-media/EVENTS4.jpeg",
  },
  {
    width: "520px",
    img: "/images/news-and-media/EVENTS5.jpeg",
  },
  {
    width: "700px",
    img: "/images/news-and-media/EVENTS6.jpeg",
  },
  {
    width: "520px",
    img: "/images/news-and-media/EVENTS7.jpeg",
  },
  {
    width: "700px",
    img: "/images/news-and-media/EVENTS8.jpeg",
  },
  {
    width: "520px",
    img: "/images/news-and-media/EVENTS9.jpeg",
  },
  {
    width: "700px",
    img: "/images/news-and-media/EVENTS10.jpeg",
  },
];

export default ThirdSec;
