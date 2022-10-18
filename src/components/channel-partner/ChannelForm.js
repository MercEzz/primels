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
            {/* top - left */}
            <Flex w="100%" direction="column" pr="45px">
              <Flex justify="space-between" mb="25px">
                <FormLabel
                  fontSize="20px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  fontWeight="700"
                >
                  COMPANY/INDIVIDUAL NAME*
                </FormLabel>
                <Input
                  w="340px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              <Flex justify="space-between" mb="25px">
                <FormLabel
                  pt="2"
                  fontSize="20px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  NAME OF OWNER*
                </FormLabel>
                <Input
                  w="340px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              {/* left-bottom */}
              <FormLabel
                fontSize="20px"
                fontFamily="avenir"
                lineHeight="29px"
                fontWeight="700"
              >
                ENTITY*
              </FormLabel>
              <Flex
                fontSize="20px"
                fontFamily="veralaRound"
                mt="15px"
                justify="space-between"
              >
                <VStack align="flex-start">
                  <Checkbox>Individual</Checkbox>
                  <Checkbox>Proprietorship</Checkbox>
                  <Checkbox>Partnership</Checkbox>
                </VStack>
                <VStack align="flex-start" pr="10">
                  <Checkbox>Private Ltd. Co.</Checkbox>
                  <Checkbox>Public Ltd. Co.</Checkbox>
                  <Checkbox>LLP</Checkbox>
                </VStack>
              </Flex>
              <Flex w="100%" direction="column" bgColor="red" mr="45px">
                <Flex align="center" justify="space-between" mb="25px">
                  <FormLabel
                    pt="2"
                    fontSize="20px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    OFFICE ADDRESS*
                  </FormLabel>
                  <Input
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex align="center" justify="space-between" mb="25px">
                  <FormLabel
                    pt="2"
                    fontSize="20px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    MOBILE NO.*
                  </FormLabel>
                  <Input
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex align="center" justify="space-between" mb="25px">
                  <FormLabel
                    pt="2"
                    fontSize="20px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    WEBSITE*
                  </FormLabel>
                  <Input
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex align="center" justify="space-between" mb="25px">
                  <FormLabel
                    pt="2"
                    fontSize="20px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    EMAIL*
                  </FormLabel>
                  <Input
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </Flex>
            </Flex>
            {/* top-right */}
            <Flex w="100%" direction="column">
              <Flex align="center" justify="space-between" mb="25px">
                <FormLabel
                  mr="16"
                  fontSize="20px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  YOUR FOCUS LOCATION/ AREA*
                </FormLabel>
                <Input
                  w="340px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              <Heading
                fontSize="20px"
                fontFamily="avenir"
                lineHeight="24px"
                textAlign="left"
              >
                EXPERTISE*
              </Heading>
              <Flex
                w="100%"
                fontSize="20px"
                fontFamily="veralaRound"
                align="center"
                justify="space-between"
                mt="15px"
                mb="15px"
              >
                <VStack align="flex-start">
                  <Checkbox>Residential</Checkbox>
                  <Checkbox>Retail</Checkbox>
                  <Checkbox>Others</Checkbox>
                </VStack>
                <VStack align="flex-start" pr="10">
                  <Checkbox>Commercial</Checkbox>
                  <Checkbox>Industrial Land</Checkbox>
                </VStack>
              </Flex>
              <Input w="580px" h="50px" bgColor="#E5E5E5" borderRadius="none" />
              <Flex w="100%" direction="column">
                <Flex align="center" justify="space-between" pb="25px">
                  <FormLabel
                    fontSize="20px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    GST No.*
                  </FormLabel>
                  <Input
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex align="center" justify="space-between" pb="25px">
                  <FormLabel
                    pt="2"
                    fontSize="20px"
                    fontFamily="avenir"
                    lineHeight="29px"
                    fontWeight="700"
                  >
                    RERA No.*
                  </FormLabel>
                  <Input
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Heading
                  fontSize="20px"
                  mt="10px"
                  fontFamily="avenir"
                  textAlign="left"
                  pb="25px"
                >
                  AFFILIATION TO ANY BROKER ASSOCIATION*
                </Heading>
                <Flex
                  justify="space-between"
                  fontFamily="veralaRound"
                  fontSize="20px"
                  pr="8rem"
                >
                  <Checkbox>Yes</Checkbox>
                  <Checkbox>No</Checkbox>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          {/* left-bottom */}

          <HStack w="100%" pb="25px" mt="50px" px="349px" justify="center">
            <FormLabel
              pl="10px"
              fontSize="20px"
              fontFamily="avenir"
              lineHeight="29px"
              fontWeight="700"
            >
              IDENTITY DOCUMENT*
            </FormLabel>
            <Input
              type="file"
              w="353px"
              h="50px"
              p="2"
              bgColor="#E5E5E5"
              borderRadius="none"
            />
          </HStack>
          <Text fontSize="20px" fontFamily="veralaRound" pb="25px" pl="4rem">
            <Icon as={BsUpload} mr="14px" />
            Upload File
          </Text>
          <Flex direction="column" w="100%" align="center" px="202px">
            <Heading
              fontSize="20px"
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
                  fontSize="20px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  NAME*
                </FormLabel>
                <Input
                  w="240px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </HStack>
              <HStack mb="25px">
                <FormLabel
                  pl="10px"
                  fontSize="20px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  DESIGNATION*
                </FormLabel>
                <Input
                  w="240px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </HStack>
            </Flex>
            <Flex>
              <HStack mr="50px">
                <FormLabel
                  pl="10px"
                  fontSize="20px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  NAME*
                </FormLabel>
                <Input
                  w="240px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </HStack>
              <HStack>
                <FormLabel
                  pl="10px"
                  fontSize="20px"
                  fontFamily="avenir"
                  lineHeight="29px"
                  fontWeight="700"
                >
                  DESIGNATION*
                </FormLabel>
                <Input
                  w="240px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </HStack>
            </Flex>
          </Flex>
          <Button
            my="50px"
            h="51px"
            w="168px"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="16px"
            fontFamily="avenir"
            px="16px"
            py="15px"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            SEND MESSAGE
          </Button>
        </FormControl>
      </Flex>
      <Flex
        align="center"
        px="350px"
        bgColor="#B88746"
        color="white"
        h="85px"
        fontSize="20px"
        fontFamily="avenir"
      >
        <Select
          w="300px"
          placeholder="SELECT PROJECT"
          textTransform="uppercase"
          variant="unstyled"
          mr="100px"
        >
          <option></option>
          <option></option>
        </Select>
        <Text w="100%" align="center" justify="center">
          <Icon as={AiOutlineDownload} h="25px" w="25px" mr="10px" />
          DOWNLOAD CP-BROCHURE
        </Text>
      </Flex>
    </>
  );
};

export default ChannelForm;
