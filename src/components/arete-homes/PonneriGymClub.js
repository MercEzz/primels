import { Flex, Image, Text, Box, IconButton, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const SeventhSec = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      py="6.25rem"
      px="1.562rem"
    >
      <Text fontFamily="goudy" fontSize="2.5rem" pb="1.562rem">
        PVT. PONNERI GYMKHANA CLUB
      </Text>
      <Box
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        pl="4.687rem"
        pr="3.75rem"
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {gymclubimgs.map((prime) => (
            <Image
              key={prime}
              w="100%"
              height="15.437rem"
              pr="0.937rem"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="fill"
              src={prime}
            />
          ))}
        </Slider>
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          position="absolute"
          top="50%"
          left="0"
          h="3.125rem"
          w="3.125rem"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
          }}
        >
          <AiOutlineLeft color="#B88746" size="2.5rem" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          position="absolute"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          right="0"
          top="50%"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            slider?.slickNext();
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
      </Box>
      <Button
        w="10.875rem"
        h="3.187rem"
        mt="1.562rem"
        fontSize="1rem"
        fontFamily="avenir"
        bgGradient="linear(to-b, #B88746 ,#DFBD69)"
        color="white"
        _hover={{
          bgGradient: "linear(to-b, #DFBD69, #B88746)",
        }}
        _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
      >
        EXPLORE MORE
      </Button>
    </Flex>
  );
};

export default SeventhSec;

const gymclubimgs = [
  "/images/arete-homes/PGC-ACTIVITY AREA.jpeg",
  "/images/arete-homes/PGC-BANQUET HALL.jpg",
  "/images/arete-homes/PGC-CAFETERIA.jpg",
  "/images/arete-homes/PGC-GRAND ENTRANCE.jpg",
  "/images/arete-homes/PGC-GYM.jpg",
  "/images/arete-homes/PGC-multi sports arena.jpg",
  "/images/arete-homes/PGC-SQUASH COURT.jpg",
  "/images/arete-homes/PGC-SWIMMING POOL.jpg",
];
