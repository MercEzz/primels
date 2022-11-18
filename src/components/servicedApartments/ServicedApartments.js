import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  SimpleGrid,
  HStack,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import banner from "../serviced apartments imgs/MIVAN TECHNOLOGY TOWER.jpg";
import apartment from "../serviced apartments imgs/serviced apartments icons/smart way of living - 1st.svg";
import time from "../serviced apartments imgs/serviced apartments icons/smart way of living-2nd.svg";
import ringbell from "../serviced apartments imgs/serviced apartments icons/smart way of living -3rd.svg";
import edit from "../serviced apartments imgs/serviced apartments icons/smart way of living -4th.svg";
import studentHousing from "../serviced apartments imgs/group-indian-people.jpg";
import coliving from "../serviced apartments imgs/arabian-men-women-sitting-kitchen-discussing-news.jpg";
import managedLiving from "../serviced apartments imgs/portrait-happy-indian-asian-young-family-while-sitting-sofa-lying-floor-sitting-against-wall.jpg";
import television from "../serviced apartments imgs/serviced apartments icons/telivision.svg";
import sofa from "../serviced apartments imgs/serviced apartments icons/sofa.svg";
import REFRIGERATOR from "../serviced apartments imgs/serviced apartments icons/refrigrator.svg";
import studyTable from "../serviced apartments imgs/serviced apartments icons/study.svg";
import airConditioning from "../serviced apartments imgs/serviced apartments icons/ac.svg";
import electricalPoints from "../serviced apartments imgs/serviced apartments icons/electrical point.svg";
import wallMirror from "../serviced apartments imgs/serviced apartments icons/wall mirror.svg";
import windowBalcony from "../serviced apartments imgs/serviced apartments icons/window.svg";
import comfortableBed from "../serviced apartments imgs/serviced apartments icons/bed.svg";
import cupboards from "../serviced apartments imgs/serviced apartments icons/cupboard.svg";
import washrooms from "../serviced apartments imgs/serviced apartments icons/washroom.svg";
import dinningTable from "../serviced apartments imgs/serviced apartments icons/dining.svg";
import wifi from "../serviced apartments imgs/serviced apartments icons/wifi.svg";
import housekeeping from "../serviced apartments imgs/serviced apartments icons/house keeping.svg";
import laundry from "../serviced apartments imgs/serviced apartments icons/laundry.svg";
import cctv from "../serviced apartments imgs/serviced apartments icons/cctv.svg";
import meals from "../serviced apartments imgs/serviced apartments icons/meals.svg";
import garbage from "../serviced apartments imgs/serviced apartments icons/garbage schute.svg";
import cable from "../serviced apartments imgs/serviced apartments icons/tv cable.svg";
import parking from "../serviced apartments imgs/serviced apartments icons/parking.svg";
import toiletries from "../serviced apartments imgs/serviced apartments icons/toiletries.svg";
// Grid Images
import partyArea from "../serviced apartments imgs/party area.JPG";
import garden from "../serviced apartments imgs/garden and jogging track.jpg";
import gym from "../serviced apartments imgs/gym.JPG";
import meditation from "../serviced apartments imgs/arete meditation retreat 3.jpg";
import sports from "../serviced apartments imgs/multi sports arena.jpg";
import pool from "../serviced apartments imgs/pool.JPG";
import exercise from "../serviced apartments imgs/open exercise area.jpg";
import cafe from "../serviced apartments imgs/cafe.jpg";

