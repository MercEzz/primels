import {
  Flex,
  Image,
  Text,
  Box,
  IconButton,
  Button,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useInView } from "framer-motion";
import { useRef } from "react";
import pgclogo from "../arete-homes imgs/Asset 1.png";
// images
import gym from "../sky-high imgs/7 - gym.tif";
import golf from "../sky-high imgs/5 - Open Golf Putting Area.png";
import sports from "../sky-high imgs/2 - Multi Sports Arena.jpg";
import swimming from "../sky-high imgs/3 - Swimming Pool High Res.tif";
import banquet from "../sky-high imgs/PGC Banquet Hall.jpg";
import spa from "../sky-high imgs/22 - sauna_s.jpg";
import guest from "../sky-high imgs/20 - guest rooms.jpg";
import restaurant from "../sky-high imgs/18 - Restaurant High Res_1.jpg";
import bar from "../sky-high imgs/PGC Sports Bar.jpg";
import cafeteria from "../sky-high imgs/16 - Cafeteria High Res_1.jpg";
import terrace from "../sky-high imgs/TERRACE.jpg";
import theatre from "../sky-high imgs/PGC Theatre.jpg";

const SixthSec = () => {
  const [slider, setSlider] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    draggable: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pt="5rem"
      pb="3.125rem"
      px="1.562rem"
    >
      {" "}
      <Flex
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s "
        w="100%"
        align="center"
        justify="center"
        pb="1.875rem"
      >
        <Image src={pgclogo} h="2.5rem" w="2.5rem" mr="0.625rem" />
        <Text fontFamily="goudy" fontSize="2.5rem">
          <Text as="span" fontSize="1.5rem">
            PVT.
          </Text>{" "}
          PONNERI GYMKHANA CLUB
        </Text>
      </Flex>
      <Box
        transform={isInView ? "scale(1)" : "scale(0.6)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s 2s"
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        pl="4.687rem"
        pr="3.75rem"
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
          {gymclubimgs.map((prime) => (
            <Flex w="100%" align="center">
              <Image
                key={prime}
                w="100%"
                height="15.437rem"
                pr="0.937rem"
                position="relative"
                objectPosition="center"
                backgroundRepeat="no-repeat"
                objectFit="fill"
                src={prime.img}
              />
              <Heading
                w="96%"
                align="center"
                fontFamily="avenir"
                fontSize="1.25rem"
                pt="0.938rem"
              >
                {prime.title}
              </Heading>
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
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
      </Box>
      <Button
        opacity={isInView ? "1" : "0"}
        transition="all 2s 4s"
        w="10.875rem"
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
        EXPLORE MORE
      </Button>
    </Flex>
  );
};

export default SixthSec;

const gymclubimgs = [
  { img: gym, title: "GYM" },
  { img: golf, title: "GOLF PUTTING AREA" },
  { img: sports, title: "MULTI SPORTS ARENA" },
  { img: swimming, title: "SWIMMING POOL" },
  { img: banquet, title: "BANQUET HALL" },
  { img: spa, title: "SPA & SAUNA" },
  { img: guest, title: "GUEST ROOM" },
  { img: restaurant, title: "RESTAURANT" },
  { img: bar, title: "BAR" },
  { img: cafeteria, title: "CAFETERIA" },
  { img: terrace, title: "TERRACE" },
  { img: theatre, title: "THEATRE" },
];
