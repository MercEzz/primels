import { Flex, Text, Image } from "@chakra-ui/react";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const MtnTxt = motion(Text);
const MtnFlx = motion(Flex);

const ThirdSec = () => {
  const ref = useRef(null);
  const videoRef= useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const animateY = useAnimation();
  const animateScale = useAnimation();
  const stopAllYouTubeVideos = () => { 
    const iframes = document.querySelectorAll('iframe');
    Array.prototype.forEach.call(iframes, iframe => { 
      iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
    func: 'stopVideo',"args":"" }), '*');
   });
  }
  useEffect(() => {
    if (useInView) {
      animateY.start({
        y: 0,
        opacity: 1,
      });
      animateScale.start({
        scale: 1,
      });
    }
  }, [isInView, animateY, animateScale]);
  useLayoutEffect(()=>{
    console.log(videoRef.current)
    return()=>{
    }
  },[videoRef]);
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pt="3.125rem"
      px="6.25rem"
      pb="3.125rem"
    >
      <MtnTxt
        initial={{ y: -50, opacity: 0 }}
        animate={animateY}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontSize="2.5rem"
        mb="1.875rem"
      >
        MASTER PLAN
      </MtnTxt>
      <Flex w="100%" h="100%">
        <MtnFlx
          initial={{ scale: 0.6 }}
          animate={animateScale}
          transition={{ duration: 2, type: "just" }}
          w="100%"
          h="100%"
        >
          <Image w="100%" h="31.25rem" src="/images/arete-homes/MASTER PLAN.jpg" />
        </MtnFlx>
        <MtnFlx
          ml="1.75rem"
          initial={{ scale: 0.6 }}
          animate={animateScale}
          transition={{ duration: 2, type: "just" }}
          w="100%"
          h="29.25rem"
        >
          <iframe ref={videoRef}  width="100%" height="100%" src="https://www.youtube.com/embed/qpTPxUiQqbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </MtnFlx>
      </Flex>
    </Flex>
  );
};

export default ThirdSec;
