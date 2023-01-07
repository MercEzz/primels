import React, { useState } from "react";
import { Button, Flex, Heading, Image, Link, Select, Spacer } from "@chakra-ui/react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import styled from 'styled-components';
import { useModalController } from "../hooks/util";
import { HamburgerIcon } from "@chakra-ui/icons";
const StyledHeader = styled.div`
    background-color: rgba(0,0,0,0.2);
    .collapsible-list-button{
      display:flex;
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
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.8);
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
      h="5rem"
      bgColor={navbar ? "#fff" : "rgba(0,0,0,50%)"}
      transition="all 2s"
      align="center"
      justify="center"
      zIndex="999"
      color={navbar ? "black" : "white"}
      boxShadow={navbar ? "2xl" : ""}
    >
      {" "}
      <Flex w="25%"></Flex>
      <Flex alignItems={"center"} w="50%" justifyContent={"center"}>
        <Heading as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
          EXPERTISE
          
        </Heading>
        <Heading as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
          <Link>PROJECTS</Link>
        </Heading>
        <Flex minW="18.75rem" minH="3.75rem" px="1rem" align="center">
          <Image src="/images/logo.png" />
        </Flex>
        <Flex align="center">
        <Heading collapseid={3} onMouseEnter={(data)=>toggleCollapsibleOn(data)} onMouseLeave={(data)=>toggleCollapsibleOff(data)} className="collapsible-list-button" as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
          INVEST
          <div className="collapsible-content3" >
            <Link>WHY INVEST</Link>
          </div>
        </Heading>
        <Heading as="span" fontSize="1rem" fontFamily="avenir" px="1rem">
          <Link>HOUSING</Link>
        </Heading>
      </Flex>
      </Flex>
      <Flex w="25%" justify="flex-end" align="center">
        <Heading as="span" fontFamily="avenir">
          <Button
            my="1rem"
            p="6"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="1rem"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
          >
            ENQUIRE
          </Button>
        </Heading>
        <button style={{marginRight:"100px"}} onClick={()=>open()} >
          <HamburgerIcon my="1rem" w="5rem" h="3.125rem"/>
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
