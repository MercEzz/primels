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
  const animateFade = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateHd.start({
        opacity: 1,
        y: 0,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateHd, animateFade]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [borderClr, setbordorClr] = useState(false);

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

  console.log(borderClr);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Flex
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      // pt="3.125rem"
      pb="3.125rem"
      pt="1.875rem"
      px="1rem"
      align="center"
      justify="center"
      pos="relative"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <MtnHd
        initial={{ opacity: 0, y: -50 }}
        animate={animateHd}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="2.125rem"
      >
        GET IN TOUCH
      </MtnHd>
      <MtnTxt
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 1.5, duration: 2, type: "just" }}
        fontSize="1rem"
        fontFamily="veralaRound"
        py="1.563rem"
        textAlign="center"
      >
        Leave us your information and our team will get back to you.
      </MtnTxt>
      <MtnContainer
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 3, duration: 2, type: "just" }}
        minw="container.sm"
      >
        {" "}
        <form onSubmit={submitHandler}>
          <FormControl align="center" justify="center">
            <VStack align="flex-start">
              <Flex
                w="100%"
                align="flex-end"
                justify="space-between"
                pb="0.437rem"
              >
                <Flex direction="row" gap="0">
                <FormControl isRequired>
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="1rem"
                  htmlFor="name"
                >
                  NAME
                </FormLabel>
                </FormControl>
                </Flex>
                <Input
                  id="name"
                  name="name"
                  value={name}
                  onChange={onChange}
                  type="text"
                  w="11.75rem"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                  isRequired
                  borderWidth="2px"
                  isInvalid={borderClr}
                  errorBorderColor="crimson"
                />
              </Flex>
              <Flex w="100%" align="center" justify="space-between" pb="0.437rem">
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="1rem"
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
                  w="11.75rem"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                  isRequired
                />
              </Flex>
              <Flex w="100%" align="center" justify="space-between" pb="0.437rem">
                <Flex direction="row" gap="0">
                <FormControl isRequired>
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="1rem"
                  htmlFor="phoneNo"
                >
                  PHONE NO.
                </FormLabel>
                </FormControl>
                </Flex>
                <Input
                  id="phoneNo"
                  name="phoneNo"
                  value={phoneNo}
                  onChange={onChange}
                  type="number"
                  w="11.75rem"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                  isRequired
                />
                
              </Flex>
              <Flex w="100%" align="flex-start" justify="space-between">
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="1rem"
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
                  w="11.75rem"
                  h="7.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                />
              </Flex>
            </VStack>
            <Button
              type="submit"
              mt="1.563rem"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              fontSize="1rem"
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
