import {
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const GetInTouch = () => {
  return (
    <Flex
      // ref={ref}
      direction="column"
      w="100%"
      mt="100px"
      align="center"
      justify="center"
      px="24rem"
    >
      <Heading
        // initial={{ opacity: 0, y: -50 }}
        // animate={animationHead}
        // transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="48px"
        lineHeight="60px"
      >
        GET IN TOUCH
      </Heading>
      <Text
        // initial={{ opacity: 0 }}
        // animate={animationFade}
        // transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="20px"
        fontFamily="veralaRound"
        py="25px"
        textAlign="center"
      >
        Leave us your information and our team will get back to you.
      </Text>
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
              MESSAGE*
            </FormLabel>
            <Input w="350px" h="40px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
        </VStack>
        <Button
          my="6"
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

export default GetInTouch;
