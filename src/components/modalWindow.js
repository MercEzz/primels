import { Flex,Text,FormLabel,Checkbox, Image, Button, HStack, FormControl, Input, VStack } from "@chakra-ui/react";
import Modal from 'react-bootstrap/Modal';
import React from "react";

const ModalWindwow = ({modalTitle,modalImage,isOpen,onClose}) => {
  return (
    <>
      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
      />
      <Modal size="lg" blockScrollOnMount={true} show={isOpen} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title alignSelf="center">{modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Flex direction="column" gap="1rem">
            <Image src={modalImage} alt="IMG" />
            <Flex gap="1rem">
            <VStack w="8.75rem" align="flex-start">
              Icons
            </VStack>
            <form>
            <Flex w="100%" align="center" justify="center" direction="column" >
              <Text fontSize="1rem">Register here & avail best offers!</Text>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.75rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.125rem"
                    w="10rem"
                    h="1.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.75rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.125rem"
                    w="10rem"
                    h="1.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="0.75rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.125rem"
                    w="10rem"
                    h="1.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" ml="4.5rem">
                  <Checkbox
                    value="yes"
                    fontFamily="veralaRound"
                    fontSize="0.75rem"
                    size="lg"
                  >
                    Get latest updates
                  </Checkbox>
                </HStack>
              </FormControl>
              <Button
                mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="0.75rem"
                fontFamily="avenir"
                p="0.938rem"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                SCHEDULE A CALL
              </Button>{" "}
            </Flex>
          </form>
            </Flex>
            </Flex>
          </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWindwow;