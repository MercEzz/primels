import {
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Container,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnHd = motion(Heading);
const MtnTxt = motion(Text);
const MtnContainer = motion(Container);

const GetInTouch = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateHd = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateHd.start({ opacity: 1, y: 0 });
    }
  }, [isInView, animateHd]);

  return (
    <Flex
      ref={ref}
      direction="column"
      w="100%"
      maxH="100vh"
      py="50px"
      align="center"
      justify="center"
      px="100px"
      pos="relative"
      bgColor="white"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <MtnHd
        initial={{ opacity: 0, y: -50 }}
        animate={animateHd}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="40px"
        lineHeight="60px"
      >
        GET IN TOUCH
      </MtnHd>
      <MtnTxt
        initial={{ opacity: 0 }}
        animate={animateHd}
        transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="16px"
        fontFamily="veralaRound"
        py="25px"
        textAlign="center"
      >
        Leave us your information and our team will get back to you.
      </MtnTxt>
      <MtnContainer
        initial={{ opacity: 0 }}
        animate={animateHd}
        transition={{ delay: 1, duration: 2, type: "just" }}
        minw="container.sm"
      >
        <FormControl align="center" justify="center">
          <VStack
            // initial={{ opacity: 0 }}
            // animate={animationFade}
            // transition={{ delay: 1, duration: 2, type: "just" }}
            align="flex-start"
          >
            <Flex
              w="100%"
              align="flex-end"
              justifyContent="space-between"
              pb="7px"
            >
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="16px">
                NAME*
              </FormLabel>
              <Input
                w="350px"
                h="40px"
                bgColor="#E5E5E5"
                borderRadius="none"
                fontFamily="avenir"
                fontSize="16px"
              />
            </Flex>
            <Flex w="100%" align="center" justify="space-between" pb="7px">
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="16px">
                EMAIL
              </FormLabel>
              <Input
                w="350px"
                h="40px"
                bgColor="#E5E5E5"
                borderRadius="none"
                fontFamily="avenir"
                fontSize="16px"
              />
            </Flex>
            <Flex w="100%" align="center" justify="space-between" pb="7px">
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="16px">
                PHONE NO.*
              </FormLabel>
              <Input
                w="350px"
                h="40px"
                bgColor="#E5E5E5"
                borderRadius="none"
                fontFamily="avenir"
                fontSize="16px"
              />
            </Flex>
            <Flex w="100%" align="center" justify="space-between">
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="16px">
                MESSAGE*
              </FormLabel>
              <Input
                w="350px"
                h="40px"
                bgColor="#E5E5E5"
                borderRadius="none"
                fontFamily="avenir"
                fontSize="16px"
              />
            </Flex>
          </VStack>
          <Button
            mt="25px"
            mb="50px"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="16px"
            fontFamily="avenir"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            SUBMIT NOW
          </Button>
        </FormControl>
      </MtnContainer>
    </Flex>
  );
};

export default GetInTouch;
