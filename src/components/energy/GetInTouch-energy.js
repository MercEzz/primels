import {
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Container,
  Textarea,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const MtnHd = motion(Heading);
const MtnTxt = motion(Text);
const MtnContainer = motion(Container);

const GetInTouch = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateHd = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateHd.start({ opacity: 1, y: 0 });
    }
  }, [isInView, animateHd]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [borderClr, setbordorClr] = useState(null);

  const { name, email, phoneNo, message } = formData;

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
      py="50px"
      align="center"
      justify="center"
      px="100px"
      pos="relative"
      bgColor="white"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <MtnHd
        initial={{ opacity: 0, y: -50 }}
        animate={animateHd}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="40px"
        lineHeight="60px"
      >
        GET IN TOUCH
      </MtnHd>
      <MtnTxt
        initial={{ opacity: 0 }}
        animate={animateHd}
        transition={{ delay: 1, duration: 2, type: "just" }}
        fontSize="16px"
        fontFamily="veralaRound"
        py="25px"
        textAlign="center"
      >
        Leave us your information and our team will get back to you.
      </MtnTxt>
      <MtnContainer
        initial={{ opacity: 0 }}
        animate={animateHd}
        transition={{ delay: 1, duration: 2, type: "just" }}
        minw="container.sm"
      >
        <form onSubmit={submitHandler}>
          <FormControl align="center" justify="center">
            <VStack align="flex-start">
              <Flex
                w="100%"
                align="flex-end"
                justifyContent="space-between"
                pb="7px"
              >
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="16px"
                  htmlFor="name"
                >
                  NAME*
                </FormLabel>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  type="text"
                  w="350px"
                  h="40px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="16px"
                  isRequired
                  focusBorderColor="none"
                  // borderColor={borderClr ? "#eee" : "#fa2"}
                />
              </Flex>
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
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  type="email"
                  w="350px"
                  h="40px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="16px"
                  isRequired
                />
              </Flex>
              <Flex w="100%" align="center" justify="space-between" pb="7px">
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="16px"
                  htmlFor="phoneNo"
                >
                  PHONE NO.*
                </FormLabel>
                <Input
                  id="phoneNo"
                  name="phoneNo"
                  value={phoneNo}
                  onChange={onChange}
                  type="number"
                  w="350px"
                  h="40px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="16px"
                  isRequired
                />
              </Flex>
              <Flex w="100%" align="flex-start" justify="space-between">
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="16px"
                  htmlFor="message"
                >
                  MESSAGE
                </FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={onChange}
                  maxLength="200"
                  w="350px"
                  h="120px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="16px"
                />
              </Flex>
            </VStack>
            <Button
              type="submit"
              mt="25px"
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
      </MtnContainer>
    </Flex>
  );
};

export default GetInTouch;
