import { Box, Divider, Heading, Card, keyframes, Center, Text } from "@chakra-ui/react";
import React from "react";
import hsc from "../../assets/hsc1.jpg";
import Image from "next/image";
import TopHeading from "./TopHeading";
import WhatssApp from "./WhatssApp";
import { COLORS } from "@/constants/colors";
import { motion } from "framer-motion";


const LandingCard = () => {

  const animationKeyframes = keyframes`
  10% { transform: scale(2); }
  100% { transform: scale(1); }`;

  const animation = `${animationKeyframes} 1.5s ease-in-out 1`;
  return (
    <Box>
      <Box bg="#2d2a2b">
        <Image src={hsc} alt="Near Computing" objectFit="cover" />
      </Box>
      <Box
        w={["100%", "30%"]}
        pos={["static", "absolute"]}
        top={["0", "26rem"]}
        left={["0", "37%"]}
        color={["black", "white"]}
        fontSize={["16px", "20px"]}
        fontWeight="bold"
        // background="rgba(252, 249, 249, 0.68)"
        p={["0", "2rem"]}
        mt={["1rem", "0rem"]}
        shadow="lg"
        borderRadius="2xl"
      >
        {/* <TopHeading color={COLORS.white} headings="Our Service" /> */}
        <Text p={["1rem", "0"]} fontSize="30px" fontFamily="Merriweather">
          Welcome to Near Computing
        </Text>
      </Box>

      <Card
        // w={["100%", "25%"]}
        pos={["static", "absolute"]}
        top={["0", "35rem"]}
        left={["0", "78%"]}
        color={["black", "white"]}
        ml={["0", "2rem"]}
        mt={["1rem", "0rem"]}
        shadow="lg"
        bgColor="rgba(255, 255, 255, 0)"
      >
        <WhatssApp color="black" bgColor="rgba(252, 249, 249, 0.68)" />
      </Card>
    </Box>
  );
};

export default LandingCard;
