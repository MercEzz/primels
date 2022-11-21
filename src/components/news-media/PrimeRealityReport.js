import {
  Flex,
  Text,
  Box,
  Divider,
  IconButton,
  Image,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import { useInView } from "framer-motion";
import feb2019 from "../news-and-media/PRIME-REALTY-REPORT/FEBRUARY 2019.PNG";
import april2019 from "../news-and-media/PRIME-REALTY-REPORT/APRIL 2019.PNG";
import may2019 from "../news-and-media/PRIME-REALTY-REPORT/MAY 2019.PNG";
import june2019 from "../news-and-media/PRIME-REALTY-REPORT/JUNE 2019.PNG";
import july2019 from "../news-and-media/PRIME-REALTY-REPORT/JULY 2019.PNG";
import spet2019 from "../news-and-media/PRIME-REALTY-REPORT/SEPTEMBER 2019.PNG";
import oct2019 from "../news-and-media/PRIME-REALTY-REPORT/OCTOBER 2019.PNG";
import nov2019 from "../news-and-media/PRIME-REALTY-REPORT/NOVEMBER 2019.PNG";
import dec2019 from "../news-and-media/PRIME-REALTY-REPORT/DECEMBER 2019.PNG";
const LastSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      pt="3.125rem"
      px="6.25rem"
      pb="6.25rem"
      align="center"
      justify="center"
      pos="relative"
      mb="5rem"
    >
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        lineHeight="3rem"
        pb="3.125rem"
      >
        PRIME REALTY REPORT
      </Text>
      <Flex w="100%" h="100%" align="center" pos="relative">
        <Flex w="50%" h="100%">
          <Box
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
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
              {primeReport.map((prime) => (
                <Image
                  key={prime.id}
                  w="100%"
                  height="25rem"
                  // position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  src={prime.img}
                />
              ))}
            </Slider>
          </Box>{" "}
          <Flex
            transform={isInView ? "translateY(0)" : "translateY(-50px)"}
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            h="100%"
            direction="column"
            justify="flex-start"
            align="center"
            px="1.562rem"
          >
            <Divider
              h="9.375rem"
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
        </Flex>
        <Flex w="50%" h="100%" direction="column" justify="flex-end">
          <Flex
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            w="100%"
            h="100%"
            justify="space-between"
          >
            <Flex direction="column" w="100%" h="100%">
              <Heading fontFamily="avenir" fontSize="2.125rem">
                OCTOBER 2022
              </Heading>
              <Text fontFamily="veralaRound" fontSize="1.25rem">
                Company Newsletter
              </Text>
              <Text fontFamily="veralaRound" fontSize="1.25rem">
                READ NOW
              </Text>
            </Flex>
            <Flex direction="column" textAlign="right" w="100%" h="100%">
              <Heading fontFamily="avenir" fontSize="1.25rem">
                PREVIOUS NEWSLETTER
              </Heading>
              <Heading fontFamily="avenir" fontSize="1.5rem">
                AUGUST 2022
              </Heading>
              <Text fontFamily="veralaRound" fontSize="1rem">
                READ NOW
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <IconButton
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          pos="absolute"
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          // position="absolute"
          bottom="0"
          right="5%"
          transform={"translateX(-50%)"}
          mx="0.312rem"
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
          }}
        >
          <AiOutlineLeft color="#B88746" size="1.875rem" />
        </IconButton>

        {/* Right Icon */}
        <IconButton
          opacity={isInView ? "1" : "0"}
          transition="all 2s 2s"
          pos="absolute"
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          // position="absolute"
          // right={side}
          // top={top}
          bottom="0"
          right="0"
          // transform={"translate(0%, -50%)"}
          mx="0.312rem"
          zIndex={2}
          onClick={() => {
            slider?.slickNext();
          }}
        >
          <AiOutlineRight color="#B88746" size="1.875rem" />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default LastSec;
const months = [
  {
    month: "OCTOBER 2022",
  },
  {
    month: "AUGUST 2022",
  },
  {
    month: "FEBRUARY 2022",
  },
  {
    month: "JANUARY 2022",
  },
  {
    month: "DECEMBER 2019",
  },
  {
    month: "NOVEMBER 2019",
  },
  {
    month: "OCTOBER 2019",
  },
  {
    month: "SEPTEMBER 2019",
  },
  {
    month: "JULY 2019",
  },
  {
    month: "JUNE 2019",
  },
  {
    month: "MAY 2019",
  },
  {
    month: "APRIL 2019",
  },
]
const primeReport = [
  {
    img: feb2019,
  },
  {
    img: april2019,
  },
  {
    img: may2019,
  },
  {
    img: june2019,
  },
  {
    img: july2019,
  },
  {
    img: spet2019,
  },
  {
    img: oct2019,
  },
  {
    img: nov2019,
  },
  {
    img: dec2019,
  },

  {
    img: "/images/news-and-media/PRIME-REALTY-REPORT/JANUARY NEWSLETTER 2020.PNG",
  },
  {
    img: "/images/news-and-media/PRIME-REALTY-REPORT/AUGUST 2022.PNG",
  },
];
