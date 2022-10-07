import {
  Button,
  Flex,
  Heading,
  Text,
  Divider,
  Box,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <Flex
      justify="center"
      w="100%"
      align="center"
      bgColor="gray.900"
      color="white"
      p="6"
      direction="column"
    >
      <Flex w="100%" direction="column" pt="14" px="10" align="center">
        <Heading fontFamily="goudy" fontSize="50px">
          ABOUT US
        </Heading>
        <Flex w="100%" align="center" direction="column">
          <Heading pt="10" pb="2" fontSize="40px" fontFamily="avenir">
            BRIGHT IDEAS-SMART SOLUTIONS
          </Heading>
          <Text py="8" fontSize="24px" fontFamily="veralaRound">
            Prime LifeSpace is a brand built on trust, transparency & quality in
            real estate industry. It has established its credentials in
            development of residential integrated townships & consulting
            services. Both these segments are equally important to us. Prime
            LifeSpace group luxuriates the highest brand esteem in Mumbai &
            Chennai for its fusion of luxuries & affordability in the projects
            of exceptional quality with a passion for delivering finest homes.
          </Text>
          <Text py="8" fontSize="24px" fontFamily="veralaRound">
            Prime LifeSpace consultancy firm offers an end-to-end solution in
            the Real Estate Space. The team has excelled in providing deep
            expertise to biggest corporates like Blackstone for Chandigarh
            Elante Mall, L&T for Seawood Project, Sunteck for Naigaon Project
            etc. Also, structured various eminent Joint Ventures, Mergers like
            L&T GeoTech with Sharaf Foundation.
          </Text>
          <Text py="8" fontSize="24px" fontFamily="veralaRound">
            Prime LifeSpace developers are renowned creators of smart integrated
            townships that provide more than just spaces to live in. The
            townships resemble improvement in quality of living, empowerment of
            communities and valuable experience of lifetime. Our properties are
            now fetching highest rental returns in the country. An investment
            choice for right value of money for the investors.
          </Text>
        </Flex>
        <Flex w="100%">
          <Flex direction="column" w="25%">
            <Flex align="center" py="2">
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="30px"
                width="85px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex direction="column" py="6">
              <Heading fontSize="50px" fontFamily="avenir">
                30+ years
              </Heading>
              <Text fontSize="30px" fontFamily="veralaRound">
                Of Building Trust
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" w="50%">
            <Flex align="center" py="2">
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="30px"
                width="55px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex direction="column" py="6" w="100%" align="center">
              <Flex direction="column" align="flex-start">
                <Heading fontSize="40px" fontFamily="avenir" textAlign="left">
                  approx. 1 Million sqft.{" "}
                </Heading>
                <Text fontSize="30px" textAlign="left" fontFamily="veralaRound">
                  Development
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" w="25%">
            <Flex align="center" py="2">
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="30px"
                width="65px"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex direction="column" py="6">
              <Heading fontSize="50px" fontFamily="avenir">
                100+
              </Heading>
              <Text fontSize="30px" fontFamily="veralaRound">
                Happy Consultancy Clients
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Button
          my="6"
          w="240px"
          h="75px"
          fontFamily="avenir"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          fontSize="30px"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
        >
          Know More
        </Button>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
