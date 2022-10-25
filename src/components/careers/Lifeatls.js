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

const leftsettings = {
  dots: false,
  arrows: false,
  fade: false,
  centerMode: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  initialSlide: 0,
  slidesToShow: 2,
  // slidesToScroll: 1,
};

const rightsettings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  initialSlide: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MtnHead = motion(Heading);
const MotnTxt = motion(Text);
const MtnFlx = motion(Flex);

const images = [
  "/images/careers/career1.jpeg",
  "/images/careers/career2.JPG",
  "/images/careers/career3.jpeg",
  "/images/careers/career4.jpeg",
  "/images/careers/career5.jpeg",
  "/images/careers/career6.jpeg",
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
      h="100vh"
      direction="column"
      textAlign="center"
      px="100px"
      py="100px"
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
      <Flex w="100%" h="100%" bgColor="red" justify="center">
        <MtnFlx w="60%" h="100%">
          <Box
            position={"relative"}
            w="100%"
            h="100%"
            overflow={"hidden"}
            bgColor="blue"
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
            <Slider {...leftsettings} ref={(slider) => setSlider(slider)}>
              {images.map((card, index) => (
                <Image
                  key={index}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  src={card}
                />
              ))}
            </Slider>
          </Box>
        </MtnFlx>
        <MtnFlx
          w="100%"
          h="100%"
          direction="column"
          align="space-between"
          justify="space-between"
        >
          <Flex w="100%" align="flex-end" justify="flex-end">
            <Box
              position={"relative"}
              height={"300px"}
              width={"425px"}
              overflow={"hidden"}
              align="center"
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

              <Slider {...rightsettings} ref={(slider) => setSlider(slider)}>
                {images.map((card, index) => (
                  <Image
                    key={index}
                    height={"300px"}
                    width={"425px"}
                    src={card}
                  />
                ))}
              </Slider>
            </Box>
          </Flex>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="space-between"
            // px="50px"
            // py="100px"
          >
            {/* left Icon */}
            <IconButton
              aria-label="left-arrow"
              variant="outline"
              borderRadius="50%"
              w="50px"
              h="50px"
              p="1"
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
        </MtnFlx>
      </Flex>
    </Flex>
  );
};

export default Lifeatls;
