import {
  Button,
  Flex,
  Heading,
  Box,
  Divider,
  Text,
  Image,
  Stack,
  HStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import React from "react";
import { TriangleDownIcon, PhoneIcon } from "@chakra-ui/icons";
// images
import img1 from "../refer and earn imgs/1ST STEP.png";
import img2 from "../refer and earn imgs/2ND STEP.png";
import img3 from "../refer and earn imgs/3RD STEP.png";
import bookIll from "../refer and earn imgs/book a visit illustration.png";
import carIll from "../refer and earn imgs/CAR ICON.svg";
import { useState } from "react";

const ReferTabs = () => {
  const [active, setActive] = useState(true);
  return (
    <Flex w="100%" h="100%" px="6.25rem" direction="column" align="center">
      <Flex w="100%">
        <Button
          w="100%"
          bgColor="white"
          bgGradient={active ? "linear(to-b, #B88746 ,#DFBD69)" : "white"}
          border="1px solid #B88746"
          color={active ? "white" : "black"}
          mr="0.625rem"
          p="1.563rem"
          borderRadius="none"
          fontSize="1.25rem"
          fontFamily="avenir"
          fontWeight="bold"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
            color: "white",
          }}
          onClick={() => {
            setActive(true);
          }}
          _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          REFER A FRIEND
        </Button>
        <Button
          ml="0.625rem"
          w="100%"
          bgColor="white"
          color={active ? "black" : "white"}
          p="1.563rem"
          border="1px solid #B88746"
          bgGradient={active ? "none" : "linear(to-b, #B88746 ,#DFBD69)"}
          borderRadius="none"
          fontSize="1.25rem"
          fontFamily="avenir"
          fontWeight="bold"
          onClick={() => {
            setActive(false);
          }}
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
            color: "white",
          }}
          _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          BOOK A VISIT
        </Button>
      </Flex>
      {active ? <ReferAFriend /> : <BookAVisit />}
    </Flex>
  );
};

export default ReferTabs;

const ReferAFriend = () => {
  return (
    <>
      <Heading
        fontWeight="400"
        fontSize="2.5rem"
        fontFamily="goudy"
        pt="3.125rem"
        pb="1.875rem"
      >
        HOW IT WORKS?
      </Heading>
      <Flex w="100%" h="100%" columnGap="1.25rem" pb="1.875rem">
        <Flex w="100%" direction="column" justify="space-between">
          <Heading fontFamily="avenir" fontSize="1.5rem">
            STEP 1
          </Heading>
          <Flex w="100%" align="center" py="0.625rem">
            <Divider
              w="100%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>{" "}
          <Text pb="1.25rem" fontFamily="veralaRound" fontSize="1.25rem">
            Fill up the form on website & submit the details of as many friends
            & family members you would like to refer.
          </Text>
          <Image w="100%" h="16.75rem" src={img1} />
        </Flex>
        <Flex w="100%" direction="column" justify="space-between">
          <Heading fontFamily="avenir" fontSize="1.5rem">
            STEP 2
          </Heading>
          <Flex w="100%" align="center" py="0.625rem">
            <Divider
              w="100%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>{" "}
          <Text pb="1.25rem" fontFamily="veralaRound" fontSize="1.25rem">
            Your provided referral will be contacted by our team and complete
            assistance will be provided in the booking process.
          </Text>{" "}
          <Image w="100%" h="14.625rem" src={img2} />
        </Flex>
        <Flex w="100%" direction="column" justify="space-between">
          <Heading fontFamily="avenir" fontSize="1.5rem">
            STEP 3
          </Heading>
          <Flex w="100%" align="center" py="0.625rem">
            <Divider
              w="100%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>{" "}
          <Text pb="1.25rem" fontFamily="veralaRound" fontSize="1.25rem">
            Every time your referral becomes a successful booking, you’ll earn
            rewards upto Rs 1 Lakh.
          </Text>
          <Image w="100%" h="16.75rem" src={img3} />
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" pt="3.125rem" direction="column" pb="5rem">
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            textAlign="center"
            fontFamily="goudy"
            fontSize="2.5rem"
            pb="1.875rem"
          >
            REFER & EARN
          </Text>
          <Flex w="100%" h="100%" direction="row" gap="6.25rem" pb="1.563rem">
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <Text pb="1.563rem" fontFamily="veralaRound" fontSize="1.25rem">
                YOUR DETAILS
              </Text>
              <FormControl isRequired>
                <HStack
                  w="100%"
                  h="100%"
                  justify="space-between"
                  align="center"
                  pb="1.563rem"
                >
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    ARE YOU A RESIDENT WITH US?
                  </FormLabel>
                  <RadioGroup>
                    <HStack
                      w="100%"
                      h="100%"
                      justify="space-between"
                      align="center"
                      fontFamily="veralaRound"
                      fontSize="18px"
                    >
                      <Radio
                        borderRadius="none"
                        value="yes"
                        size="lg"
                        mr="3.125rem"
                      >
                        YES
                      </Radio>
                      <Radio borderRadius="none" value="no" size="lg">
                        NO
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </HStack>
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PROJECT REFERRED
                  </FormLabel>
                  <Select
                    fontFamily="veralaRound"
                    fontSize="1rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#D9D9D9"
                    textTransform="uppercase"
                    variant="flushed"
                    borderBottom="2px solid white"
                    icon={<TriangleDownIcon width="1rem" height="0.6rem" />}
                    borderRadius="none"
                  >
                    <option style={{ color: "black" }}>
                      <Text>Select Project</Text>
                    </option>
                    <option style={{ color: "black" }}>
                      <Text>Arete Homes</Text>
                    </option>
                    <option style={{ color: "black" }}>
                      <Text>Sky High Tower</Text>
                    </option>
                    <option style={{ color: "black" }}>
                      <Text>Ponneri Gymkhana Club</Text>
                    </option>
                  </Select>
                </HStack>{" "}
              </FormControl>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <Text pb="1.563rem" fontFamily="veralaRound" fontSize="1.25rem">
                REFERRAL DETAILS
              </Text>{" "}
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="veralaRound"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" align="flex-start" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    REQUIREMENTS
                  </FormLabel>
                  <Textarea
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="6.75rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>
              </FormControl>
            </Flex>
          </Flex>
          <Button
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="1rem"
            fontFamily="avenir"
            p="1rem"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            GET AN INSTANT CALL BACK
          </Button>
        </form>
      </Flex>
    </>
  );
};

