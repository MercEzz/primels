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
    <Flex w="100%" h="100%" px="100px" direction="column" align="center">
      <Flex w="100%">
        <Button
          w="100%"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          border="1px solid #B88746"
          color="white"
          mr="10px"
          p="25px"
          borderRadius="none"
          fontSize="16px"
          fontFamily="avenir"
          fontWeight="bold"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
          onClick={() => {
            setActive(true);
          }}
          // _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          REFER A FRIEND
        </Button>
        <Button
          ml="10px"
          w="100%"
          bgColor="white"
          p="25px"
          border="1px solid #B88746"
          // bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          borderRadius="none"
          color="black"
          fontSize="16px"
          fontFamily="avenir"
          fontWeight="bold"
          onClick={() => {
            setActive(false);
          }}
          // _hover={{
          //   bgGradient: "linear(to-b, #DFBD69, #B88746)",
          // }}
          // _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
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
      <Heading fontWeight="400" fontSize="40px" fontFamily="goudy" py="50px">
        HOW IT WORKS?
      </Heading>
      <Flex w="100%" columnGap="20px" pb="50px">
        <Flex w="100%" h="100%" direction="column">
          <Heading fontFamily="avenir" fontSize="24px">
            STEP 1
          </Heading>{" "}
          <Flex w="100%" align="center" py="10px">
            <Divider
              w="100%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="30px"
              width="30px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
          <Text pb="20px" fontFamily="veralaRound" fontSize="20px">
            Fill up the form on website & submit the details of as many friends
            & family members you would like to refer.
          </Text>
          <Image w="100%" h="300px" src={img1} />
        </Flex>
        <Flex w="100%" direction="column">
          <Heading fontFamily="avenir" fontSize="24px">
            STEP 2
          </Heading>
          <Flex w="100%" align="center" py="10px">
            <Divider
              w="100%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="30px"
              width="30px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>{" "}
          <Text pb="20px" fontFamily="veralaRound" fontSize="20px">
            Your provided referral will be contacted by our team and complete
            assistance will be provided in the booking process.
          </Text>{" "}
          <Image w="100%" h="250px" src={img2} />
        </Flex>
        <Flex w="100%" direction="column">
          <Heading fontFamily="avenir" fontSize="24px">
            STEP 3
          </Heading>
          <Flex w="100%" align="center" py="10px">
            <Divider
              w="100%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="30px"
              width="30px"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>{" "}
          <Text pb="20px" fontFamily="veralaRound" fontSize="20px">
            Every time your referral becomes a successful booking, you’ll earn
            rewards upto Rs 1 Lakh.
          </Text>
          <Image w="100%" h="300px" src={img3} />
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" pt="50px" direction="column" pb="100px">
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text textAlign="center" fontFamily="goudy" fontSize="40px" pb="50px">
            REFER & EARN
          </Text>
          <Flex w="100%" h="100%" direction="row" gap="100px" pb="25px">
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <Text pb="25px" fontFamily="veralaRound" fontSize="20px">
                YOUR DETAILS
              </Text>
              <Stack w="100%" h="100%" direction="column">
                {" "}
                <FormControl isRequired>
                  <HStack
                    w="100%"
                    h="100%"
                    justify="space-between"
                    align="center"
                    pb="25px"
                  >
                    <FormLabel
                      fontFamily="avenir"
                      fontSize="16px"
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
                          mr="50px"
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
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      NAME
                    </FormLabel>
                    <Input
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      w="300px"
                      h="50px"
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
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      PHONE
                    </FormLabel>
                    <Input
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      w="300px"
                      h="50px"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </HStack>{" "}
                </FormControl>
                <FormControl>
                  <HStack w="100%" justify="space-between" pb="15px">
                    <FormLabel
                      fontFamily="avenir"
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      EMAIL
                    </FormLabel>
                    <Input
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      w="300px"
                      h="50px"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </HStack>{" "}
                </FormControl>
                <FormControl>
                  <HStack w="100%" justify="space-between">
                    <FormLabel
                      fontFamily="avenir"
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      PROJECT REFERRED
                    </FormLabel>
                    <Select
                      fontFamily="avenir"
                      fontSize="16px"
                      w="300px"
                      bgColor="#D9D9D9"
                      // placeholder="SELECT PROJECT"
                      textTransform="uppercase"
                      variant="flushed"
                      borderBottom="2px solid white"
                      icon={<TriangleDownIcon width="20px" height="10px" />}
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
              </Stack>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <Text pb="25px" fontFamily="veralaRound" fontSize="20px">
                REFERRAL DETAILS
              </Text>{" "}
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    w="300px"
                    h="50px"
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
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    w="300px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    w="300px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" align="flex-start" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    REQUIREMENTS
                  </FormLabel>
                  <Textarea
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    w="300px"
                    h="120px"
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
            fontSize="16px"
            fontFamily="avenir"
            p="16px"
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
      <Flex
        w="100%"
        h="85vh"
        bgColor="white"
        pos="relative"
        overflow="hidden"
        pb="50px"
      >
        <Image
          src={bookIll}
          pos="absolute"
          objectFit="cover"
          left="0"
          bottom="0"
        />
        <Flex
          pos="absolute"
          w="60%"
          h="100%"
          direction="column"
          align="flex-end"
          top="30%"
          right="0"
          bottom="0"
        >
          <Text textAlign="center" fontFamily="goudy" fontSize="40px" pb="35px">
            YOU ARE ONLY ONE RIDE AWAY FROM YOUR DREAM HOME
          </Text>
          <HStack w="100%" align="center" justify="center" pb="50px">
            <Image src={carIll} />
            <Heading
              textAlign="center"
              fontFamily="avenir"
              fontSize="24px"
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
            fontSize="24px"
            pb="25px"
          >
            GET IN TOUCH WITH US
          </Text>
          <Flex w="100%" align="center" justify="center" gap="50px">
            <Flex w="100%" direction="column" align="center">
              <EmailIcon h="18px" w="28px" mb="20px" />
              <Heading fontFamily="avenir" fontSize="20px">
                sales@primelifespace.com
              </Heading>
            </Flex>
            <Flex w="100%" direction="column" align="center">
              <PhoneIcon h="18px" w="28px" mb="20px" />
              <Heading fontFamily="avenir" fontSize="20px">
                +91-9003199000
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" pt="50px" direction="column" pb="100px">
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text textAlign="center" fontFamily="goudy" fontSize="40px" pb="50px">
            BOOK YOUR FREE SITE VISIT
          </Text>
          <Flex w="100%" h="100%" direction="row" gap="100px" pb="25px">
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <Stack w="100%" h="100%" direction="column">
                {" "}
                <FormControl isRequired>
                  {" "}
                  <HStack w="100%" justify="space-between" pb="15px">
                    <FormLabel
                      fontFamily="avenir"
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      NAME
                    </FormLabel>
                    <Input
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      w="300px"
                      h="50px"
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
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      PHONE
                    </FormLabel>
                    <Input
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      w="300px"
                      h="50px"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </HStack>{" "}
                </FormControl>
                <FormControl>
                  <HStack w="100%" justify="space-between" pb="15px">
                    <FormLabel
                      fontFamily="avenir"
                      fontSize="16px"
                      fontWeight="bold"
                    >
                      EMAIL
                    </FormLabel>
                    <Input
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      w="300px"
                      h="50px"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </HStack>{" "}
                </FormControl>
              </Stack>
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
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    DATE
                  </FormLabel>
                  <Input
                    type="date"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    w="300px"
                    h="50px"
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
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    TIME
                  </FormLabel>
                  <Input
                    type="time"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    w="300px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="15px">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    PICKUP LOCATION
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    w="300px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                <HStack w="100%" align="flex-start" justify="space-between">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    NO. OF PERSONS
                  </FormLabel>
                  <Input
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    w="300px"
                    h="50px"
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
            fontSize="16px"
            fontFamily="avenir"
            p="16px"
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
