import { Box, Button, ButtonGroup, Card, CardFooter, Flex, Text } from "@chakra-ui/react";
import React from "react";
import hsc from "../../assets/hsc11.jpg";
import Image from "next/image";
import TopHeading from "./TopHeading";
import WhatssApp from "./WhatssApp";

const LandingCard = () => {
  return (
    <Box border="1px solid red" >
      <Box bg="#2d2a2b">
        <Image src={hsc} alt="carasole" objectFit="cover" />
      </Box>

      <Card
        w={["100%", "40%"]}
        pos={["static", "absolute"]}
        top={["0", "7rem"]}
        left={["0","58%"]}
        color={["black", "white"]}
        fontSize={["16px", "20px"]}
        bg="rgba(255, 255, 255, 0.5)"
        p={["0", "2rem"]}
        // mt={["1rem", "0rem"]}
        shadow="lg"
      >
        <TopHeading headings="Our Service" />
        <Text>
          Unlock the power of seamless productivity with our laptop rental
          services. Whether you're a student in need of a temporary setup or a
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
        w={["100%", "25%"]}
        pos={["static", "absolute"]}
        top={["0", "30rem"]}
        color={["black", "white"]}
        ml={["0","2rem"]}
        mt={["1rem", "0rem"]}
        shadow="lg"
      >
      <WhatssApp bgColor="rgba(255, 255, 255, 0.5)"/>
      </Card>
    </Box>
  );
};

export default LandingCard;
