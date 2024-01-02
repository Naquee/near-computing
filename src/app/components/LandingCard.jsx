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
        <Image src={hsc} alt="carasole" objectFit="cover" />
      </Box>
      <Card
        w={["100%", "32%"]}
        pos={["static", "absolute"]}
        top={["0", "6rem"]}
        left={["0","1%"]}
        color={["black", "white"]}
        fontSize={["16px", "20px"]}
        background="rgba(0, 136, 255, 0.5)"
        p={["0", "2rem"]}
        mt={["1rem", "0rem"]}
        shadow="lg"
        borderRadius="2xl"
      >
      <motion.div
      animate={animation}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <Center
        width={{ base: "95%", md: "100%" }}
        m="auto"
        color={COLORS.white}
        p={["1rem","0"]}
      >
        <Heading size={{ base: "md", md: "xl" }} letterSpacing="1px">
        Our Service
        </Heading>
      </Center>
      <Divider p={["0","1rem"]}/>
    </motion.div>

        {/* <TopHeading color={COLORS.white} headings="Our Service" /> */}
        <Text p={["1rem","0"]}>
          Unlock the power of seamless productivity with our laptop rental
          services. Whether you are a student in need of a temporary setup or a
          professional on the go, our diverse range of high-performance laptops
          ensures you have the right tool for every task. Experience the latest
          technology without the commitment of ownership – rent a laptop
          tailored to your specific requirements. Enjoy flexible terms, reliable
          performance, and hassle-free delivery. Elevate your work or study
          environment instantly. Rent a laptop today and embrace the convenience
          of top-tier computing without the long-term commitment. Your ideal
          laptop, your terms, at your fingertips.
        </Text>
      </Card>

     <Card
        // w={["100%", "25%"]}
        pos={["static", "absolute"]}
        top={["0", "35rem"]}
        left={["0","68%"]}
        color={["black", "white"]}
        ml={["0","2rem"]}
        mt={["1rem", "0rem"]}
        shadow="lg"
        bgColor="rgba(255, 255, 255, 0)"
      >
      <WhatssApp color="black" bgColor="rgba(252, 249, 249, 0.68)"/>
      </Card>
    </Box>
  );
};

export default LandingCard;
