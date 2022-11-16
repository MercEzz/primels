import {
  Button,
  Flex,
  Text,
  Accordion,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionItem,
  AccordionIcon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { AiOutlineDownCircle } from "react-icons/ai";

const DropDown = () => {
  return (
    <Flex h="100%" w="100%" px="84px" bgColor="#B88746">
      <Accordion w="100%" border="1px solid #B88746" allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton
              color="white"
              fontSize="24px"
              fontFamily="avenir"
              fontWeight="bold"
            >
              <Box flex="1" textAlign="left">
                MORE INFORMATION
              </Box>
              <AccordionIcon borderRadius="50%" border="1px solid white" />
            </AccordionButton>
          </h2>{" "}
          <AccordionPanel w="100%">
            <PrimeLS />
            <InvestWithUs />
            <AreteHomesPro />
            <AreteHomesSky />
            <AreteHomesService />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default DropDown;

const PrimeLS = () => {
  return (
    <AccordionItem
      w="100%"
      bgColor="#DFBD69"
      border="1px solid #DFBD69"
      allowMultiple
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              color="black"
              fontSize="24px"
              fontFamily="avenir"
              fontWeight="bold"
            >
              <Box flex="1" textAlign="left">
                PRIME LIFESPACE
              </Box>
              {isExpanded ? (
                <MinusIcon
                  fontSize="24px"
                  p="1"
                  borderRadius="50%"
                  border="1px solid black"
                />
              ) : (
                <AddIcon
                  p="1"
                  fontSize="24px"
                  borderRadius="50%"
                  border="1px solid black"
                />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel py="25px" px="50px" bgColor="white" color="black">
            <UnorderedList fontFamily="veralaRound" fontSize="18px">
              <ListItem pb="25px">
                {" "}
                Real Estate Consultancy & Development Firm, Prime LifeSpace,
                based in Mumbai, is in the field of Real Estate since the last
                24 years. We have completed projects in Pune and upcoming
                projects in Alibaug, Khopoli, Mumbai etc. The company is
                involved in all sorts of Real Estate activities like
                development, advisory, finance, consulting, green energy (Solar)
                , etc.
              </ListItem>
              <ListItem>
                Approvals already obtained: DTCP Approved, Environment
                Clearance, Fire NOC, Highway NOC, Airport NOC, Tehsildar NOC,
                GWB Clearance. Approvals under process: CTE from PCB will be
                obtained by end of Feb’ 16
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

const InvestWithUs = () => {
  return (
    <AccordionItem
      w="100%"
      bgColor="#DFBD69"
      border="1px solid #DFBD69"
      allowMultiple
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              color="black"
              fontSize="24px"
              fontFamily="avenir"
              fontWeight="bold"
            >
              <Box flex="1" textAlign="left">
                INVEST WITH US
              </Box>
              {isExpanded ? (
                <MinusIcon
                  fontSize="24px"
                  p="1"
                  borderRadius="50%"
                  border="1px solid black"
                />
              ) : (
                <AddIcon
                  p="1"
                  fontSize="24px"
                  borderRadius="50%"
                  border="1px solid black"
                />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel py="25px" px="50px" bgColor="white" color="black">
            <UnorderedList fontFamily="veralaRound" fontSize="18px">
              <ListItem pb="25px">
                {" "}
                INVEST WITH US Real Estate Consultancy & Development Firm, Prime
                LifeSpace, based in Mumbai, is in the field of Real Estate since
                the last 24 years. We have completed projects in Pune and
                upcoming projects in Alibaug, Khopoli, Mumbai etc. The company
                is involved in all sorts of Real Estate activities like
                development, advisory, finance, consulting, green energy (Solar)
                , etc. Approvals already obtained: DTCP Approved, Environment
                Clearance, Fire NOC, Highway NOC, Airport NOC, Tehsildar NOC,
                GWB Clearance. Approvals under process: CTE from PCB will be
                obtained by end of Feb’ 16
              </ListItem>
              <ListItem>
                Approvals already obtained: DTCP Approved, Environment
                Clearance, Fire NOC, Highway NOC, Airport NOC, Tehsildar NOC,
                GWB Clearance. Approvals under process: CTE from PCB will be
                obtained by end of Feb’ 16
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

const AreteHomesPro = () => {
  return (
    <AccordionItem
      w="100%"
      bgColor="#DFBD69"
      border="1px solid #DFBD69"
      allowMultiple
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              color="black"
              fontSize="24px"
              fontFamily="avenir"
              fontWeight="bold"
            >
              <Box flex="1" textAlign="left">
                ARETE HOMES PROJECT
              </Box>
              {isExpanded ? (
                <MinusIcon
                  fontSize="24px"
                  p="1"
                  borderRadius="50%"
                  border="1px solid black"
                />
              ) : (
                <AddIcon
                  p="1"
                  fontSize="24px"
                  borderRadius="50%"
                  border="1px solid black"
                />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel py="25px" px="50px" bgColor="white" color="black">
            <UnorderedList fontFamily="veralaRound" fontSize="18px">
              {" "}
              <ListItem pb="25px">
                Located in Ponneri, North Chennai, Arete homes offer house for
                sale sized 20.25 acres; Phase 1 – 14.10 acres.
              </ListItem>
              <ListItem pb="25px">
                Arete Homes is located in Ponneri, North Chennai and offers flat
                for rent, student housing, serviced apartments and house for
                sale.{" "}
              </ListItem>
              <ListItem pb="25px">
                Meditation Retreat is just a place for meditation and people
                from all religions can use it. Capacity is 60+ in the ground
                floor and 80+ in the basement.
              </ListItem>{" "}
              <ListItem pb="25px">
                Yes, at the mid-landing level of one staircase in all buildings.
                Size 600mm x 600mm\
              </ListItem>{" "}
              <ListItem>
                3 levels of security - 1) Gate , 2) Lift and 3) Video door phone
                Provision to control your home through an app in mobile / tab
                from anywhere in the world; Automation option inside the flats;
                30,000+ sqft of fully functional “The Arête Club” with all the
                required facilities of international standards; 2 lakh sqft of
                Commercial complex and hotel.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

const AreteHomesSky = () => {
  return (
    <AccordionItem
      w="100%"
      bgColor="#DFBD69"
      border="1px solid #DFBD69"
      allowMultiple
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              color="black"
              fontSize="24px"
              fontFamily="avenir"
              fontWeight="bold"
            >
              <Box flex="1" textAlign="left">
                ARETE HOMES SKY HIGH TOWER
              </Box>
              {isExpanded ? (
                <MinusIcon
                  fontSize="24px"
                  p="1"
                  borderRadius="50%"
                  border="1px solid black"
                />
              ) : (
                <AddIcon
                  p="1"
                  fontSize="24px"
                  borderRadius="50%"
                  border="1px solid black"
                />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel
            py="25px"
            px="50px"
            fontFamily="veralaRound"
            bgColor="white"
            color="black"
            fontSize="18px"
          >
            <Text>Automation System</Text>
            <UnorderedList>
              <ListItem pb="25px">
                Provision to control your home through an app in your mobile
                from anywhere & anytime.
              </ListItem>{" "}
              <ListItem pb="25px">
                Provision of Seamlessly connecting to Cable TV Network & Wifi
                Zone.
              </ListItem>
              <ListItem pb="25px">
                Provision to set your mood right for socializing with
                customization.
              </ListItem>
              <ListItem pb="25px">
                {" "}
                Provision of settings of lights/ACs & window blinds with one
                touch.
              </ListItem>
            </UnorderedList>
            <Text>Disaster management system</Text>
            <UnorderedList>
              <ListItem pb="25px">Well planned drainage system</ListItem>{" "}
              <ListItem pb="25px">Emergency health services</ListItem>
              <ListItem pb="25px">High quality fire protection system</ListItem>
              <ListItem pb="25px">CCTV coverage</ListItem>
              <ListItem pb="25px">
                Top quality structures, protecting from seismic and cyclone
              </ListItem>
            </UnorderedList>
            <Text>Security System</Text>
            <UnorderedList>
              <ListItem pb="25px">
                Provision of state of the art Security Management System.
              </ListItem>{" "}
              <ListItem pb="25px">
                A 3 level security system with fibre optic cable at Entrance,
                Lobby, Main Door..
              </ListItem>
              <ListItem pb="25px">
                High definition of video surveillance equipment.
              </ListItem>
              <ListItem pb="25px">Intercom system.</ListItem>
              <ListItem pb="25px">Visitor Management systems.</ListItem>
              <ListItem pb="25px">Video door phone system.</ListItem>
            </UnorderedList>
            <Text>External features</Text>
            <UnorderedList>
              <ListItem pb="25px">Solar water heating system.</ListItem>{" "}
              <ListItem pb="25px">
                LED lighting for common areas and streets.
              </ListItem>
              <ListItem pb="25px">STP, biomethanation plant.</ListItem>
              <ListItem pb="25px">Rainwater harvesting.</ListItem>
              <ListItem pb="25px">Garbage schute.</ListItem>
            </UnorderedList>
            <Text>Internal features</Text>
            <UnorderedList>
              <ListItem pb="25px">
                A.C points provision in living & bed room.
              </ListItem>{" "}
              <ListItem pb="25px">
                Superior quality sanitary & plumbing fixtures.
              </ListItem>
              <ListItem pb="25px">
                All doors with laminated/veneer finish.
              </ListItem>
              <ListItem pb="25px">
                High quality anodized / powder coated / UPVC windows.
              </ListItem>
              <ListItem pb="25px">
                Vitrified tiles in rooms, Anti skid tiles in toilets.
              </ListItem>
            </UnorderedList>
            <Text>Environmental features</Text>
            <UnorderedList>
              <ListItem pb="25px">Solar water heating system.</ListItem>{" "}
              <ListItem pb="25px">
                LED lighting for common areas and streets.
              </ListItem>
              <ListItem pb="25px">STP, biomethanation plant.</ListItem>
              <ListItem pb="25px">Rainwater harvesting.</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

const AreteHomesService = () => {
  return (
    <AccordionItem
      w="100%"
      bgColor="#DFBD69"
      border="1px solid #DFBD69"
      allowMultiple
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              color="black"
              fontSize="24px"
              fontFamily="avenir"
              fontWeight="bold"
            >
              <Box flex="1" textAlign="left">
                ARETE HOMES SERVICED APARTMENTS
              </Box>
              {isExpanded ? (
                <MinusIcon
                  fontSize="24px"
                  p="1"
                  borderRadius="50%"
                  border="1px solid black"
                />
              ) : (
                <AddIcon
                  p="1"
                  fontSize="24px"
                  borderRadius="50%"
                  border="1px solid black"
                />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel py="25px" px="50px" bgColor="white" color="black">
            <UnorderedList fontFamily="veralaRound" fontSize="18px">
              <ListItem pb="25px">
                Located in Ponneri, North Chennai, Arete homes offer house for
                sale sized 20.25 acres; Phase 1 – 14.10 acres.
              </ListItem>
              <ListItem pb="25px">
                Arete Homes is located in Ponneri, North Chennai and offers flat
                for rent, student housing, serviced apartments and house for
                sale.
              </ListItem>
              <ListItem pb="25px">
                Meditation Retreat is just a place for meditation and people
                from all religions can use it. Capacity is 60+ in the ground
                floor and 80+ in the basement.
              </ListItem>
              <ListItem pb="25px">
                Yes, at the mid-landing level of one staircase in all buildings.
                Size 600mm x 600mm\
              </ListItem>
              <ListItem>
                3 levels of security - 1) Gate , 2) Lift and 3) Video door phone
                Provision to control your home through an app in mobile / tab
                from anywhere in the world; Automation option inside the flats;
                30,000+ sqft of fully functional “The Arête Club” with all the
                required facilities of international standards; 2 lakh sqft of
                Commercial complex and hotel.
              </ListItem>
            </UnorderedList>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};
