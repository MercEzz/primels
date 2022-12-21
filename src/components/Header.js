import React, { useState } from "react";
import { Button, Flex, Heading, Image, Link, Select, Spacer } from "@chakra-ui/react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import styled from 'styled-components';
import { useModalController } from "../hooks/util";
const StyledHeader = styled.div`
    .collapsible-list-button{
      display:flex;
      color: black;
      cursor: pointer;
      width: 100%;
    }
    .collapsible-list-button:hover{
      color: #B88746;
    }
    .collapsible-content{
      display: none;
      list-style-type: none;
    }
    .collapsible-content1{
      display: none;
      list-style-type: none;
    }
    .collapsible-content2{
      display: none;
      list-style-type: none;
    }
    .collapsible-content3{
      display: none;
      list-style-type: none;
      top:65%;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    .collapsible-content4{
      display: none;
      list-style-type: none;
    }
    .collapsible-content5{
      display: none;
      list-style-type: none;
    }
  `
const Header = () => {
  const {isModalOpen,close,open} = useModalController();
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  const toggleCollapsibleOn=(data)=>{
    const collapse=document.getElementsByClassName(`collapsible-content${data.target.getAttribute("collapseid")}`);
    let i=0;
    for (i; i < collapse.length; i++) {
      collapse[i].style.display = "block";
    }
  }
  const toggleCollapsibleOff=(data)=>{
    const collapse=document.getElementsByClassName(`collapsible-content${data.target.getAttribute("collapseid")}`);
    let i=0;
    for (i; i < collapse.length; i++) {
        collapse[i].style.display = "none";
    }
  }
  return (
    <StyledHeader>
    <Flex
      pos="fixed"
      top="0"
      w="100%"
      h="100px"
      bgColor={navbar ? "#fff" : "transparent"}
      transition="all 2s"
      align="center"
      justify="center"
      zIndex="11"
      color="black"
    >
      {" "}
      <Flex w="25%"></Flex>
      <Flex alignItems={"center"} w="50%" justifyContent={"center"}>
        <Heading as="span" fontSize="16px" fontFamily="avenir" px="3">
          EXPERTISE
          
        </Heading>
        <Heading as="span" fontSize="16px" fontFamily="avenir" px="3">
          <Link>PROJECTS</Link>
        </Heading>
        <Flex minW="350px" maxH="78px" px="3" align="center">
          <Image w="100%" h="100%" src="/images/logo.png" />
        </Flex>
        <Heading collapseid={3} onMouseEnter={(data)=>toggleCollapsibleOn(data)} onMouseLeave={(data)=>toggleCollapsibleOff(data)} className="collapsible-list-button" as="span" fontSize="16px" fontFamily="avenir" px="3">
          INVEST
          <div className="collapsible-content3" >
            <Link>WHY INVEST</Link>
          </div>
        </Heading>
        <Heading as="span" fontSize="16px" fontFamily="avenir" px="3">
          <Link>HOUSING</Link>
        </Heading>
      </Flex>
      <Flex w="25%" justify="flex-end" align="center">
        <Heading as="span" fontFamily="avenir">
          <Button
            my="4"
            p="6"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="16px"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            ENQUIRE
          </Button>
        </Heading>
        <button onClick={()=>open()} >
          <HiOutlineMenuAlt1 fontSize="60px" px="4" w="100%" h="100%" />
        </button>
        {isModalOpen?
        <Flex style={{position:"absolute",top:"0",left:"0",zIndex:"999"}}>
          <div style={{width:"80vw",height:"100vh",backgroundColor: "rgba(0,0,0,0.7)",}} onClick={()=>close()}>
          </div>
          <div style={{width:"20vw",color:"black",backgroundColor:"white",paddingLeft:"2rem",paddingRight:"2rem"}}>
              <button style={{height:"1rem",width:"1rem",align:"right",backgroundColor:"grey",borderRadius:"50%"}} onClick={()=>close()}><sup>X</sup></button>
              <br/>
              <Link>ABOUT US</Link>
              <hr/>
              <Link>EXPERTISE</Link>
              <hr/>
              <Link>PROJECTS</Link>
              <hr/>
              <Link>INVEST</Link>
              <hr/>
              <Link>PGC MEMBERSHIP</Link>
              <hr/>
              <Link>SERVICED HOUSING</Link>
              <br/>
              <br/>
              <br/>
              <Link href="/channel-partner">CHANNEL PARTNER LOGIN</Link>
              <hr/>
              <Link>NEWS & MEDIA</Link>
              <hr/>
              <Link>REFER & EARN</Link>
              <hr/>
              <Link>CONTACT US</Link>
              <hr/>
              <Link>CAREERS</Link>
              <hr/>
              <Link>BLOG</Link>
          </div>
        </Flex>
        :<></>}
      </Flex>
    </Flex>
    </StyledHeader>
  );
};

export default Header;
