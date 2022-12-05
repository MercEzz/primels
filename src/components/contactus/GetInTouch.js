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
//import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

//const MtnHd = motion(Heading);
//const MtnTxt = motion(Text);
//const MtnFlex = motion(Flex);

const GetInTouch = () => {
  
  const ref = useRef(null);
  /*
  const isInView = useInView(ref, { once:false });
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
  */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [borderClr, setbordorClr] = useState(false);
  useEffect(() => {
    console.log(borderClr);
  }, [borderClr]);
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
      overflow="hidden"
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      // pt="3.125rem"
      pt="1.8725rem"
      pd="3.125rem"
      px="6.25rem"
      align="center"
      justify="center"
      pos="relative"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <Heading
        className="serv-text-up reveal"
        fontFamily="goudy"
        fontWeight="400"
        fontSize="2.5rem"
        lineHeight="3.75rem"
      >
        GET IN TOUCH
      </Heading>
      <Text
        className="fadein reveal"
        fontSize="1rem"
        fontFamily="veralaRound"
        py="1.563rem"
        textAlign="center"
      >
        Leave us your information and our team will get back to you.
      </Text>
      <Flex
        className="fadein reveal"
        w="full"
        align="center"
        justify="center"
      >
        {" "}
        <form onSubmit={submitHandler}>
          <FormControl align="center" justify="center">
            <VStack align="flex-start">
            <FormControl isRequired>
              <Flex
                w="100%"
                align="flex-end"
                justifyContent="space-between"
                pb="0.437rem"
              >
                
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="1rem"
                  htmlFor="name"
                >
                  NAME
                </FormLabel>
                {borderClr ? (
                  <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    type="text"
                    w="24.813rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                    fontFamily="veralaRound"
                    boxShadow="0px 0px 2px 2px red"
                    fontSize="1rem"
                    isRequired
                    borderWidth="2px"
                    isInvalid={borderClr}
                    errorBorderColor="crimson"
                  />
                ) : (
                  <Input
                    id="name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    type="text"
                    w="24.813rem"
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
                )}
                
              </Flex>
              </FormControl>
              <Flex
                w="100%"
                align="center"
                justify="space-between"
                pb="0.437rem"
              >
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
                  w="24.813rem"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                  isRequired
                />
              </Flex>
              <FormControl isRequired>
              <Flex
                w="100%"
                align="center"
                justify="space-between"
                pb="0.437rem"
              >
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="1rem"
                  htmlFor="phoneNo"
                >
                  PHONE NO.
                </FormLabel>
                <Input
                  id="phoneNo"
                  name="phoneNo"
                  value={phoneNo}
                  onChange={onChange}
                  type="number"
                  w="24.813rem"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                  isRequired
                />
              </Flex>
              </FormControl>
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
                  w="24.813rem"
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
              mb="5rem"
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
      </Flex>
    </Flex>
  );
};

export default GetInTouch;
