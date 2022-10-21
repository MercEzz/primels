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

const GetInTouch2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateHd = useAnimation();
  const animateFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateHd.start({
        opacity: 1,
        y: 0,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateHd, animateFade]);

  return (
    <Flex
      direction="column"
      w="100%"
      h="100vh"
      // pt="50px"
      align="center"
      justify="center"
      // px="100px"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <Heading
        fontFamily="goudy"
        fontWeight="400"
        fontSize="40px"
        lineHeight="60px"
      >
        GET IN TOUCH
      </Heading>
      <Text
        // initial={{ opacity: 0 }}
        // animate={animateFade}
        // transition={{ delay: 1.5, duration: 2, type: "just" }}
        fontSize="16px"
        fontFamily="veralaRound"
        py="25px"
        textAlign="center"
      >
        Leave us your information and our team will get back to you.
      </Text>
      <Container
        // initial={{ opacity: 0 }}
        // animate={animateFade}
        // transition={{ delay: 3, duration: 2, type: "just" }}
        minw="container.sm"
      >
        <FormControl align="center" justify="center">
          <VStack align="flex-start">
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
              <Input w="350px" h="40px" bgColor="#E5E5E5" borderRadius="none" />
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
      </Container>
    </Flex>
  );
};

export default GetInTouch2;
