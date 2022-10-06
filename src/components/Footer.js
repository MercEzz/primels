import {
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Radio,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Flex
      direction="column"
      align="center"
      bgColor="black"
      color="white"
      justify="center"
      px="12"
    >
      <Flex py="10">
        <Flex direction="column" px="10" w="100%">
          Logo
          <Text py="6" fontSize="24px">
            Prime Expat Infra No. 33, Mandapam Road, Kilpauk, Chennai - 600010.
          </Text>
          <VStack align="flex-start">
            <Heading fontSize="30px" fontWeight="600">
              SALES INQUIRY :
            </Heading>
            <Link fontSize="24px">sales@primelifespace.com</Link>
            <Link fontSize="24px">+91 9003199000</Link>
            <Link fontSize="24px">+91 7338808775</Link>
          </VStack>
        </Flex>
        <Flex direction="column" px="10" w="100%">
          <Heading fontSize="30px" fontWeight="600">
            OUR WORK
          </Heading>
          <VStack align="flex-start" pt="10">
            <Link fontSize="24px">About US</Link>
            <Link fontSize="24px">How it works</Link>
            <Link fontSize="24px">Properties</Link>
            <Link fontSize="24px">Careers</Link>
            <Link fontSize="24px">Contact US</Link>
          </VStack>
          <VStack align="flex-start" pt="10">
            <Heading fontSize="30px" fontWeight="600">
              PRIME LIFESPACE
            </Heading>
            <Link fontSize="24px">Blogs</Link>
            <Link fontSize="24px">News</Link>
            <Link fontSize="24px">FAQs</Link>
          </VStack>
        </Flex>
        <Flex direction="column" px="10">
          <Heading fontSize="30px" fontWeight="600">
            HEAR FROM US
          </Heading>
          <FormControl pt="6">
            <Input my="1" placeholder="Name*" />
            <Input my="1" placeholder="Email" />
            <Input my="1" placeholder="Phone no.*" />
            <Heading fontSize="24px" py="5" fontWeight="600">
              CONFIGURATION :
            </Heading>
            <Flex direction="column">
              <Flex justify="space-between" w="100%">
                <VStack align="flex-start">
                  <Radio value="2 BHK">2 BHK</Radio>
                  <Radio value="2.5 BHK">2.5 BHK</Radio>
                  <Radio value="3 BHK">3 BHK</Radio>
                </VStack>
                <VStack align="flex-start">
                  <Radio value="Buy">Buy</Radio>
                  <Radio value="Rent">Rent</Radio>
                  <Radio value="Invest">Invest</Radio>
                </VStack>
              </Flex>
              <Button
                my="6"
                w="270px"
                h="75px"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="30px"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
              >
                Book a Call
              </Button>
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
      <Flex direction="column" align="center" py="10">
        <Text fontSize="24px" fontWeight="600">
          FOLLOW US ON :
        </Text>
        <HStack>
          <Icon w="14" h="14" px="1" as={AiFillInstagram} />
          <Icon w="14" h="14" px="1" as={AiFillLinkedin} />
          <Icon w="12" h="12" px="1" as={BsFacebook} />
          <Icon w="14" h="14" px="1" as={AiFillYoutube} />
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Footer;
