import {
  Flex,
  Text,
  Box,
  useBreakpointValue,
  IconButton,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const FifthSec = () => {
  const settings = {
    draggable: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const settings2 = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slider, setSlider] = useState(null);

  // const top = useBreakpointValue({ base: "90%", md: "50%" });
  // const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Flex
      w="100%"
      h="100%"
      px="25px"
      py="50px"
      direction="column"
      align="center"
      justify="center"
    >
      <Text fontFamily="goudy" fontSize="40px" lineHeight="48px">
        LATEST NEWS
      </Text>
      <Box
        position={"relative"}
        height={"400px"}
        width={"full"}
        overflow={"hidden"}
        my="50px"
        pl="75px"
        pr="50px"
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
          variant="outline"
          position="absolute"
          borderRadius="50%"
          // left={side}
          // top={top}
          left="0"
          top="50%"
          // transform={"translate(0%, -50%)"}
          zIndex={2}
          h="50px"
          w="50px"
          borderColor="#B88746"
          _hover={{ bgColor: "none" }}
          onClick={() => slider?.slickPrev()}
        >
          <AiOutlineLeft size="30px" color="#B88746" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="outline"
          position="absolute"
          borderRadius="50%"
          // right={side}
          // top={top}
          right="0"
          top="50%"
          // transform={"translate(0%, -50%)"}
          zIndex={2}
          h="50px"
          w="50px"
          borderColor="#B88746"
          _hover={{ bgColor: "none" }}
          onClick={() => slider?.slickNext()}
        >
          <AiOutlineRight size="30px" color="#B88746" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {primeReport.map((prime, index) => (
            <Box
              key={index}
              w="100%"
              pr="25px"
              my="50px"
              height={"400px"}
              position="relative"
            >
              <Image
                w="100%"
                h="400px"
                src={prime.img}
                // objectFit="contain"
                objectFit="cover"
                objectPosition="center top"
              />
              <Flex
                spacing={6}
                w={"90%"}
                h="150px"
                position="absolute"
                right="0"
                bottom="2%"
                mr="15px"
                bgGradient="linear(to-b, #B88746, #DFBD69)"
                transform="translate(0, -50%)"
              >
                <Text
                  fontSize={{ base: "md", lg: "20px" }}
                  fontWeight="bold"
                  fontFamily="avenir"
                  color="white"
                  p="25px"
                >
                  {prime.text}
                </Text>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};
export default FifthSec;

const primeReport = [
  {
    img: "/images/news-and-media/NEWSLETTER.png",
    text: "INVESTING IN NORTH CHENNAI : WHAT YOU DIDN’T KNOW",
  },
  {
    img: "/images/news-and-media/NEWS2.jpg",
    text: "NORTH CHENNAI : YOUR BEST BET",
  },
  {
    img: "/images/news-and-media/NEWSLETTER.png",
    text: "CHENNAI PERIPHERAL RING ROAD WORK GETS A BOOST",
  },
  {
    img: "/images/news-and-media/NEWS4.jpg",
    text: "NORTH CHENNAI - TURNING TO WORLD CLASS ECONOMIC ZONE",
  },
  {
    img: "/images/news-and-media/NEWSLETTER_.png",
    text: "Tata Projects wins Rs 2,100 cr Chennai Peripheral Ring Road Project phase-1",
  },
  {
    img: "/images/news-and-media/NEWSLETTER.png",
    text: "RS. 13,314 CRORE INFRASTRUCTURE UPGRADE FOR PONNERI",
  },
  {
    img: "/images/news-and-media/NEWS7.jpg",
    text: "PONNERI TO DEVELOP AS A MEGA ENGINEERING HUB",
  },
  {
    img: "/images/news-and-media/NEWS8.jpg",
    text: "PONNERI - THE ULTIMATE REAL ESTATE DESTINATION OF NORTH CHENNAI",
  },
  {
    img: "/images/news-and-media/NEWS9.jpg",
    text: "INDUSTRIAL PARKS ON AN UPSWING",
  },
  {
    img: "/images/news-and-media/NEWS10.jpg",
    text: "POURING INVESTMENTS IN NORTH CHENNAI",
  },
];
