import { Image, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const MainSec = () => {
  const [dis, setDis] = useState(false);
  const track = () => {
    if (window.scrollY > 370) {
      setDis(true);
    } else {
      setDis(false);
    }
  };

  window.addEventListener("scroll", track);

  return (
    <Flex
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      pos="relative"
      overflow="hidden"
    >
      <video
        autoPlay
        muted
        // loop
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          minHeight: "100%",
          minWidth: "100%",
          // zIndex: -1,
        }}
      >
        <source
          src="/images/channel-partner/handshake-done.mp4"
          type="video/mp4"
        />
        {/* <source src="/images/energy/solar1.mp4" type="video/mp4" /> */}
      </video>
      <Heading
        // bottom={dis ? "0" : "30vh"}
        pos={dis ? "static" : "fixed"}
        fontSize="40px"
        fontFamily="avenir"
        lineHeight="57px"
        textTransform="uppercase"
        textAlign="center"
        zIndex="10"
        color={dis ? "black" : "white"}
        transition="ease-in-out 200ms"
      >
        where opportunities pave the way for <br />
        incredible rewards
      </Heading>
    </Flex>
  );
};

export default MainSec;
