import {
    Flex,
    Image,
    Text,
    Box,
    IconButton,
    Button,
    Heading,
    Center,
  } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useInView } from "framer-motion";
import { useRef } from "react";

import activityArea from "../arete-homes imgs/PGC-ACTIVITY AREA.jpeg";

const gymclubimgs = [
    {img:null},
    {img:null},
    {img:null},
    {img:null},
    {img:null},
    {img:null},
  ];

const Award=()=>{
    const [slider, setSlider] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
    });
  const settings = {
    // className: "center",
    centerMode: true,
    autoplay:true,
    infinite: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return(<>
    <Flex
    direction="column"
    h="44vh" overflow="hidden">
        <Text className="slidein-top revealOnce" textAlign="center" fontFamily="goudy" fontSize="2.5rem">
          PONNERI GYMKHANA CLUB
        </Text>
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
        <Flex className="fadein-2sdelay revealOnce">
        <Slider  {...settings} ref={(slider) => setSlider(slider)}>
          {gymclubimgs.map((prime,index) => (
            <Flex align="center">
              <Image
                key={"carousel "+index}
                height="15.437rem"
                pr="0.937rem"
                src={prime.img}
              />
            </Flex>
          ))}
        </Slider>
        <IconButton
            pos="absolute"
            left="0"
            mt="10%"
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            slider?.slickPrev();
          }}
        >
          <AiOutlineLeft color="#B88746" size="2.5rem" />
        </IconButton>
        <IconButton
            pos="absolute"
            right="0"
            mt="10%"
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            slider?.slickNext();
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
        </Flex>
    </Flex>
  </>);
}
export default Award;