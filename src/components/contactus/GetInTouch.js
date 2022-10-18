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
import React from "react";

const GetInTouch = () => {
  return (
    <Flex
      // ref={ref}
      direction="column"
      w="100%"
      pt="50px"
      align="center"
      justify="center"
      px="100px"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <Heading
        // initial={{ opacity: 0, y: -50 }}
        // animate={animationHead}
        // transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="40px"
        lineHeight="60px"
      >
        GET IN TOUCH
      </Heading>
      <Text
        // initial={{ opacity: 0 }}
        // animate={animationFade}
        // transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="16px"
        fontFamily="veralaRound"
        py="25px"
        textAlign="center"
      >
        Leave us your information and our team will get back to you.
      </Text>
      <Container minw="container.sm">
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

export default GetInTouch;
