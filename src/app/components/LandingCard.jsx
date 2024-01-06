import {
  Box,
  Divider,
  Heading,
  Card,
  keyframes,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";
import hsc from "../../assets/hsc1.jpg";
import Image from "next/image";
import TopHeading from "./TopHeading";
import WhatssApp from "./WhatssApp";
import { COLORS } from "@/constants/colors";
import { motion } from "framer-motion";
import LandingWhatsappCard from "./LandingWhatsappCard";

const LandingCard = () => {
  const animationKeyframes = keyframes`
  10% { transform: scale(2); }
  100% { transform: scale(1); }`;

  const animation = `${animationKeyframes} 1.5s ease-in-out 1`;
  return (
    <Box>
      <Box bg="#2d2a2b" mt={["3rem", "0"]}>
        <Image src={hsc} alt="Near Computing" objectFit="cover" />
      </Box>
      <Box
        w={["100%", "30%"]}
        pos={["relative", "relative"]}
        top={["-10rem", "-6rem"]}
        left={["20%", "3%"]}
        color={["white", "white"]}
        fontWeight="bold"
        // background="rgba(252, 249, 249, 0.68)"
      >
        <Text p={["1rem", "0"]} fontFamily="Merriweather" fontSize={["16px", "30px"]}>
          Welcome to Near Computing
        </Text>
      </Box>

      <Box  pos="fixed" left={["80%","85%"]} top={["28%","70%"]} zIndex="100">
        <LandingWhatsappCard color="white" bgColor="rgba(0, 128, 255, 0.31)" />
      </Box>
    </Box>
  );
};

export default LandingCard;
