import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  Icon,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Select,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { BsUpload } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";
import { TriangleDownIcon } from "@chakra-ui/icons";

const MtnHd = motion(Heading);
const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);

const ChannelForm = () => {
  const [dis, setDis] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateFlx = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateFlx.start({ opacity: 1 });
    }
  }, [isInView, animateFlx]);

  const track = () => {
    console.log(window.scrollY);
    if (window.scrollY > 370) {
      setDis(true);
    } else {
      setDis(false);
    }
  };

  window.addEventListener("scroll", track);

  return (
    <>
      <Flex
        w="100%"
        h="100%"
        pos="relative"
        direction="column"
        align="center"
        justify="center"
        pt="50px"
        px="100px"
        bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      >
        {" "}
        <Heading
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 2, type: "just", ease: "easeIn" }}
          bottom={dis ? "0" : "30vh"}
          pos={dis ? "static" : "fixed"}
          fontSize="40px"
          fontFamily="avenir"
          lineHeight="57px"
          textTransform="uppercase"
          textAlign="center"
          zIndex="10"
          color={dis ? "black" : "white"}
          transition="ease-in-out 1.5s"
        >
          where opportunities pave the way for <br />
          incredible rewards
        </Heading>
        <MtnTxt
          ref={ref}
          initial={{ opacity: 0 }}
          animate={animateFlx}
          transition={{ duration: 2, type: "just" }}
          px="100px"
          pt={dis ? "25px" : "150px"}
          fontFamily="veralaRound"
          fontSize="16px"
          lineHeight="24px"
          mb="50px"
        >
          Your association with us is extremely valuable to us. We support our
          Channel Partners to catalyst their growth with ours. Join our network
          and scale to greater heights as we bring to you various reward wining
          sources from our projects. So come, to be introduced to an achiever's
          destination reserved for those who make success happen.
          <Text pt="15px">
            Please fill in the details below for all your marketing
            requirements.
          </Text>
        </MtnTxt>
        <FormControl ref={ref} align="center">
          <MtnFlx
            initial={{ opacity: 0 }}
            animate={animateFlx}
            transition={{ duration: 2, type: "just" }}
            w="100%"
          >
            {/* top - left */}
            <Flex w="100%" direction="column" pr="45px">
              <Flex justify="space-between" mb="15px">
                <FormLabel
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  fontWeight="700"
                >
                  COMPANY/
                  <br />
                  INDIVIDUAL NAME*
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
              <Flex justify="space-between" mb="15px">
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
                <Flex align="center" justify="space-between" mb="15px">
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
                <Flex align="center" justify="space-between" mb="15px">
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
                <Flex align="center" justify="space-between" mb="15px">
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
                <Flex align="center" justify="space-between" mb="15px">
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
              <Flex justify="space-between" mb="15px">
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
                <Flex align="center" justify="space-between" pb="15px">
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
                <Flex align="center" justify="space-between" pb="15px">
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
                  pb="15px"
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
          </MtnFlx>

          {/* left-bottom */}

          <Flex
            w="100%"
            pb="15px"
            mt="15px"
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
                pb="15px"
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
              pb="15px"
            >
              AUTHORISED SIGNATORIES*
            </Heading>
            <Flex>
              <Flex mr="50px" mb="15px" justify="space-between" align="center">
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
              <Flex mb="15px" justify="space-between" align="center">
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
        pos="relative"
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
          pos="relative"
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
            // placeholder="SELECT PROJECT"
            textTransform="uppercase"
            variant="flushed"
            borderBottom="2px solid white"
            icon={<TriangleDownIcon width="18px" height="18px" />}
          >
            <option style={{ color: "black", borderRadius: "none" }}>
              ARETE HOMES
            </option>
            <option style={{ color: "black" }}>SKY HIGH TOWER</option>
            <option style={{ color: "black" }}>PGC</option>
            <option style={{ color: "black" }}>ARETE PLAZA</option>
            <option style={{ color: "black" }}>ARETE MALL</option>
          </Select>
          {/* <Menu>
            <MenuButton
              fontFamily="avenir"
              fontSize="16px"
              w="300px"
              variant="flushed"
              as={Button}
              rightIcon={<TriangleDownIcon />}
            >
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu> */}
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
