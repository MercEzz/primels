import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ResForm = () => {
  return (
    <Flex direction="column" w="100%" py="12">
      <Container w="container.md" bgColor="red">
        <Heading fontFamily="goudy" fontWeight="400" fontSize="50px">
          SEND YOUR RESUME
        </Heading>
        <Text>
          Work with us, send your resume and our team will get back to you.
        </Text>
      </Container>
    </Flex>
  );
};

export default ResForm;
