import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ResForm = () => {
  return (
    <Flex direction="column" w="100%" py="16">
      <Container minW="container.md" align="center" justify="center">
        <Heading fontFamily="goudy" fontWeight="400" fontSize="48px">
          SEND YOUR RESUME
        </Heading>
        <Text fontSize="20px" py="6" px="6rem" fontFamily="veralaRound">
          Work with us, send your resume and our team will get back to you.
        </Text>
        <FormControl>
          <VStack align="flex-start">
            <Flex
              w="100%"
              align="center"
              justify="space-between"
              px="3rem"
              py="3"
            >
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
                NAME*
              </FormLabel>
              <Input w="350px" bgColor="#E5E5E5" borderRadius="none" />
            </Flex>
            <Flex
              w="100%"
              align="center"
              justify="space-between"
              px="3rem"
              py="3"
            >
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
                EMAIL
              </FormLabel>
              <Input w="350px" bgColor="#E5E5E5" borderRadius="none" />
            </Flex>
            <Flex
              w="100%"
              align="center"
              justify="space-between"
              px="3rem"
              py="3"
            >
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
                PHONE NO.*
              </FormLabel>
              <Input w="350px" bgColor="#E5E5E5" borderRadius="none" />
            </Flex>
            <Flex
              w="100%"
              align="center"
              justify="space-between"
              px="3rem"
              py="3"
            >
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
                AREA OF INTEREST
              </FormLabel>
              <Input w="350px" bgColor="#E5E5E5" borderRadius="none" />
            </Flex>
            <Flex
              w="100%"
              align="center"
              justify="space-between"
              px="3rem"
              py="3"
            >
              <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
                RESUME*
              </FormLabel>
              <Input
                p="1"
                type="file"
                w="350px"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </Flex>
          </VStack>
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
      </Container>
    </Flex>
  );
};

export default ResForm;
