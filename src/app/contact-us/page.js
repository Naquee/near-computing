"use client";
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef } from "react";
import contact from "../contact-us/contact.jpg";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsClock } from "react-icons/bs";
import WhatssApp from "@/app/components/WhatssApp";
import Footer from "@/app/components/Footer";
import Seo from "../components/Seo";

const ContactUs = () => {
  const form = useRef();

  return (
    <Box mt="0rem" w="100%">
      <Seo
        title="Contact Us"
        description="Welcome to our Near Computing contact page, if you have any query  related to PC, Laptop, Monitor, CPU, UPS, Printer connect with us"
      />
      <Image src={contact} alt="" />
      <Flex
        w={{ base: "100%", md: "80%" }}
        pos={{ base: "static", md: "relative" }}
        top={{ base: "0", md: "-25rem" }}
        flexDir={["column", "row"]}
        ml={["0", "2rem"]}
      >
        <Card
          w={["100%", "55%"]}
          bg="white"
          color="black"
          p="1rem"
          shadow="lg"
        >
          <Heading as="h2" size="xl">
            CONTACT US
          </Heading>
          <Box w={["100%", "70%"]} bg="white" color="black" p="1rem">
            <form action="https://formspree.io/f/meqyjvda" method="POST">
              <FormLabel>Enter Your Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Please Enter Your Name"
              />
              <br />
              <FormLabel>Enter Your Name</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Please Enter Your Name"
              />
              <br />
              <FormLabel>Enter Your Query</FormLabel>

              <Textarea name="message" placeholder="Please Enter Your query" />
              <br />
              <br />

              <Button w="100%" colorScheme="teal" type="submit" value="Send">
                Submit
              </Button>
            </form>
          </Box>
        </Card>
        <Box
          top={["0", "6rem"]}
          w={["100%", "40%"]}
          pos={["static", "relative"]}
          left={["0", "-10rem"]}
          bg="#292d33"
          color="white"
          p="2rem"
          display="flex"
          flexDir="column"
          gap="2rem"
        >
          <Box>
            <a href="tel:8962241451">
              <HStack gap="1rem">
                <Stack fontSize="25px">
                  <IoCallOutline />
                </Stack>
                <Stack>
                  <Heading as="h4" size="md">
                    CONTACT US
                  </Heading>
                </Stack>
              </HStack>
              <Text m="0.5rem 0 0 3rem" fontSize="18px">
                9871608330
              </Text>
            </a>
          </Box>

          <Box>
            <a href="mailto:info@nearcomputing.in">
              <HStack gap="1rem">
                <Stack fontSize="25px">
                  <MdOutlineMail />
                </Stack>
                <Stack>
                  <Heading as="h4" size="md">
                    Email Us
                  </Heading>
                </Stack>
              </HStack>
              <Text m="0.5rem 0 0 3rem" fontSize="18px">
                info@nearcomputing.in
              </Text>
            </a>
          </Box>

          <Box>
            <a href="https://maps.app.goo.gl/awmTRiGJChphwbUs5" target="_blank">
              <HStack gap="1rem">
                <Stack fontSize="25px">
                  <CiLocationOn />
                </Stack>
                <Stack>
                  <Heading as="h4" size="md">
                    Location
                  </Heading>
                </Stack>
              </HStack>
              <Text m="0.5rem 0 0 3rem" fontSize="18px">
                Ashoka Bhawan Nehru Place New Delhi (110019)
              </Text>
            </a>
          </Box>
          <Box>
            <a href="tel:8962241451">
              <HStack gap="1rem">
                <Stack fontSize="25px">
                  <BsClock />
                </Stack>
                <Stack>
                  <Heading as="h4" size="md">
                    BUSINESS HOURS
                  </Heading>
                </Stack>
              </HStack>
              <Text m="0.5rem 0 0 3rem" fontSize="18px">
                Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed
              </Text>
            </a>
          </Box>
        </Box>
      </Flex>
      <Box
        w="100%"
        h={["0", "20rem"]}
        border="1px solid blue"
        mt={["0", "-29rem"]}
        bg="#154973"
      >
        {/* <Flex color="white" justifyContent="flex-end" bg="white"> */}
        <Box float="right" p="3rem">
          <WhatssApp bgColor="white" />
        </Box>
        {/* </Flex> */}

        <Box w="100%" h="30rem" mt={["1rem", "20rem"]}>
          <Flex w="100%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.744103237677!2d77.24247665580197!3d28.549155561362507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c59105a87f%3A0x5adea99505f21b93!2sNehru%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703255259727!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Flex>
        </Box>
      </Box>

      <Box mt={["50rem", "29rem"]}>
        <Footer />
      </Box>
    </Box>
  );
};
export default ContactUs;
