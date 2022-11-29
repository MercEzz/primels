import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BsUpload } from "react-icons/bs";

const MtnHead = motion(Heading);
const MtnText = motion(Text);
const MtnStk = motion(VStack);

const ResForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationHead = useAnimation();
  const animationFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationHead.start({ opacity: 1, y: 0 });
      animationFade.start({ opacity: 1 });
    }
  }, [isInView, animationHead, animationFade]);

  const [borderClr, setbordorClr] = useState(null);

  const [formData, setFormData] = useState({
    nmae: "",
    email: "",
    phoneNo: "",
    areaOfInterest: "",
    resume: "",
  });

  const { name, email, phoneNo, areaOfInterest, resume } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    if (name === "" || email === "" || phoneNo === "") {
      setbordorClr(true);
    } else {
      setbordorClr(false);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Flex
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      pt="50px"
      mb="25px"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <MtnHead
        initial={{ opacity: 0, y: -50 }}
        animate={animationHead}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="2rem"
      >
        SEND YOUR RESUME
      </MtnHead>
      <MtnText
        initial={{ opacity: 0 }}
        animate={animationFade}
        transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="16px"
        fontFamily="veralaRound"
        py="25px"
        textAlign="center"
      >
        Work with us, send your resume and our team will get back to you.
      </MtnText>
      <Container minW="container.sm">
        <form onSubmit={submitHandler}>
          <FormControl align="center" justify="center">
            <MtnStk
              w="100%"
              initial={{ opacity: 0 }}
              animate={animationFade}
              transition={{ delay: 1, duration: 2, type: "just" }}
              align="center"
            >
              <FormControl isRequired>
                <Flex
                  w="100%"
                  align="center"
                  justifyContent="space-between"
                  pb="15px"
                >
                  <FormLabel
                    fontFamily="avenir"
                    fontWeight="700"
                    fontSize="16px"
                    htmlFor="name"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={onChange}
                    w="350px"
                    h="40px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </FormControl>
              <Flex w="100%" align="center" justify="space-between" pb="7px">
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="16px"
                  htmlFor="email"
                >
                  EMAIL
                </FormLabel>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                  w="350px"
                  h="40px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              <FormControl isRequired>
                <Flex w="100%" align="center" justify="space-between" pb="7px">
                  <FormLabel
                    fontFamily="avenir"
                    fontWeight="700"
                    fontSize="16px"
                    htmlFor="phoneNo"
                  >
                    PHONE NO.
                  </FormLabel>
                  <Input
                    type="number"
                    id="phoneNo"
                    value={phoneNo}
                    onChange={onChange}
                    w="350px"
                    h="40px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </FormControl>
              <Flex w="100%" align="center" justify="space-between" pb="7px">
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="16px"
                  htmlFor="areaOfInterest"
                >
                  AREA OF INTEREST
                </FormLabel>
                <Input
                  type="text"
                  id="areaOfInterest"
                  value={areaOfInterest}
                  onChange={onChange}
                  w="350px"
                  h="40px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
              </Flex>
              <FormControl isRequired>
                <Flex w="100%" align="center" justify="space-between" pb="7px">
                  <FormLabel
                    fontFamily="avenir"
                    fontWeight="700"
                    fontSize="16px"
                    htmlFor="resume"
                  >
                    RESUME
                  </FormLabel>
                  <Input
                    type="file"
                    id="resume"
                    value={resume}
                    onChange={onChange}
                    p="1"
                    w="350px"
                    h="40px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </FormControl>
            </MtnStk>
            <Text ml="-10" fontSize="16px" fontFamily="veralaRound">
              <Icon as={BsUpload} mr="10px" />
              Upload File
            </Text>
            <Button
              type="submit"
              mt="25px"
              mb="50px"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              fontSize="16px"
              fontFamily="avenir"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              SUBMIT NOW
            </Button>
          </FormControl>
        </form>
      </Container>
    </Flex>
  );
};

export default ResForm;
