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
      mt="100px"
      mb="25px"
      align="center"
      justify="center"
      px="24rem"
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
        >
          <Flex
            w="100%"
            align="flex-end"
            justifyContent="space-between"
            pb="15px"
          >
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="20px">
              NAME*
            </FormLabel>
            <Input w="350px" h="40px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
          <Flex w="100%" align="center" justify="space-between" pb="15px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="20px">
              EMAIL
            </FormLabel>
            <Input w="350px" h="40px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
          <Flex w="100%" align="center" justify="space-between" pb="15px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="20px">
              PHONE NO.*
            </FormLabel>
            <Input w="350px" h="40px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
          <Flex w="100%" align="center" justify="space-between" pb="15px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="20px">
              AREA OF INTEREST
            </FormLabel>
            <Input w="350px" h="40px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
          <Flex w="100%" align="center" justify="space-between" pb="15px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="20px">
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
        <Text fontSize="20px" fontFamily="veralaRound">
          <Icon as={BsUpload} ml="6" mr="10px" />
          Upload File
        </Text>
        <Button
          my="25px"
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
