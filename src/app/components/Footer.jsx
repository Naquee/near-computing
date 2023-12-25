import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import NClogo from "../../assets/Nlogo.png";
import Image from "next/image";
import whatsapp from "../../assets/whatsapp_icon.svg"
const Footer = () => {

  const handleButtonClick = () => {
    const phoneNumber = '7050800356'; // Replace with the desired phone number
    const message = 'Hey i have query'; // Replace with your default message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
};
  return (
    <Box w="100%" bg="#292d33" mt="2rem">
      <Flex
        w="90%"
        m="auto"
        gap="2rem"
        justifyContent="center"
        mt="3rem"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        pt={{ base: "3rem", md: "3rem" }}
        color="white"
      >
        <Box
          w={{ base: "100%", md: "25%" }}
          px={["2rem", "1rem"]}
          textAlign="start"
        >
          <Box>
            <Text fontSize="20px">Near Computing</Text>
            {/* <Text fontSize="20px"></Text> */}
            <Box p="0.25rem">
              <Link href="/">
                <Image src={NClogo} alt="logo" />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          w={{ base: "100%", md: "20%" }}
          px={["2rem", "1rem"]}
          textAlign="start"
        >
          <Text fontSize="25px">Important Links</Text>
          <Flex flexDir="column" mt="1.5rem" fontSize="18px" color="gray.300">
            <Link href="/appointment">Our Service</Link>
            <Link href="/doctors">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">Contact Us</Link>
          </Flex>
        </Box>
        <Box
          w={{ base: "100%", md: "30%" }}
          px={["2rem", "1rem"]}
          textAlign="start"
        >
          <Text fontSize="25px">Contact Us</Text>
          <Flex
            flexDir="column"
            mt="1.5rem"
            gap="0.5rem"
            color="gray.300"
            fontSize="18px"
          >
            <Text>
              <Text fontWeight="bold" as="span">
                Call : (+91)
              </Text>{" "}
              <a href="tel:9874563217"> </a>
            </Text>
            <Text>
              {" "}
              <Text fontWeight="bold" as="span">
                Email :
              </Text>
              <a href="mailto:info@nearcomputing.in">info@nearcomputing.in</a>
            </Text>
          </Flex>
          <Text mt="0.5rem" color="gray.300">
            <Text fontWeight="bold" as="span">
              Address :{" "}
            </Text>
            Nehru Place New Delhi (110019) India
          </Text>
        </Box>
        <Box
          w={{ base: "100%", md: "25%" }}
          // px={["2rem", "1rem"]}
          textAlign="start"
        >
          <Text fontSize="25px">Social Media</Text>
          <Flex
            width="90%"
            fontSize="30px"
            mt="1.5rem"
            gap="1.5rem"
            // justify="center"
            color="gray.200"
          >
           <Box  w="35px" h="35px" cursor="pointer" onClick={handleButtonClick}>
            <Image src={whatsapp} alt='whatsapp'/>
            </Box>
            <a
              href="https://www.linkedin.com/in/dr-tariq-ortho-basti-86a7a8154/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://www.facebook.com/hajrahospitalbasti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/__hajra__hospital__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
           
            {/* <WhatssApp/> */}
          </Flex>
        </Box>
      </Flex>
      <Box w="90%" m="auto" fontSize="20px" fontWeight="bold">
        <Divider border="2px solid gray.300" mt="1rem" />
      </Box>
      <Center
        w={{ base: "99%", md: "40%" }}
        m="auto"
        p="2rem"
        fontSize={{ base: "16px" }}
      >
        <Text fontSize={{ base: "12px", md: "16px" }} color="white">
          All Rights Reserved.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
