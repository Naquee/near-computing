import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import whatsapp from "../../assets/whatsapp.svg";

const LandingWhatsappCard = ({ bgColor, color }) => {
  const handleButtonClick = () => {
    const phoneNumber = "9871608330"; // Replace with the desired phone number
    const message = "Hey i have query"; // Replace with your default message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <Box>
      <Flex
        maxW="sm"
        background={bgColor}
        color={color}
        p="0.5rem"
        gap="0.5rem"
        borderRadius="30px"
      >
        <Center cursor="pointer" onClick={handleButtonClick}>
          <Image src={whatsapp} alt="Near Computing"/>
        </Center>
        <Center textAlign="center" p={["0","0.5rem 0.5rem 0.5rem 0"]} display={["none","block"]}>
          <Text fontWeight={["none","bold"]} size={["sm","md"]}>Quick Response</Text>
        </Center>
      </Flex>
    </Box>
  );
};

export default LandingWhatsappCard;
