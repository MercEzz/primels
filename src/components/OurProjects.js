import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Image,
  Box,
  UnorderedList,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const MtnDvdr = motion(Divider);
const MtnFlx = motion(Flex);
const MtnHd = motion(Heading);
const MtnLI = motion(ListItem);
const MtnBtn = motion(Button);

const OurProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animateX = useAnimation();
  const animateY = useAnimation();
  const animateFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateX.start({
        x: 0,
        opacity: 1,
      });
      animateY.start({
        y: 0,
        opacity: 1,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateX, animateY, animateFade]);
  const [slider, setSlider] = useState(null);
  const settings = {
    // className: "center",
    centerMode: true,
    autoplay:true,
    infinite: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      minh="100%"
      direction="column"
      align="center"
      pt="1.875rem"
      pb="1.875rem"
      pl="100px"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Flex w="100%" h="100%" align="center" justify="center">
        <Flex w="10%">
          <MtnDvdr
            left="10%"
            initial={{ opacity: 0, x: 100 }}
            animate={animateX}
            transition={{ duration: 2, type: "just" }}
            w="100%"
            orientation="horizontal"
            border="3px solid"
            bgColor="#DFBD69"
            borderColor="#DFBD69"
            mr="10px"
          />
        </Flex>
        <Flex h="100%" align="center" justify="center">
          <Text fontFamily="goudy" fontSize="40px" textAlign="center">
            OUR PROJECTS
          </Text>
        </Flex>
        <Flex w="10%"></Flex>
      </Flex>
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
      <Flex w="100%" h="full" align="flex-start" justify="space-between">
        
        <Flex w="35%" pt="4.125rem" direction="column" justify="center" h="29.25rem">

          <MtnHd
            initial={{ x: -500 }}
            animate={animateX}
            transition={{ duration: 2, type: "just" }}
            pb="15px"
            fontFamily="avenir"
            fontSize="1.5rem"
            w="100%"
            textAlign="left"
          >
            ARETE HOMES
          </MtnHd>
          <UnorderedList>
            <MtnLI
              initial={{ opacity: 0 }}
              animate={animateX}
              transition={{ delay: 2, duration: 2, type: "just" }}
            >
              <Text pb="10px" fontFamily="veralaRound" fontSize="18px">
                6 Towers
              </Text>
            </MtnLI>
            <MtnLI
              initial={{ opacity: 0 }}
              animate={animateX}
              transition={{ delay: 4, duration: 2, type: "just" }}
            >
              <Text pb="10px" fontFamily="veralaRound" fontSize="18px">
                2, 2.5, 3 BHK Smart Residencies
              </Text>
            </MtnLI>
            <MtnLI
              initial={{ opacity: 0 }}
              animate={animateX}
              transition={{ delay: 6, duration: 2, type: "just" }}
            >
              <Text fontFamily="veralaRound" fontSize="18px">
                70% Open Space
              </Text>
            </MtnLI>
          </UnorderedList>
          <MtnBtn
            initial={{ opacity: 0 }}
            animate={animateX}
            transition={{ delay: 8, duration: 2, type: "just" }}
            mt="25px"
            w="160px"
            h="51px"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="16px"
            fontFamily="avenir"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            VIEW PROJECT
          </MtnBtn>
        </Flex>
        <MtnFlx
          initial={{ opacity: 0, y: -100 }}
          animate={animateY}
          transition={{ duration: 2, type: "just" }}
          h="100%"
          direction="column"
          align="center"
          justify="flex-end"
          pt="25px"
          px="1.563rem"
          pos="relative"
        >
          <Divider
            h="6.5rem"
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
          />{" "}
          <Box
            height="30px"
            width="30px"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </MtnFlx>
        <Flex
          w="100%"
          direction="column"
          align="flex-start"
          pt="25px"
          pr="50px"
        >
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateX}
            transition={{ duration: 1, type: "just" }}
          >
            <Text
              fontSize="14px"
              p="10px"
              color="white"
              fontFamily="avenir"
              bgGradient="linear(to-r, #B88746 ,#DFBD69)"
              textTransform="uppercase"
            >
              Ready to move in
            </Text>
          </MtnFlx>
          <MtnFlx
            initial={{ x: 1000 }}
            animate={animateX}
            transition={{ duration: 2, type: "just" }}
            pos="relative"
            w="100%"
            h="100%"
            pr="100px" 
          >
            <Image
              zIndex="3"
              // pos="absolute"
              w="100%"
              h="25.25rem"
              src="/images/pro1.png"
            />
            <Image
              pos="absolute"
              w="100%"
              h="21.875rem"
              pr="150px"
              left="100px"
              top="25px"
              opacity=".5"
              src="/images/pro1.png"
            />
          </MtnFlx>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OurProjects;
