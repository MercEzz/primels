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

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
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
      minh="100%"
      direction="column"
      textAlign="center"
      px="100px"
      py="50px"
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
        px="150px"
        pb="25px"
      >
        We believe when everyone is moving forward together then success takes
        care of itself. Here is a glimpse of what’s it’s like to be a member of
        the Prime Lifespace Team.
      </MotnTxt>
      <Flex w="100%" justify="center">
        <MtnFlx>
          <Box
            position={"relative"}
            height={"500px"}
            width={"700px"}
            overflow={"hidden"}
            mr="25px"
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
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              {images.map((card, index) => (
                <Image height={"500px"} width={"700px"} src={card} />
              ))}
            </Slider>
          </Box>
        </MtnFlx>
        <MtnFlx
          w="100%"
          h="100%"
          direction="column"
          align="space-between"
          justify="center"
        >
          <Flex w="100%" align="flex-end" justify="center">
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

              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {images.map((card, index) => (
                  <Image height={"300px"} width={"425px"} src={card} />
                ))}
              </Slider>
            </Box>
          </Flex>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="space-between"
            px="50px"
            py="100px"
          >
            {/* left Icon */}
            <IconButton
              aria-label="left-arrow"
              variant="outline"
              borderRadius="50%"
              w="50px"
              h="50px"
              p="3"
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
