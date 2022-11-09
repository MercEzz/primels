import { Button } from "@chakra-ui/react";
import React from "react";

import { BsDownload } from "react-icons/bs";

const DownloadBtn = () => {
  return (
    <Button
      pos="fixed"
      bottom="50px"
      left="50px"
      borderRadius="50%"
      h="80px"
      w="80px"
      zIndex="99"
      bgGradient="linear(to-b, #B88746 ,#DFBD69)"
      color="black"
      _hover={{
        bgGradient: "linear(to-b, #DFBD69, #B88746)",
      }}
      _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
    >
      <BsDownload size="40px" />
    </Button>
  );
};

export default DownloadBtn;
