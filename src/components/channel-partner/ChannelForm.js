import {
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  Icon,
  Button,
  Select,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { BsUpload } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
// import { MdArrowDropDown } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Formik } from "formik";

// const MtnHd = motion(Heading);
const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);

const ChannelForm = () => {
  const [dis, setDis] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animateFlx = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateFlx.start({ opacity: 1 });
    }
  }, [isInView, animateFlx]);

  const track = () => {
    if (window.scrollY > 370) {
      setDis(true);
    } else {
      setDis(false);
    }
  };

  window.addEventListener("scroll", track);

  const [initialValues, setValues] = useState({
    companyName: "",
    nameOfOwner: "",
    individual: false,
    proprietoship: false,
    partnership: false,
    privateLtdCo: false,
    publicLtdCo: false,
    llp: false,
    officeAdd: "",
    mobileNo: "",
    website: "",
    email: "",
    yourFocusLocationArea: "",
    residential: false,
    commercial: false,
    retail: false,
    industrialLand: false,
    others: false,
    othersTxt: "",
    gstNo: "",
    reraNo: "",
    brokerAssoc: "",
    identityDoc: "",
    name1: "",
    designation1: "",
    name2: "",
    designation2: "",
  });

  const onChange = (e) =>
    setValues({ ...initialValues, [e.target.name]: e.target.value });

  const {
    companyName,
    nameOfOwner,
    individual,
    proprietoship,
    partnership,
    privateLtdCo,
    publicLtdCo,
    llp,
    officeAdd,
    mobileNo,
    website,
    email,
    yourFocusLocationArea,
    residential,
    commercial,
    retail,
    industrialLand,
    others,
    othersTxt,
    gstNo,
    reraNo,
    brokerAssoc,
    identityDoc,
    name1,
    designation1,
    name2,
    designation2,
  } = initialValues;

  return (
    <>
      <Flex
        w="100%"
        h="100%"
        pos="relative"
        direction="column"
        align="center"
        justify="center"
        pt="50px"
        px="100px"
        bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      >
        {" "}
        <Heading
          bottom={dis ? "0" : "30vh"}
          pos={dis ? "static" : "fixed"}
          fontSize="40px"
          fontFamily="avenir"
          lineHeight="57px"
          textTransform="uppercase"
          textAlign="center"
          zIndex="10"
          color={dis ? "black" : "white"}
          transition="ease-in-out 1.5s"
        >
          where opportunities pave the way for <br />
          incredible rewards
        </Heading>
        <MtnTxt
          ref={ref}
          initial={{ opacity: 0 }}
          animate={animateFlx}
          transition={{ duration: 2, type: "just" }}
          px="100px"
          pt={dis ? "25px" : "150px"}
          fontFamily="veralaRound"
          fontSize="16px"
          lineHeight="24px"
          mb="50px"
        >
          Your association with us is extremely valuable to us. We support our
          Channel Partners to catalyst their growth with ours. Join our network
          and scale to greater heights as we bring to you various reward wining
          sources from our projects. So come, to be introduced to an achiever's
          destination reserved for those who make success happen.
          <Text pt="15px">
            Please fill in the details below for all your marketing
            requirements.
          </Text>
        </MtnTxt>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(initialValues);
          }}
        >
          <FormControl ref={ref} align="center">
            <MtnFlx
              initial={{ opacity: 0 }}
              animate={animateFlx}
              transition={{ duration: 2, type: "just" }}
              w="100%"
            >
              {/* top - left */}
              <Flex w="100%" direction="column" pr="45px">
                <Flex justify="space-between" mb="15px">
                  <FormLabel
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                    htmlFor="companyName"
                  >
                    COMPANY/
                    <br />
                    INDIVIDUAL NAME*
                  </FormLabel>
                  <Input
                    id="companyName"
                    name="companyName"
                    onChange={(e) => onChange(e)}
                    value={companyName}
                    type="text"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                    isRequired
                  />
                </Flex>
                <Flex justify="space-between" mb="15px">
                  <FormLabel
                    pt="4"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                    htmlFor="nameOfOwner"
                  >
                    NAME OF OWNER*
                  </FormLabel>
                  <Input
                    id="nameOfOwner"
                    name="nameOfOwner"
                    onChange={(e) => onChange(e)}
                    value={nameOfOwner}
                    type="text"
                    fontSize="16px"
                    fontFamily="avenir"
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                    isRequired
                  />
                </Flex>
                {/* left-bottom */}
                <FormLabel
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  fontWeight="700"
                >
                  ENTITY*
                </FormLabel>
                <Flex
                  fontSize="16px"
                  fontFamily="veralaRound"
                  justify="space-between"
                >
                  <VStack align="flex-start">
                    <Checkbox
                      size="lg"
                      name="individual"
                      value={individual}
                      checked={individual}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          individual: !individual,
                        });
                      }}
                    >
                      Individual
                    </Checkbox>
                    <Checkbox
                      size="lg"
                      name="Proprietorship"
                      value={proprietoship}
                      checked={proprietoship}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          proprietoship: !proprietoship,
                        });
                      }}
                    >
                      Proprietorship
                    </Checkbox>
                    <Checkbox
                      size="lg"
                      name="Partnership"
                      value={partnership}
                      checked={partnership}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          partnership: !partnership,
                        });
                      }}
                    >
                      Partnership
                    </Checkbox>
                  </VStack>
                  <VStack align="flex-start" pr="10">
                    <Checkbox
                      size="lg"
                      name="Private Ltd. Co."
                      value={privateLtdCo}
                      checked={privateLtdCo}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          privateLtdCo: !privateLtdCo,
                        });
                      }}
                    >
                      Private Ltd. Co.
                    </Checkbox>
                    <Checkbox
                      size="lg"
                      name="Public Ltd. Co."
                      value={publicLtdCo}
                      checked={publicLtdCo}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          publicLtdCo: !publicLtdCo,
                        });
                      }}
                    >
                      Public Ltd. Co.
                    </Checkbox>
                    <Checkbox
                      size="lg"
                      name="LLP"
                      value={llp}
                      checked={llp}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          llp: !llp,
                        });
                      }}
                    >
                      LLP
                    </Checkbox>
                  </VStack>
                </Flex>
                <Flex w="100%" direction="column" mr="45px" mt="25px">
                  <Flex align="center" justify="space-between" mb="15px">
                    <FormLabel
                      pt="2"
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      fontWeight="700"
                      htmlFor="officeAdd"
                    >
                      OFFICE ADDRESS*
                    </FormLabel>
                    <Input
                      id="officeAdd"
                      name="officeAdd"
                      onChange={(e) => onChange(e)}
                      value={officeAdd}
                      type="text"
                      fontSize="16px"
                      fontFamily="avenir"
                      w="340px"
                      h="50px"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                      isRequired
                    />
                  </Flex>
                  <Flex align="center" justify="space-between" mb="15px">
                    <FormLabel
                      pt="2"
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      fontWeight="700"
                      htmlFor="mobileNo"
                    >
                      MOBILE NO.*
                    </FormLabel>
                    <Input
                      id="mobileNo"
                      name="mobileNo"
                      value={mobileNo}
                      onChange={(e) => onChange(e)}
                      type="tel"
                      fontSize="16px"
                      fontFamily="avenir"
                      w="340px"
                      h="50px"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                      isRequired
                    />
                  </Flex>
                  <Flex align="center" justify="space-between" mb="15px">
                    <FormLabel
                      pt="2"
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      fontWeight="700"
                      htmlFor="website"
                    >
                      WEBSITE*
                    </FormLabel>
                    <Input
                      id="website"
                      name="website"
                      value={website}
                      onChange={(e) => onChange(e)}
                      type="url"
                      fontSize="16px"
                      fontFamily="avenir"
                      w="340px"
                      h="50px"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                      isRequired
                    />
                  </Flex>
                  <Flex align="center" justify="space-between" mb="15px">
                    <FormLabel
                      pt="2"
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      fontWeight="700"
                      htmlFor="email"
                    >
                      EMAIL*
                    </FormLabel>
                    <Input
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      type="email"
                      fontSize="16px"
                      fontFamily="avenir"
                      w="340px"
                      h="50px"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                      isRequired
                    />
                  </Flex>
                </Flex>
              </Flex>
              {/* top-right */}
              <Flex w="100%" direction="column">
                <Flex justify="space-between" mb="15px">
                  <FormLabel
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                    htmlFor="yourFocusLocationArea"
                  >
                    YOUR FOCUS <br />
                    LOCATION/ AREA*
                  </FormLabel>
                  <Input
                    id="yourFocusLocationArea"
                    name="yourFocusLocationArea"
                    value={yourFocusLocationArea}
                    onChange={(e) => onChange(e)}
                    type="text"
                    size="lg"
                    fontSize="16px"
                    fontFamily="avenir"
                    w="340px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Heading
                  fontSize="16px"
                  fontFamily="avenir"
                  lineHeight="24px"
                  textAlign="left"
                >
                  EXPERTISE*
                </Heading>
                <Flex
                  w="100%"
                  fontSize="16px"
                  fontFamily="veralaRound"
                  align="center"
                  justify="space-between"
                  mt="15px"
                  mb="15px"
                >
                  <VStack align="flex-start">
                    <Checkbox
                      size="lg"
                      name="Residential"
                      value={residential}
                      checked={residential}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          residential: !residential,
                        });
                      }}
                    >
                      Residential
                    </Checkbox>
                    <Checkbox
                      size="lg"
                      name="Retail"
                      value={retail}
                      checked={retail}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          retail: !retail,
                        });
                      }}
                    >
                      Retail
                    </Checkbox>
                    <Checkbox
                      size="lg"
                      name="Others"
                      value={others}
                      checked={others}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          others: !others,
                        });
                      }}
                    >
                      Others
                    </Checkbox>
                  </VStack>
                  <VStack align="flex-start" pr="10">
                    <Checkbox
                      size="lg"
                      name="Commercial"
                      value={commercial}
                      checked={commercial}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          commercial: !commercial,
                        });
                      }}
                    >
                      Commercial
                    </Checkbox>
                    <Checkbox
                      size="lg"
                      name="Industrial Land"
                      value={industrialLand}
                      checked={industrialLand}
                      onChange={(e) => {
                        setValues({
                          ...initialValues,
                          industrialLand: !industrialLand,
                        });
                      }}
                    >
                      Industrial Land
                    </Checkbox>
                  </VStack>
                </Flex>
                <Input
                  type="text"
                  name="others"
                  value={othersTxt}
                  onChange={(e) => onChange(e)}
                  fontSize="16px"
                  fontFamily="avenir"
                  w="100%"
                  h="50px"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
                <Flex w="100%" direction="column" mt="25px">
                  <Flex align="center" justify="space-between" pb="15px">
                    <FormLabel
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      fontWeight="700"
                      htmlFor="gstNo"
                    >
                      GST No.*
                    </FormLabel>
                    <Input
                      id="gstNo"
                      name="gstNo"
                      value={gstNo}
                      onChange={(e) => onChange(e)}
                      type="text"
                      fontSize="16px"
                      fontFamily="avenir"
                      w="340px"
                      h="50px"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </Flex>
                  <Flex align="center" justify="space-between" pb="15px">
                    <FormLabel
                      pt="2"
                      fontSize="16px"
                      fontFamily="avenir"
                      lineHeight="24px"
                      fontWeight="700"
                      htmlFor="reraNo"
                    >
                      RERA No.*
                    </FormLabel>
                    <Input
                      id="reraNo"
                      name="reraNo"
                      value={reraNo}
                      onChange={(e) => onChange(e)}
                      type="text"
                      fontSize="16px"
                      fontFamily="avenir"
                      w="340px"
                      h="50px"
                      bgColor="#E5E5E5"
                      borderRadius="none"
                    />
                  </Flex>
                  <RadioGroup onChange={(e) => onChange(e)} value={brokerAssoc}>
                    <FormLabel
                      htmlFor="brokerAssoc"
                      fontSize="16px"
                      fontFamily="avenir"
                      mt="10px"
                      textAlign="left"
                      pb="15px"
                    >
                      AFFILIATION TO ANY BROKER ASSOCIATION*
                    </FormLabel>{" "}
                    <Flex
                      justify="space-between"
                      fontFamily="veralaRound"
                      fontSize="20px"
                      pr="8rem"
                    >
                      <Radio value="yes" size="lg">
                        Yes
                      </Radio>
                      <Radio value="no" size="lg">
                        No
                      </Radio>
                    </Flex>
                  </RadioGroup>
                </Flex>
              </Flex>
            </MtnFlx>

            {/* left-bottom */}

            <Flex
              w="100%"
              pb="15px"
              mt="15px"
              align="flex-start"
              justify="center"
            >
              <FormLabel
                pl="10px"
                fontSize="16px"
                fontFamily="avenir"
                lineHeight="24px"
                fontWeight="700"
              >
                IDENTITY <br />
                DOCUMENT*
              </FormLabel>
              <Flex direction="column" align="flex-start">
                <Input
                  type="file"
                  w="353px"
                  h="50px"
                  p="2"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                />
                <Text
                  fontSize="16px"
                  fontFamily="veralaRound"
                  pt="15px"
                  pb="15px"
                >
                  <Icon as={BsUpload} mr="14px" />
                  Upload File
                </Text>
              </Flex>
            </Flex>

            <Flex direction="column" w="100%" align="center" px="202px">
              <Heading
                fontSize="16px"
                fontFamily="avenir"
                lineHeight="24px"
                pb="15px"
              >
                AUTHORISED SIGNATORIES*
              </Heading>
              <Flex>
                <Flex
                  mr="50px"
                  mb="15px"
                  justify="space-between"
                  align="center"
                >
                  <FormLabel
                    pl="10px"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    NAME*
                  </FormLabel>
                  <Input
                    type="text"
                    fontSize="16px"
                    fontFamily="avenir"
                    w="240px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex mb="15px" justify="space-between" align="center">
                  <FormLabel
                    pl="10px"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    DESIGNATION*
                  </FormLabel>
                  <Input
                    type="text"
                    fontSize="16px"
                    fontFamily="avenir"
                    w="240px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </Flex>
              <Flex>
                <Flex mr="50px" justify="space-between" align="center">
                  <FormLabel
                    pl="10px"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    NAME*
                  </FormLabel>
                  <Input
                    type="text"
                    fontSize="16px"
                    fontFamily="avenir"
                    w="240px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
                <Flex justify="space-between" align="center">
                  <FormLabel
                    pl="10px"
                    fontSize="16px"
                    fontFamily="avenir"
                    lineHeight="24px"
                    fontWeight="700"
                  >
                    DESIGNATION*
                  </FormLabel>
                  <Input
                    type="text"
                    fontSize="16px"
                    fontFamily="avenir"
                    w="240px"
                    h="50px"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </Flex>
              </Flex>
            </Flex>
            <Button
              type="submit"
              my="50px"
              h="51px"
              w="168px"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              fontSize="16px"
              fontFamily="avenir"
              px="16px"
              py="15px"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
            >
              SEND MESSAGE
            </Button>
          </FormControl>
        </form>
      </Flex>
      <Flex
        pos="relative"
        w="100%"
        align="center"
        justify="center"
        bgColor="#B88746"
        color="white"
        h="50px"
        fontSize="16px"
        fontFamily="avenir"
      >
        <Flex
          w="100%"
          pos="relative"
          align="center"
          justify="flex-end"
          pr="50px"
          fontFamily="avenir"
          fontSize="16px"
        >
          <Select
            fontFamily="avenir"
            fontSize="16px"
            w="300px"
            // placeholder="SELECT PROJECT"
            textTransform="uppercase"
            variant="flushed"
            borderBottom="2px solid white"
            icon={<TriangleDownIcon width="18px" height="18px" />}
          >
            <option style={{ color: "black" }}>ARETE HOMES</option>
            <option style={{ color: "black" }}>SKY HIGH TOWER</option>
            <option style={{ color: "black" }}>PGC</option>
            <option style={{ color: "black" }}>ARETE PLAZA</option>
            <option style={{ color: "black" }}>ARETE MALL</option>
          </Select>
          {/* <Menu>
            <MenuButton
            fontFamily="avenir"
            fontSize="16px"
            w="300px"
            variant="flushed"
            as={Button}
            rightIcon={<TriangleDownIcon />}
            >
            Actions
            </MenuButton>
            <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu> */}
        </Flex>
        <Flex w="100%" align="center" justify="flex-start" pl="50px">
          <Icon as={AiOutlineDownload} h="30px" w="30px" mr="10px" />
          DOWNLOAD CP-BROCHURE
        </Flex>
      </Flex>
    </>
  );
};

export default ChannelForm;
