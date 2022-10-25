import { Flex, Text, Avatar, Stack, AspectRatio } from "@chakra-ui/react";
import React from "react";

const LastSection = () => {
  return (
    <Flex
      w="100%"
      minH="100vh"
      direction="column"
      align="center"
      justify="center"
      px="100px"
      py="100px"
    >
      <Flex w="100%" pos="relative" pb="270px">
        <Flex
          bgGradient="linear(to-r, #B88746 ,#DFBD69)"
          pl="25px"
          py="50px"
          pr="100px"
        >
          <Text
            fontSize="40px"
            fontFamily="goudy"
            fontWeight="400"
            color="#fff"
          >
            Hear What <br /> People Has To <br /> Say About Us.
          </Text>
        </Flex>
        <Flex w="80%" h="80%" pos="absolute" left="22%" top="10%">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/I4W3vUKtobA?list=PLqrT0vNnEFLMvPT1N2NpvkxTOR1fENykN"
            title="See what our customer speaks about Arete Homes!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Flex>
      </Flex>
      <Flex w="100%">
        <Flex w="100%">
          {testimonial.map((tes) => (
            <Flex
              align={"center"}
              justify="space-between"
              w="100%"
              pr="25px"
              mt={8}
              direction={"column"}
              key={tes.name}
            >
              <Text fontSize="16px" fontFamily="veralaRound">
                {tes.text}
              </Text>
              <Flex w="100%" pt="25px" align="center" justify="flex-start">
                <Avatar h="80px" w="80px" src={tes.avtr} alt={tes.name} />
                <Stack spacing={-1}>
                  <Text
                    px="2"
                    fontSize="18px"
                    fontFamily="veralaRound"
                    fontWeight={400}
                  >
                    {tes.name}
                  </Text>
                  <Text
                    px="2"
                    fontFamily="veralaRound"
                    fontWeight={400}
                    fontSize="16px"
                    color="black"
                  >
                    {tes.title}
                  </Text>
                </Stack>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LastSection;

const testimonial = [
  {
    name: "Shrikant Joshi",
    title: "CEO-L&T Realty",
    avtr: "",
    text: "Prime Lifespace has played a significant role in the joint venture formation to one of our biggest project CRESCENT Bay at Parel. I highly recommend Prime Lifespace & wish them success.",
  },
  {
    name: "Anuj Puri",
    title: "Chairman-JLL Industries",
    avtr: "",
    text: "Prime Lifespace’s launch of primelifespace.com dedicated to connecting Indian end users to properties that meet their budgets & requirements is laudable.",
  },
  {
    name: "Babulal Verma",
    title: "MD-Omkar Realtors",
    avtr: "",
    text: "Prime Lifespace has made significant contributions in the development and growth of L&T realty. I highly recommend Prime Lifespace.",
  },
];
