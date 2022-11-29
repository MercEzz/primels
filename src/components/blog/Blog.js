import {
  Text,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Button,
  Icon,
  Select,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  VStack,
  StackDivider,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import React, { useLayoutEffect } from "react";
// images
import banner1 from "../blog imgs/construction-silhouette.jpg";
import banner2 from "../blog imgs/01.jpg";
import banner3 from "../blog imgs/gbxKKSknbsLcPco4c7DY0ZuVuLyKknpc2jQxX_2+3nG4ELLS9EqbFkW7dW+4VH9vgrzx8gzr96H8JiJgGW5cStbzqK4aTqzUsloK8ifacDydK0axPFhWiGZAVcLoHdn+XP8CQgud2V9fnNlK46S0632AgHrrCVyFnFSm3qQfx0kcJCh9NZcy0Ka_g.jpg";
import coinJar from "../blog imgs/towfiqu-barbhuiya-joqWSI9u_XM-unsplash.jpg";
import hall from "../blog imgs/spacejoy-q3Qd86sfaoU-unsplash.jpg";
import key from "../blog imgs/maria-ziegler-jJnZg7vBfMs-unsplash.jpg";
import kidbed from "../blog imgs/toa-heftiba-bcLE7reXFLM-unsplash.jpg";
import sunlight from "../blog imgs/jared-rice-NTyBbu66_SI-unsplash.jpg";
import spacejoy from "../blog imgs/boxes.jpg";
// icons
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
//animation
import "./bloganimation.css"
import "./blogstyle.css"
const Blog = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    try{

    for (var i = 0; i <= reveals.length; i++) {
      
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i]
        ? reveals[i].getBoundingClientRect().top
        : null;
      var elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }catch(e){
    
  }
  }
  useLayoutEffect(()=>{
    window.addEventListener("scroll", reveal);
    return()=>{window.removeEventListener("scroll", reveal);}
  });
  return (
    <>
      {/* banner sec */}
      <Flex w="100%" h="100vh" pos="relative" overflow="hidden">
        <Image
          animation="blog-banner-down 1 2s linear"
          w="33%"
          h="100%"
          objectFit="cover"
          objectPosition="40%"
          src={banner1}
        />
        <Image
          animation="blog-banner-up 1 2s linear"
          w="34%"
          h="100%"
          objectFit="cover"
          objectPosition="70%"
          src={banner2}
        />
        <Image
          animation="blog-banner-down 1 2s linear"
          w="33%"
          h="100%"
          objectFit="cover"
          objectPosition="60%"
          src={banner3}
        />
        <Heading
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          pos="absolute"
          textAlign="center"
          fontFamily="avenir"
          fontSize="3rem"
          animation="fadein 1 1s linear"
        >
          BLOG
        </Heading>
      </Flex>
      {/* banner sec */}
      <Flex
        w="100%"
        h="100%"
        px="6.25rem"
        pt="1.563rem"
        pb="3.125rem"
        gap="1.875rem"
      >
        <Flex w="70%" h="100%" direction="column" align="center">
          <Grid
            h="100%"
            templateColumns="repeat(2, 1fr)"
            gap="1.563rem"
            pb="1.563rem"
          >
            <GridItem colSpan={2}>
              <Flex w="100%" h="100%" boxShadow="xl">
                <Flex w="100%" h="100%" overflow="hidden">
                  <Image
                    className="blog-image-left reveal"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="80%"
                    src={coinJar}
                  />
                </Flex>
                <Flex
                  zIndex="3"
                  overflow="hidden"
                  w="100%"
                  h="30.688rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  pos="relative"
                >
                  <Text
                    fontFamily="goudy"
                    fontSize="1.5rem"
                    pb="1.563rem"
                    px="1.563rem"
                    pt="4.688rem"
                    textTransform="uppercase"
                  >
                    Why investing in residential property, a must for better
                    future?
                  </Text>
                  <Flex
                    zIndex="2"
                    className="blog-text-right reveal"
                    pos="absolute"
                    w="110%"
                    bgColor="#DFBD69"
                    p="3.125rem"
                    boxShadow="xl"
                    bottom="4.375rem"
                    right="0"
                  >
                    <Text fontFamily="veralaRound" fontSize="1.125rem">
                      Real estate investments in India are hands-down the safest
                      option. We are all trying to secure our future and looking
                      for the best options possible to multiply our savings and
                      wealth...
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              {" "}
              <Flex
                w="100%"
                h="31.563rem"
                boxShadow="xl"
                direction="column"
                pos="relative"
                overflow="hidden"
              >
                <Flex w="100%" h="100%">
                  <Image
                    className="blog-image-down reveal"
                    w="100%"
                    h="20.375rem"
                    objectFit="cover"
                    objectPosition="80%"
                    src={sunlight}
                  />
                </Flex>
                <Flex
                  w="100%"
                  h="30.688rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  color="white"
                >
                  <Flex
                    h="14rem"
                    pos="absolute"
                    bgColor="black"
                    p="1.563rem"
                    boxShadow="xl"
                    bottom="1.563rem"
                    left="1.563rem"
                    right="1.563rem"
                  >
                    <Text fontFamily="goudy" fontSize="1.125rem">
                      <Text
                        fontFamily="goudy"
                        fontSize="1.25rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        Arete Homes, A Smart Township Lifestyle you wished for!
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="1rem"
                      >
                        Prime Lifespace Developers presents the Largest Smart
                        Township Of North Channai, Arete...
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              {" "}
              <Flex
                w="100%"
                h="31.563rem"
                boxShadow="xl"
                direction="column"
                pos="relative"
                overflow="hidden"
              >
                <Flex w="100%" h="100%">
                  <Image
                    className="blog-image-down reveal"
                    w="100%"
                    h="20.375rem"
                    objectFit="cover"
                    objectPosition="80%"
                    src={spacejoy}
                  />
                </Flex>
                <Flex
                  w="100%"
                  h="30.688rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  pos="relative"
                  color="white"
                >
                  <Flex
                    h="14rem"
                    pos="absolute"
                    bgColor="black"
                    p="1.563rem"
                    boxShadow="xl"
                    bottom="1.563rem"
                    left="1.563rem"
                    right="1.563rem"
                  >
                    <Text fontFamily="goudy" fontSize="1.125rem">
                      <Text
                        fontFamily="goudy"
                        fontSize="1.25rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        RELOCATING TO CHENNAI FOR WORK OR EDUCATION?
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="1rem"
                      >
                        It’s time to pack up and find the right home for rent In
                        Chennai. We are here to guide you.........
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex w="100%" h="100%" boxShadow="xl" overflow="hidden">
                <Flex w="100%" h="100%">
                  <Image
                    className="blog-image-left reveal"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="80%"
                    src={hall}
                  />
                </Flex>
                <Flex
                  w="100%"
                  h="30.688rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  pos="relative"
                >
                  <Text
                    fontFamily="goudy"
                    fontSize="1.5rem"
                    pb="1.563rem"
                    px="1.563rem"
                    pt="4.688rem"
                    textTransform="uppercase"
                  >
                    WHY SHOULD YOU CHOOSE FLAT OVER INDEPENDENT HOUSES?
                  </Text>
                  <Flex
                    className="blog-text-right reveal"
                    pos="absolute"
                    w="110%"
                    bgColor="black"
                    color="white"
                    p="3.125rem"
                    boxShadow="xl"
                    bottom="4.375rem"
                    right="0"
                  >
                    <Text fontFamily="veralaRound" fontSize="1.125rem">
                      With modernisation making life simpler and unfolding the
                      chapters of growth for every citizen, its time to
                      understand the advantages of apartments in gated community...…
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              {" "}
              <Flex
                w="100%"
                h="31.563rem"
                boxShadow="xl"
                direction="column"
                pos="relative"
                overflow="hidden"
              >
                <Flex w="100%" h="100%">
                  <Image
                    className="blog-image-down reveal"
                    w="100%"
                    h="20.375rem"
                    objectFit="cover"
                    objectPosition="80%"
                    src={key}
                  />
                </Flex>
                <Flex
                  w="100%"
                  h="30.688rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  color="white"
                >
                  <Flex
                    h="14rem"
                    pos="absolute"
                    bgColor="black"
                    p="1.563rem"
                    boxShadow="xl"
                    bottom="1.563rem"
                    left="1.563rem"
                    right="1.563rem"
                  >
                    <Text fontFamily="goudy" fontSize="1.125rem">
                      <Text
                        fontFamily="goudy"
                        fontSize="1.25rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        LOOKING FOR HOME FOR SALE IN CHENNAI? FOLLOW THESE 5
                        STEPS TO BUY ONE
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="1rem"
                      >
                        Purchasing a home is regarded as a major milestone in
                        one’s life. Home ownership is associated with ........
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              {" "}
              <Flex
                w="100%"
                h="31.563rem"
                boxShadow="xl"
                direction="column"
                pos="relative"
                overflow="hidden"
              >
                <Flex w="100%" h="100%">
                  <Image
                    className="blog-image-down reveal"
                    w="100%"
                    h="20.375rem"
                    objectFit="cover"
                    objectPosition="80%"
                    src={kidbed}
                  />
                </Flex>
                <Flex
                  w="100%"
                  h="30.688rem"
                  align="center"
                  jsutify="center"
                  direction="column"
                  pos="relative"
                  color="white"
                >
                  <Flex
                    h="14rem"
                    pos="absolute"
                    bgColor="black"
                    p="1.563rem"
                    boxShadow="xl"
                    bottom="1.563rem"
                    left="1.563rem"
                    right="1.563rem"
                  >
                    <Text fontFamily="goudy" fontSize="1.125rem">
                      <Text
                        fontFamily="goudy"
                        fontSize="1.25rem"
                        pb="0.938rem"
                        textTransform="uppercase"
                      >
                        Amenities to ensure when buying a rented properties for
                        sale
                      </Text>
                      <Text
                        fontFamily="veralaRound"
                        pb="1.563rem"
                        fontSize="1rem"
                      >
                        In today’s time, living a ahealthy lifestyle with a
                        rational and serene mindset is a luxuiry and is
                        consid.....
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
          <Button
            p="1rem"
            fontSize="1rem"
            fontFamily="avenir"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            LOAD MORE
          </Button>
        </Flex>
        <Flex w="30%" h="100%" direction="column">
          <BlogForm />
        </Flex>
      </Flex>
    </>
  );
};

