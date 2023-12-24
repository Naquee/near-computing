import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
//   const navigate = useNavigate();
  return (
    <Box w="100%" bg="#292d33" mt="2rem">
      <Flex
        w="80%"
        m="auto"
        gap="2rem"
        justifyContent="center"
        mt="3rem"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        pt={{ base: "3rem", md: "3rem" }}
        color="white"
      >
         <Box
          w={{ base: "100%", md: "20%" }}
          px={["2rem", "1rem"]}
          textAlign="start"
        >
         <Box>
          <Text fontSize="25px">Ali Rental</Text>
          <Text>Logo</Text>
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
              <a href="mailto:info@nearcomputing.in">
              info@nearcomputing.in
              </a>
            </Text>
          </Flex>
          <Text mt="0.5rem" color="gray.300">
            <Text fontWeight="bold" as="span">
              Address :{" "}
            </Text>
            Nehru Place New Delhi (110019)
            India
          </Text>
        </Box>
        <Box
          w={{ base: "100%", md: "20%" }}
          px={["2rem", "1rem"]}
          textAlign="start"
        >
          <Text fontSize="25px">Social Media</Text>
          <Flex
            width="60%"
            fontSize="30px"
            mt="1.5rem"
            gap="1.5rem"
            justify="center"
            color="gray.200"
          >
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
          </Flex>
        </Box>
      </Flex>
      <Box w="80%" m="auto" fontSize="20px" fontWeight="bold">
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
