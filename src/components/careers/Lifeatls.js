import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const settingsL = {
  center: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

const settingsR = {
  center: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
};

const MtnHead = motion(Heading);
const MotnTxt = motion(Text);
const MtnBx = motion(Box);

const images = [
  "/images/careers/career1.jpeg",
  "/images/careers/career2.JPG",
  "/images/careers/career3.jpeg",
  "/images/careers/career4.jpeg",
  "/images/careers/career5.jpeg",
  "/images/careers/career6.jpeg",
  "/images/careers/career7.jpeg",
];

const Lifeatls = () => {
  const [slider, setSlider] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const animationHead = useAnimation();
  const animationText = useAnimation();
  const animationImg = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationText.start({ opacity: 1 });
      animationImg.start({ opacity: 1, x: 0 });
    }
  }, [isInView, animationHead, animationText, animationImg]);

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      textAlign="center"
      px="100px"
      pt="100px"
      mb="100px"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <MtnHead
        initial={{ opacity: 0, y: -100 }}
        animate={animationHead}
        transition={{ duration: 2, type: "just" }}
        fontSize="40px"
        fontFamily="goudy"
        fontWeight="400"
        pb="25px"
      >
        LIFE AT PRIME LIFESPACE
      </MtnHead>
      <MotnTxt
        initial={{ opacity: 0 }}
        animate={animationText}
        transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="16px"
        fontFamily="veralaRound"
        pb="25px"
      >
        We believe when everyone is moving forward together then success takes
        care of itself.
        <br /> Here is a glimpse of what’s it’s like to be a member of the Prime
        Lifespace Team.
      </MotnTxt>
      <Flex w="100%" h="100%">
        <MtnBx
          initial={{ opacity: 0, x: -100 }}
          animate={animationImg}
          transition={{ duration: 2, type: "just" }}
          position={"relative"}
          w="65%"
          h="100%"
          px="2"
          overflow={"hidden"}
        >
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
          <Slider {...settingsL}>
            {images.map((img, index) => (
              <Box
                key={index}
                height={"2xl"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${img})`}
              />
            ))}
          </Slider>
        </MtnBx>
        <MtnBx
          initial={{ opacity: 0, x: 100 }}
          animate={animationImg}
          transition={{ duration: 2, type: "just" }}
          position={"relative"}
          w="35%"
          h="100%"
          overflow={"hidden"}
          px="2"
        >
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
          <Flex w="100%" h="100%" direction="column">
            <Slider {...settingsR}>
              {images.map((img, index) => (
                <Box
                  key={index}
                  height={"lg"}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(${img})`}
                />
              ))}
            </Slider>
            <Flex w="100%" h="100%" align="flex-end" justify="space-between">
              {/* left Icon */}
              <IconButton
                aria-label="left-arrow"
                variant="outline"
                borderRadius="50%"
                w="50px"
                h="50px"
                p="3"
                ml="10"
                borderColor="#B88746"
                zIndex={2}
                onClick={() => slider?.slickPrev()}
              >
                <AiOutlineLeft color="#B88746" size="40px" />
              </IconButton>
              {/* Right Icon */}
              <IconButton
                aria-label="right-arrow"
                variant="outline"
                borderRadius="50%"
                w="50px"
                h="50px"
                p="3"
                zIndex={2}
                borderColor="#B88746"
                onClick={() => slider?.slickNext()}
              >
                <AiOutlineRight color="#B88746" size="40px" />
              </IconButton>
            </Flex>
          </Flex>
        </MtnBx>
      </Flex>
    </Flex>
  );
};

export default Lifeatls;
