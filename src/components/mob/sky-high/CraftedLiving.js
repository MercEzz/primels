import { Flex, Image, Text, Box, Divider, Heading } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState } from "react";
import { useEffect,useRef } from "react";
import Slider from "react-slick";
//import { useInView } from "react-intersection-observer";

const MtnTxt = motion(Text);
const MtnImg = motion(Image);
const MtnFlx = motion(Flex);
const MtnHd = motion(Heading);
const MtnDvd = motion(Divider);

const FourthSec = () => {
  /*const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
  });*/
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  
  const [slider, setSlider] = useState(null);
  const animateFade = useAnimation();
  const animateY = useAnimation();

  const settings = {
    draggable: true,
    infinite: true,
    autoplay: true,
    /*speed: 500,*/
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  useEffect(() => {
    if (inView) {
      animateFade.start({
        opacity: 1,
      });
      animateY.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animateFade, animateY]);

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="1rem"
      py="5rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={inView ? "none" : "translateY(-50px)"}
        opacity={inView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        textAlign="center"
        pb="1.875rem"
      >
        CRAFTED LIVING OF SKY HIGH LIFE AND AMENITIES
      </Text>
      <Flex w="100%" h="100%" direction="column">
          <Flex h="100%" direction="column" justify="center" alignSelf="center">
          <MtnHd
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 1.5, duration: 2, type: "just" }}
              fontFamily="avenir"
              fontSize="2.125rem"
              mb="0.9rem"
            >
              3 SKY DECKS
            </MtnHd>
            <MtnTxt
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 1.5, duration: 2, type: "just" }}
              fontFamily="veralaRound"
              fontSize="1rem"
              mb="1.5rem"
            >
              Enjoy the panoramic sky views from different levels of the tower.
            </MtnTxt>
            
          </Flex>{" "}
        </Flex>
        <Box
          className="fadein revealOnce"
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
          <Flex
            direction="column"
            w="100%"
            h="100%"
            transition="all 2s 2s"
          >
            <Heading
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              CAFE DECK
            </Heading>
            
            <Image
              w="100%"
              h="23rem"
              src="/images/sky-high/DECK1.jpg"
              boxShadow="dark-lg"
            />
          </Flex>
          <Flex
            direction="column"
            w="100%"
            h="100%"
            transition="all 2s 2s"
          >
            <Heading
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              KIDS AREA DECK
            </Heading>
            
            <Image
              w="100%"
              h="23rem"
              src="/images/sky-high/DECK2.jpg"
              boxShadow="dark-lg"
            />
          </Flex>
          <Flex
            direction="column"
            w="100%"
            h="100%"
            transition="all 2s 2s"
          >
            <Heading
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              LOUNGE DECK
            </Heading>
            <Image
              w="100%"
              h="23rem"
              src="/images/sky-high/DECK3.jpg"
              boxShadow="dark-lg"
            />
          </Flex>
          </Slider>
        </Box>
      <Flex mt="2rem" ref={ref} w="100%" h="100%" align="center" overflow="hidden" direction="column">
        <Flex h="100%" direction="column" alignSelf="center">
          <Heading textAlign="center" className="fadein revealOnce" fontFamily="avenir" fontSize="2.125rem" mb="0.9rem">
            SKY TERRACE AVENUE
          </Heading>
          <MtnTxt  textAlign="center" className="fadein revealOnce" fontFamily="veralaRound" fontSize="1rem">
            The perfect spot to rediscover a <br />
            forgotten time of the day: Golden <br />
            Sunrises.
          </MtnTxt>
        </Flex>
        <Flex w="100%" h="100%">
          <Image
            className="fadein reveal"
            w="100%"
            h="23rem"
            src="/images/sky-high/TERRACE.jpg"
            boxShadow="dark-lg"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FourthSec;
