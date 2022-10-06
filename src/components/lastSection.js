import { Flex, Text, Avatar, Stack } from "@chakra-ui/react";
import React from "react";

const LastSection = () => {
  return (
    <Flex direction="column" py="10">
      <Flex>
        <Flex p="10" bgGradient="linear(to-r, #B88746 ,#DFBD69)">
          <Text py="2" fontSize="50px" fontWeight="400" color="#fff">
            Hear What People Has To Say About Us.
          </Text>
        </Flex>
        <Flex>video</Flex>
      </Flex>
      <Flex w="100%">
        <Flex w="100%" py="10" px="10">
          {testimonial.map((tes) => (
            <Flex
              align={"center"}
              justify="space-between"
              w="100%"
              mt={8}
              py="2"
              direction={"column"}
            >
              <Text p="6" fontSize="24px">
                {tes.text}
              </Text>
              <Flex>
                <Avatar src={tes.avtr} alt={tes.name} mb={2} />
                <Stack spacing={-1}>
                  <Text px="2" fontWeight={600}>
                    {tes.name}
                  </Text>
                  <Text px="2" fontSize={"sm"} color="black">
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