export default Blog;

const BlogForm = () => {
  return (
    <>
      <Flex h="100%" justify="flex-end" pb="0.938rem">
        <Icon as={AiOutlineYoutube} w="2.563rem" h="2.1rem" />
        <Icon as={AiOutlineInstagram} w="1.875rem" h="1.875rem" />
        <Icon as={RiFacebookCircleLine} w="1.875rem" h="1.875rem" />
        <Icon as={AiOutlineLinkedin} w="1.875rem" h="1.875rem" />
      </Flex>
      <Flex w="100%" direction="column" pb="0.938rem">
        <Text fontFamily="veralaRound" fontSize="1rem" pb="0.625rem">
          Category
        </Text>
        <Select
          placeholder="ALL"
          fontSize="1.125rem"
          fontWeight="bold"
          fontFamily="avenir"
          bgColor="gray.200"
          borderRadius="none"
        >
          <option value="Home Buying Journey">Home Buying Journey</option>
          <option value="Real Estate Investments">
            Real Estate Investments
          </option>
          <option value="NRI Corner">NRI Corner</option>
          <option value="Commercial Property">Commercial Property</option>
          <option value="Residential Property">Residential Property</option>
          <option value="Real Estate Trends">Real Estate Trends</option>
        </Select>
      </Flex>
      {/* get in touch*/}
      <Flex
        direction="column"
        w="100%"
        h="100%"
        px="0.938rem"
        pt="1.563rem"
        pb="1.875rem"
        align="center"
        justify="center"
      >
        {" "}
        <Heading
          fontFamily="goudy"
          fontWeight="400"
          fontSize="1.5rem"
          pb="1.563rem"
        >
          GET IN TOUCH
        </Heading>
        <form>
          <FormControl isRequired>
            {" "}
            <HStack w="100%" justify="space-between" pb="0.938rem">
              <FormLabel fontFamily="avenir" fontSize="1rem" fontWeight="bold">
                NAME
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w="13.125rem"
                h="2.188rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl isRequired>
            {" "}
            <HStack w="100%" justify="space-between" pb="0.938rem">
              <FormLabel fontFamily="avenir" fontSize="1rem" fontWeight="bold">
                PHONE
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w="13.125rem"
                h="2.188rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl>
            <HStack w="100%" justify="space-between" pb="0.938rem">
              <FormLabel fontFamily="avenir" fontSize="1rem" fontWeight="bold">
                EMAIL
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w="13.125rem"
                h="2.188rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl>
            <HStack w="100%" align="flex-start" justify="space-between">
              <FormLabel fontFamily="avenir" fontSize="1rem" fontWeight="bold">
                MESSAGE
              </FormLabel>
              <Textarea
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w="13.125rem"
                h="4.375rem"
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>
          </FormControl>
          <Button
            mx="6.875rem"
            mt="1.563rem"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="1rem"
            fontFamily="avenir"
            p="0.938rem"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            SUBMIT NOW
          </Button>
        </form>
      </Flex>
    </>
  );
};