const ServicedApartments = () => {
  return (
    <>
      {/**Banner section  **/}
      <Flex w="100%" h="100vh" pos="relative">
        <Image
          w="100%"
          h="100%"
          pos="absolute"
          src={banner}
          objectFit="cover"
          objectPosition="bottom"
        />
        <Flex
          pos="absolute"
          bottom="0"
          w="100%"
          h="100%"
          bgColor="rgba(0,0,0,0.4)"
          align="center"
          justify="center"
          color="white"
          direction="column"
          pt="7.25rem"
        >
          <Text
            fontFamily="goudy"
            fontSize="3rem"
            textShadow="black 1px 1px 10px"
            pb="1.563rem"
          >
            WELCOME TO ARETE HOMES!
          </Text>
          <Heading
            fontFamily="avenir"
            fontSize="2.125rem"
            textShadow="black 1px 1px 10px"
            pb="4.5rem"
          >
            PREMIUM RENTAL SERVICED APARTMENTS
          </Heading>
          <Flex
            w="100%"
            h="100%"
            gap="1rem"
            align="center"
            justify="center"
            px="11.25rem"
          >
            <Box w="100%" pos="relative">
              <Image
                w="100%"
                h="18.75rem"
                objectFit="cover"
                src={studentHousing}
              />
              <Heading
                textAlign="center"
                w="100%"
                fontFamily="avenir"
                fontSize="1.5rem"
                pos="absolute"
                bottom="1.563rem"
                textShadow="black 1px 1px 10px"
              >
                STUDENT HOUSING
              </Heading>
            </Box>
            <Box w="100%" pos="relative">
              <Image
                w="100%"
                h="18.75rem"
                objectFit="cover"
                objectPosition="left"
                src={coliving}
              />
              <Heading
                textAlign="center"
                w="100%"
                fontFamily="avenir"
                fontSize="1.5rem"
                pos="absolute"
                bottom="1.563rem"
                textShadow="black 1px 1px 10px"
              >
                CO-LIVING FOR PROFESSIONALS
              </Heading>
            </Box>
            <Box w="100%" pos="relative">
              <Image
                w="100%"
                h="18.75rem"
                objectFit="cover"
                src={managedLiving}
              />
              <Heading
                textAlign="center"
                w="100%"
                fontFamily="avenir"
                fontSize="1.5rem"
                pos="absolute"
                bottom="1.563rem"
                textShadow="black 1px 1px 10px"
              >
                MANAGED LIVING
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {/** Smart way of living section  **/}
      <Flex
        w="100%"
        h="100%"
        px="6.25rem"
        align="center"
        direction="column"
        pt="5rem"
        pb="3.125rem"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem">
          A SMART WAY OF LIVING
        </Text>
        <Flex w="100%" h="100%" gap="1.25rem">
          <Flex w="100%" align="center" justify="center" direction="column">
            <Image mb="1rem" src={apartment} />
            <Flex w="100%" align="center" mb="1rem">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Choose your APARTMENT
            </Heading>
          </Flex>
          <Flex w="100%" align="center" justify="center" direction="column">
            <Image mb="1rem" src={time} />
            <Flex w="100%" align="center" mb="1rem">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Choose your Rental Duration
            </Heading>
          </Flex>
          <Flex w="100%" align="center" justify="center" direction="column">
            <Image mb="1rem" src={ringbell} />
            <Flex w="100%" align="center" mb="1rem">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Tailor the services your way
            </Heading>
          </Flex>
          <Flex w="100%" align="center" justify="center" direction="column">
            <Image mb="1rem" src={edit} />
            <Flex w="100%" align="center" mb="1rem">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Agreement - get what you want
            </Heading>
          </Flex>
        </Flex>
      </Flex>
      {/** PREMIUM SMART HOMES section  **/}
      <Flex
        w="100%"
        h="100%"
        align="center"
        direction="column"
        py="1.875rem"
        px="6.25rem"
      >
        {" "}
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.563rem">
          PREMIUM SMART HOMES
        </Text>
        <Text
          textAlign="center"
          fontFamily="goudy"
          fontSize="1.125rem"
          pb="1.563rem"
        >
          Arete Homes is a well-planned smart township that offers a taste of
          luxury in a rental flat at affordable pricing that feels owned. Our
          services cater for all - Bachelors, Students, Working Genre and
          Family.
        </Text>
        Carousels
      </Flex>
      {/** premium smart homes 2nd section **/}
      <Flex w="100%" h="100%" px="6.25rem" py="3.125rem">
        <Flex w="30%">video</Flex>
        <Flex
          w="10%"
          h="100%"
          direction="column"
          justify="center"
          align="center"
          px="1.563rem"
        >
          {" "}
          <Divider
            h="21.25rem"
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
          />
          <Box
            height="1.875rem"
            width="1.875rem"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </Flex>
        <Flex w="60%" h="100%" align="flex-start" direction="column">
          {" "}
          <TableContainer pb="1rem">
            <Table>
              <Thead
                textTransform="uppercase"
                bgGradient="linear(to-b, #DFBD69, #B88746)"
              >
                {" "}
                <Tr>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="1.25rem"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    px="4rem"
                    py="1.125rem"
                  >
                    Configuration
                  </Th>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="1.25rem"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    px="4rem"
                    py="1.125rem"
                  >
                    OCCUPANCY (MAX.)
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      2 BHK
                    </Heading>
                  </Td>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      4 GUESTS
                    </Heading>
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      2.5 BHK
                    </Heading>
                  </Td>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      5 GUESTS
                    </Heading>
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      3 BHK
                    </Heading>
                  </Td>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1.562rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      6 GUESTS
                    </Heading>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Text fontFamily="veralaRound" fontSize="1.125rem" pb="1.875rem">
            Rooms available for Private or Sharing use.
          </Text>
          <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.25rem">
            FURNISHED AMENITIES
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="2.5rem">
            {furnishedAmenities.map((items) => (
              <HStack key={items.title}>
                <Image h="3.125rem" w="3.125rem" src={items.icon} />
                <Heading fontFamily="avenir" fontSize="1rem">
                  {items.title}
                </Heading>
              </HStack>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex w="100%" h="100%" direction="column" px="6.25rem" py="1.875rem">
        <Text
          textAlign="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          pb="1.875rem"
        >
          PREMIUM HOME SERVICES
        </Text>
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
          gap="3.75rem"
          pb="3.125rem"
        >
          {premiumHouseFirst.map((item) => (
            <VStack>
              <Image h="5rem" w="5rem" src={item.icon} />
              <Heading
                w="100%"
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.25rem"
              >
                {item.title}
              </Heading>
            </VStack>
          ))}
        </Flex>{" "}
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
          gap="3.75rem"
          px="8.125rem"
        >
          {premiumHouseSecond.map((item) => (
            <VStack>
              <Image h="5rem" w="5rem" src={item.icon} />
              <Heading
                w="100%"
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.25rem"
              >
                {item.title}
              </Heading>
            </VStack>
          ))}
        </Flex>
      </Flex>
      {/* amenities sec */}
      <Flex w="100%" h="100%" pt="3.125rem" direction="column">
        <Text
          w="100%"
          textAlign="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          pb="1.563rem"
        >
          AMENITIES
        </Text>
        <Heading
          w="100%"
          textAlign="center"
          fontFamily="avenir"
          fontSize="2.125rem"
          pb="1.563rem"
        >
          EVERYTHING UNDER ONE ROOF
        </Heading>
        <Flex w="100%" h="100%" gap="0.938rem">
          <Flex w="100%" h="100%">
            <Grid templateColumns="repeat(2, 1fr)" gap="0.938rem">
              <GridItem rowSpan={2} colSpan={1} pos="relative">
                <Image
                  w="100%"
                  h="35.313rem"
                  objectFit="cover"
                  src={partyArea}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    OPEN PARTY AREA
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative">
                <Image w="100%" h="17.188rem" objectFit="cover" src={garden} />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    GARDEN
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={gym}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    GYM
                  </Heading>
                </Box>
              </GridItem>
              <GridItem colSpan={2} pos="relative">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={meditation}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    MEDITATION CENTRE
                  </Heading>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
          <Flex w="100%" h="100%">
            <Grid
              h="100%"
              templateColumns="repeat(2, 1fr)"
              // templateRows="repeat(3, 1fr)"
              gap="0.938rem"
            >
              <GridItem colSpan={2} pos="relative">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={sports}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    MULTI SPORTS ARENA
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={pool}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    SWIMMING POOL
                  </Heading>
                </Box>
              </GridItem>{" "}
              <GridItem rowSpan={2} colSpan={1} pos="relative">
                <Image w="100%" h="35.313rem" objectFit="cover" src={cafe} />
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    CAFETERIA
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={exercise}
                />
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    OPEN EXERCISE AREA
                  </Heading>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default ServicedApartments;

const furnishedAmenities = [
  {
    icon: television,
    title: "TELEVISION",
  },
  {
    icon: sofa,
    title: "5 SEATED SOFA",
  },
  {
    icon: REFRIGERATOR,
    title: "REFRIGERATOR",
  },
  {
    icon: studyTable,
    title: "STUDY TABLE",
  },
  {
    icon: airConditioning,
    title: "AIR CONDITIONING",
  },
  {
    icon: electricalPoints,
    title: "ELECTRICAL POINTS",
  },
  {
    icon: wallMirror,
    title: "WALL MIRROR",
  },
  {
    icon: windowBalcony,
    title: "WINDOW BALCONY",
  },
  {
    icon: comfortableBed,
    title: "COMFORTABLE BEDS",
  },
  {
    icon: cupboards,
    title: "SPACIOUS CUPBOARDS",
  },
  {
    icon: washrooms,
    title: "CLEAN WASHROOMS",
  },
  {
    icon: dinningTable,
    title: "6 SEATER DINING TABLE",
  },
];

const premiumHouseFirst = [
  {
    icon: wifi,
    title: "HIGH SPEED WIFI",
  },
  {
    icon: housekeeping,
    title: "HOUSEKEEPING SERVICE",
  },
  {
    icon: laundry,
    title: "LAUNDRY SERVICE",
  },
  {
    icon: cctv,
    title: "CCTV SURVEILLANCE",
  },
  {
    icon: meals,
    title: "DELICIOUS MEALS",
  },
];

const premiumHouseSecond = [
  {
    icon: garbage,
    title: "GARBAGE SCHUTE",
  },
  {
    icon: cable,
    title: "TV CABLE",
  },
  {
    icon: parking,
    title: "PARKING",
  },
  {
    icon: toiletries,
    title: "FREE TOILETRIES",
  },
];