const BookAVisit = () => {
  return (
    <>
      <Flex w="100%" h="100%" pb="3.125rem" pt="3.125rem">
        <Image
          w="45%"
          h="30rem"
          src={bookIll}
          objectFit="cover"
          // top="50%"
          // transform="translate(0, -50%)"
        />
        <Flex w="55%" direction="column" align="flex-end" top="20%" right="0">
          <Text
            textAlign="center"
            fontFamily="goudy"
            fontSize="2.5rem"
            pb="35px"
          >
            YOU ARE ONLY ONE RIDE AWAY FROM YOUR DREAM HOME
          </Text>
          <HStack w="100%" align="center" justify="center" pb="3.125rem">
            <Image src={carIll} />
            <Heading
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.5rem"
              bgGradient="linear(to-l, #B88746, #DFBD69)"
              bgClip="text"
            >
              FREE PICK UP - DROP SERVICE AVAILABLE
            </Heading>
          </HStack>
          <Text
            w="100%"
            textAlign="center"
            fontFamily="goudy"
            fontSize="1.5rem"
            pb="1.563rem"
          >
            GET IN TOUCH WITH US
          </Text>
          <Flex w="100%" align="center" justify="center" gap="3.25rem">
            <Flex direction="column" align="center">
              <EmailIcon h="18px" w="28px" mb="1rem" />
              <Heading fontFamily="avenir" fontSize="1.25rem">
                sales@primelifespace.com
              </Heading>
            </Flex>
            <Flex direction="column" align="center">
              <PhoneIcon h="18px" w="28px" mb="1rem" />
              <Heading fontFamily="avenir" fontSize="1.25rem">
                +91-9003199000
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" pt="1.875rem" direction="column" pb="5rem">
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            textAlign="center"
            fontFamily="goudy"
            fontSize="2.5rem"
            pb="1.875rem"
          >
            BOOK YOUR FREE SITE VISIT
          </Text>
          <Flex w="100%" h="100%" direction="row" gap="6.25rem" pb="1.563rem">
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FormControl isRequired>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    DATE
                  </FormLabel>
                  <Input
                    type="date"
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    TIME
                  </FormLabel>
                  <Input
                    type="time"
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PICKUP LOCATION
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                <HStack w="100%" align="flex-start" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NO. OF PERSONS
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="3.125rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>
              </FormControl>
            </Flex>
          </Flex>
          <Button
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="1rem"
            fontFamily="avenir"
            p="1rem"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            BOOK A SITE VISIT
          </Button>
        </form>
      </Flex>
    </>
  );
};
