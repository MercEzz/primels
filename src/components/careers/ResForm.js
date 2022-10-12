import {
  Button,
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
      m="5rem auto"
      align="center"
      justify="center"
      px="20rem"
    >
      <MtnHead
        initial={{ opacity: 0, y: -50 }}
        animate={animationHead}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="48px"
      >
        SEND YOUR RESUME
      </MtnHead>
      <MtnText
        initial={{ opacity: 0 }}
        animate={animationFade}
        transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="20px"
        fontFamily="veralaRound"
        py="25px"
        textAlign="center"
      >
        Work with us, send your resume and our team will get back to you.
      </MtnText>
      <FormControl align="center" justify="center">
        <MtnStk
          initial={{ opacity: 0 }}
          animate={animationFade}
          transition={{ delay: 1, duration: 2, type: "just" }}
          align="flex-start"
          pt="20px"
        >
          <Flex w="100%" align="center" justify="space-between" pb="25px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
              NAME*
            </FormLabel>
            <Input w="397px" h="50px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
          <Flex w="100%" align="center" justify="space-between" pb="25px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
              EMAIL
            </FormLabel>
            <Input w="397px" h="50px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
          <Flex w="100%" align="center" justify="space-between" pb="25px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
              PHONE NO.*
            </FormLabel>
            <Input w="397px" h="50px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
          <Flex w="100%" align="center" justify="space-between" pb="25px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
              AREA OF INTEREST
            </FormLabel>
            <Input w="397px" h="50px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
          <Flex w="100%" align="center" justify="space-between" pb="25px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
              RESUME*
            </FormLabel>
            <Input
              p="2"
              type="file"
              w="397px"
              h="50px"
              bgColor="#E5E5E5"
              borderRadius="none"
            />
          </Flex>
        </MtnStk>
        <Text fontSize="20px" pb="50px" fontFamily="veralaRound">
          <Icon as={BsUpload} mr="14px" />
          Upload File
        </Text>
        <Button
          my="4"
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
    </Flex>
  );
};

export default ResForm;
