import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { BsUpload } from "react-icons/bs";

const MtnHead = motion(Heading);
const MtnText = motion(Text);
const MtnStk = motion(VStack);

const ResForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationHead = useAnimation();
  const animationFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationFade.start({ opacity: 1 });
    }
  }, [isInView, animationHead, animationFade]);

  return (
    <Flex
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      pt="50px"
      mb="25px"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <MtnHead
        initial={{ opacity: 0, y: -50 }}
        animate={animationHead}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="40px"
      >
        SEND YOUR RESUME
      </MtnHead>
      <MtnText
        initial={{ opacity: 0 }}
        animate={animationFade}
        transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="16px"
        fontFamily="veralaRound"
        py="25px"
        textAlign="center"
      >
        Work with us, send your resume and our team will get back to you.
      </MtnText>
      <Container minW="container.sm">
        <FormControl align="center" justify="center">
          <MtnStk
            w="90%"
            initial={{ opacity: 0 }}
            animate={animationFade}
            transition={{ delay: 1, duration: 2, type: "just" }}
            align="center"
          >
            <Flex
              w="100%"
              align="center"
              justifyContent="space-between"
              pb="15px"
            >
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="16px">
                NAME*
              </FormLabel>
              <Input w="350px" h="40px" bgColor="#E5E5E5" borderRadius="none" />
            </Flex>
            <Flex w="100%" align="center" justify="space-between" pb="7px">
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="16px">
                EMAIL
              </FormLabel>
              <Input w="350px" h="40px" bgColor="#E5E5E5" borderRadius="none" />
            </Flex>
            <Flex w="100%" align="center" justify="space-between" pb="7px">
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="16px">
                PHONE NO.*
              </FormLabel>
              <Input w="350px" h="40px" bgColor="#E5E5E5" borderRadius="none" />
            </Flex>
            <Flex w="100%" align="center" justify="space-between" pb="7px">
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="16px">
                AREA OF INTEREST
              </FormLabel>
              <Input w="350px" h="40px" bgColor="#E5E5E5" borderRadius="none" />
            </Flex>
            <Flex w="100%" align="center" justify="space-between" pb="7px">
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="16px">
                RESUME*
              </FormLabel>
              <Input
                p="1"
                type="file"
                w="350px"
                h="40px"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </Flex>
          </MtnStk>
          <Text ml="-10" fontSize="16px" fontFamily="veralaRound">
            <Icon as={BsUpload} mr="10px" />
            Upload File
          </Text>
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

export default ResForm;
