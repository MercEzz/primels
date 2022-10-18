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
          <Flex w="100%">
            {/* top - left */}
            <Flex w="100%" direction="column" pr="45px">
              <Flex justify="space-between" mb="25px">
                <FormLabel
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  fontWeight="700"
                >
                  COMPANY/INDIVIDUAL NAME*
                </FormLabel>
                <Input
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  w="340px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              <Flex justify="space-between" mb="25px">
                <FormLabel
                  pt="2"
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  fontWeight="700"
                >
                  NAME OF OWNER*
                </FormLabel>
                <Input
                  fontSize="16px"
                  fontFamily="avenir"
                  w="340px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              {/* left-bottom */}
              <FormLabel
                fontSize="16px"
                fontFamily="avenir"
                lineHeight="24px"
                fontWeight="700"
              >
                ENTITY*
              </FormLabel>
              <Flex
                fontSize="16px"
                fontFamily="veralaRound"
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
              <Flex w="100%" direction="column" mr="45px" mt="25px">
                <Flex align="center" justify="space-between" mb="25px">
                  <FormLabel
                    pt="2"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    OFFICE ADDRESS*
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex align="center" justify="space-between" mb="25px">
                  <FormLabel
                    pt="2"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    MOBILE NO.*
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex align="center" justify="space-between" mb="25px">
                  <FormLabel
                    pt="2"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    WEBSITE*
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex align="center" justify="space-between" mb="25px">
                  <FormLabel
                    pt="2"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    EMAIL*
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
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
              <Flex justify="space-between" mb="25px">
                <FormLabel
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  fontWeight="700"
                >
                  YOUR FOCUS <br />
                  LOCATION/ AREA*
                </FormLabel>
                <Input
                  fontSize="16px"
                  fontFamily="avenir"
                  w="340px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              <Heading
                fontSize="16px"
                fontFamily="avenir"
                lineHeight="24px"
                textAlign="left"
              >
                EXPERTISE*
              </Heading>
              <Flex
                w="100%"
                fontSize="16px"
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
              <Input
                fontSize="16px"
                fontFamily="avenir"
                w="100%"
                h="50px"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
              <Flex w="100%" direction="column" mt="25px">
                <Flex align="center" justify="space-between" pb="25px">
                  <FormLabel
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    GST No.*
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex align="center" justify="space-between" pb="25px">
                  <FormLabel
                    pt="2"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    RERA No.*
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Heading
                  fontSize="16px"
                  fontFamily="avenir"
                  mt="10px"
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

          <Flex
            w="100%"
            pb="25px"
            mt="25px"
            align="flex-start"
            justify="center"
          >
            <FormLabel
              pl="10px"
              fontSize="16px"
              fontFamily="avenir"
              lineHeight="24px"
              fontWeight="700"
            >
              IDENTITY <br />
              DOCUMENT*
            </FormLabel>
            <Flex direction="column" align="flex-start">
              <Input
                type="file"
                w="353px"
                h="50px"
                p="2"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
              <Text
                fontSize="16px"
                fontFamily="veralaRound"
                pt="15px"
                pb="25px"
              >
                <Icon as={BsUpload} mr="14px" />
                Upload File
              </Text>
            </Flex>
          </Flex>

          <Flex direction="column" w="100%" align="center" px="202px">
            <Heading
              fontSize="16px"
              fontFamily="avenir"
              lineHeight="24px"
              pb="25px"
            >
              AUTHORISED SIGNATORIES*
            </Heading>
            <Flex>
              <Flex mr="50px" mb="25px" justify="space-between" align="center">
                <FormLabel
                  pl="10px"
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  fontWeight="700"
                >
                  NAME*
                </FormLabel>
                <Input
                  fontSize="16px"
                  fontFamily="avenir"
                  w="240px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              <Flex mb="25px" justify="space-between" align="center">
                <FormLabel
                  pl="10px"
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  fontWeight="700"
                >
                  DESIGNATION*
                </FormLabel>
                <Input
                  fontSize="16px"
                  fontFamily="avenir"
                  w="240px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
            </Flex>
            <Flex>
              <Flex mr="50px" justify="space-between" align="center">
                <FormLabel
                  pl="10px"
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  fontWeight="700"
                >
                  NAME*
                </FormLabel>
                <Input
                  fontSize="16px"
                  fontFamily="avenir"
                  w="240px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              <Flex justify="space-between" align="center">
                <FormLabel
                  pl="10px"
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  fontWeight="700"
                >
                  DESIGNATION*
                </FormLabel>
                <Input
                  fontSize="16px"
                  fontFamily="avenir"
                  w="240px"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
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
        w="100%"
        align="center"
        justify="center"
        bgColor="#B88746"
        color="white"
        h="50px"
        fontSize="16px"
        fontFamily="avenir"
      >
        <Flex
          w="100%"
          align="center"
          justify="flex-end"
          pr="50px"
          fontFamily="avenir"
          fontSize="16px"
        >
          <Select
            fontFamily="avenir"
            fontSize="16px"
            w="300px"
            placeholder="SELECT PROJECT"
            textTransform="uppercase"
            variant="unstyled"
            borderBottom="3px white"
          >
            <option></option>
            <option></option>
          </Select>
        </Flex>
        <Flex w="100%" align="center" justify="flex-start" pl="50px">
          <Icon as={AiOutlineDownload} h="30px" w="30px" mr="10px" />
          DOWNLOAD CP-BROCHURE
        </Flex>
      </Flex>
    </>
  );
};

export default ChannelForm;
