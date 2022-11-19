import React, { useState, useRef } from "react";
import { Flex, Heading, Text, Box, IconButton, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useInView } from "framer-motion";
import event1 from "../news-and-media/EVENTS1.jpeg";
import event2 from "../news-and-media/EVENTS2.jpeg";
import event3 from "../news-and-media/EVENTS3.jpeg";
import event4 from "../news-and-media/EVENTS4.jpeg";
import event5 from "../news-and-media/EVENTS5.jpeg";
import event6 from "../news-and-media/EVENTS6.jpeg";
import event7 from "../news-and-media/EVENTS7.jpeg";
import event8 from "../news-and-media/EVENTS8.jpeg";
import event9 from "../news-and-media/EVENTS9.jpeg";
import event10 from "../news-and-media/EVENTS10.jpeg";

const ThirdSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    draggable: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: () => {
      setCurrentSlide(currentSlide++);
    },
  };

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      pl="6.25rem"
      pr="4.688rem"
      py="3.125rem"
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
        PRIME EVENTS
      </Text>
      <Heading
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="2.125rem"
        lineHeight="3rem"
        py="1.563rem"
      >
        SKY HIGH TOWER LAUNCH AT HYATT REGENCY, CHENNAI{" "}
      </Heading>
      <Box
        opacity={isInView ? "1" : "0"}
        transition="all 2s 2s"
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
          {primeEvents2.map((prime) => (
            <Image
              key={prime.id}
              w={prime.width}
              height="29.25rem"
              pr="1.25rem"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime.img}
            />
          ))}
        </Slider>
      </Box>
      {/* Left Icon */}
      <Flex
        opacity={isInView ? "1" : "0"}
        transition="all 2s 3s"
        pt="1.563rem"
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
          mx="0.313rem"
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
            setCurrentSlide(currentSlide--);
          }}
        >
          <AiOutlineLeft color="#B88746" size="1.875rem" />
        </IconButton>
        {/* fill box */}
        01
        <ImgBar slide={currentSlide} />
        10
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
          mx="0.3rem"
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

const ImgBar = ({ slide }) => {
  let barFillWidth = "0%";
  if (slide > 0) {
    barFillWidth = slide * 10 + "%";
  }
  return (
    <Flex
      ml="1"
      mr="1"
      w="6.25rem"
      h="0.3rem"
      borderRadius="0.9rem"
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
  { id: 1, width: "520px", img: event1 },
  { id: 2, width: "700px", img: event2 },
  { id: 3, width: "520px", img: event3 },
  { id: 4, width: "700px", img: event4 },
  { id: 5, width: "520px", img: event5 },
  { id: 6, width: "700px", img: event6 },
  { id: 7, width: "520px", img: event7 },
  { id: 8, width: "700px", img: event8 },
  { id: 9, width: "520px", img: event9 },
  { id: 10, width: "700px", img: event10 },
];

export default ThirdSec;
