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
import React from "react";
import { BsUpload } from "react-icons/bs";

const ResForm = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      my="100px"
      align="center"
      justify="center"
      px="416px"
    >
      <Heading fontFamily="goudy" fontWeight="400" fontSize="48px">
        SEND YOUR RESUME
      </Heading>
      <Text
        fontSize="20px"
        fontFamily="veralaRound"
        py="25px"
        textAlign="center"
      >
        Work with us, send your resume and our team will get back to you.
      </Text>
      <FormControl align="center" justify="center">
        <VStack align="flex-start" pt="20px">
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
          <Flex w="100%" align="center" justify="space-between" pb="30px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
              PHONE NO.*
            </FormLabel>
            <Input w="397px" h="50px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
          <Flex w="100%" align="center" justify="space-between" pb="23px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
              AREA OF INTEREST
            </FormLabel>
            <Input w="397px" h="50px" bgColor="#E5E5E5" borderRadius="none" />
          </Flex>
          <Flex w="100%" align="center" justify="space-between" pb="27px">
            <FormLabel fontFamily="avenir" fontWeight="700" fontSize="24px">
              RESUME*
            </FormLabel>
            <Input
              p="1"
              type="file"
              w="397px"
              h="50px"
              bgColor="#E5E5E5"
              borderRadius="none"
            />
          </Flex>
        </VStack>
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
