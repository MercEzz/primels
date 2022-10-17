import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
  Icon,
  Button,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { BsUpload } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

const ChannelForm = () => {
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        px="100px"
      >
        <FormControl align="center">
          <Flex w="100%" pb="25px">
            <Flex w="100%" direction="column" pr="45px">
              <HStack justify="space-between">
                <FormLabel
                  pl="10px"
                  fontSize="24px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  COMPANY/INDIVIDUAL NAME*
                </FormLabel>
                <Input />
              </HStack>
              <HStack>
                <FormLabel
                  pl="10px"
                  fontSize="24px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  NAME OF OWNER*
                </FormLabel>
                <Input />
              </HStack>
              <FormLabel
                pl="10px"
                fontSize="24px"
                fontFamily="avenir"
                lineHeight="29px"
                fontWeight="700"
              >
                ENTITY*
              </FormLabel>
              <Flex>
                <VStack align="flex-start">
                  <Checkbox>Individual</Checkbox>
                  <Checkbox>Proprietorship</Checkbox>
                  <Checkbox>Partnership</Checkbox>
                </VStack>
                <VStack align="flex-start">
                  <Checkbox>Private Ltd. Co.</Checkbox>
                  <Checkbox>Public Ltd. Co.</Checkbox>
                  <Checkbox>LLP</Checkbox>
                </VStack>
              </Flex>
            </Flex>
            <Flex w="100%" direction="column">
              <HStack>
                <FormLabel
                  pl="10px"
                  fontSize="24px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  YOUR FOCUS LOCATION/ AREA*
                </FormLabel>
                <Input />
              </HStack>
              <Heading>EXPERTISE*</Heading>
              <Flex w="100%">
                <VStack align="flex-start">
                  <Checkbox>Residential</Checkbox>
                  <Checkbox>Retail</Checkbox>
                  <Checkbox>Others</Checkbox>
                </VStack>
                <VStack align="flex-start">
                  <Checkbox>Commercial</Checkbox>
                  <Checkbox>Industrial Land</Checkbox>
                </VStack>
              </Flex>
              <Input />
            </Flex>
          </Flex>
          <Flex w="100%">
            <Flex w="100%" direction="column">
              <HStack align="flex-start">
                <FormLabel
                  pl="10px"
                  fontSize="24px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  OFFICE ADDRESS*
                </FormLabel>
                <Input />
              </HStack>
              <HStack align="flex-start">
                <FormLabel>MOBILE NO.*</FormLabel>
                <Input />
              </HStack>
              <HStack align="flex-start">
                <FormLabel>WEBSITE*</FormLabel>
                <Input />
              </HStack>
              <HStack align="flex-start">
                <FormLabel>EMAIL*</FormLabel>
                <Input />
              </HStack>
            </Flex>
            <Flex w="100%" direction="column">
              <HStack align="flex-start">
                <FormLabel>GST No.*</FormLabel>
                <Input />
              </HStack>
              <HStack align="flex-start">
                <FormLabel>RERA No.*</FormLabel>
                <Input />
              </HStack>
              <Heading fontSize="24px" fontFamily="avenir">
                AFFILIATION TO ANY BROKER ASSOCIATION*
              </Heading>
              <HStack fontFamily="veralaRound" fontSize="24px">
                <Checkbox h="40px" w="40px">
                  Yes
                </Checkbox>
                <Checkbox>No</Checkbox>
              </HStack>
            </Flex>
          </Flex>
          <HStack w="100%" pb="25px" mt="50px" px="349px" justify="center">
            <FormLabel
              pl="10px"
              fontSize="24px"
              fontFamily="avenir"
              lineHeight="29px"
              fontWeight="700"
            >
              IDENTITY DOCUMENT*
            </FormLabel>
            <Input
              type="file"
              pb="25px"
              w="353px"
              h="50px"
              p="2"
              bgColor="#E5E5E5"
              borderRadius="none"
            />
          </HStack>
          <Text fontSize="20px" fontFamily="veralaRound" pb="50px">
            <Icon as={BsUpload} mr="14px" />
            Upload File
          </Text>
          <Flex direction="column" w="100%" align="center" px="202px">
            <Heading
              fontSize="24px"
              fontFamily="avenir"
              lineHeight="29px"
              pb="25px"
            >
              AUTHORISED SIGNATORIES*
            </Heading>
            <Flex>
              <HStack mr="50px" mb="25px">
                <FormLabel
                  pl="10px"
                  fontSize="24px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  NAME*
                </FormLabel>
                <Input
                  w="240px"
                  h="70px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </HStack>
              <HStack mb="25px">
                <FormLabel
                  pl="10px"
                  fontSize="24px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  DESIGNATION*
                </FormLabel>
                <Input
                  w="240px"
                  h="70px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </HStack>
            </Flex>
            <Flex>
              <HStack mr="50px">
                <FormLabel
                  pl="10px"
                  fontSize="24px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  NAME*
                </FormLabel>
                <Input
                  w="240px"
                  h="70px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </HStack>
              <HStack>
                <FormLabel
                  pl="10px"
                  fontSize="24px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  DESIGNATION*
                </FormLabel>
                <Input
                  w="240px"
                  h="70px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </HStack>
            </Flex>
          </Flex>
          <Button
            my="50px"
            h="65px"
            w="245px"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="24px"
            fontFamily="avenir"
            px="36px"
            py="18px"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            SUBMIT NOW
          </Button>
        </FormControl>
      </Flex>
      <Flex
        align="center"
        px="316px"
        bgColor="#B88746"
        color="white"
        py="25px"
        fontSize="24px"
        fontFamily="avenir"
      >
        <Select
          w="100%"
          placeholder="SELECT PROJECT"
          textTransform="uppercase"
          variant="unstyled"
        >
          <option></option>
          <option></option>
        </Select>
        <Text w="100%" align="center" justify="center">
          <Icon as={AiOutlineDownload} />
          DOWNLOAD CP-BROCHURE
        </Text>
      </Flex>
    </>
  );
};

export default ChannelForm;
