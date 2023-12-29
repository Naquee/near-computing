"use client";
import {
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import TopHeading from "../components/TopHeading";
import { CPU, laptopsell, Monitor } from "../services/api";
import Image from "next/image";
import { COLORS } from "@/constants/colors";
import UsedLaptop from "../components/UsedLaptop";

const ProductShell = () => {
  return (
    <Box w={["95%", "95%"]} m="auto" mt="5rem">
      <UsedLaptop />
      <Box w="100%">
        <TopHeading headings="Sell Old Laptop" />
        <HStack p="1rem">
          <Text fontSize="25px" color="gray">
            Available Brands
          </Text>
        </HStack>

        <SimpleGrid columns={[2, null, 4]} spacing={5}>
          {laptopsell?.map((item, index) => {
            return (
              <Box key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.7 }}
                  key={item.id}
                >
                  <Card _hover={{ bgColor: COLORS.Aqua }}>
                    <CardBody>
                      <Center>
                        <Image
                          src={item.imgUrl}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          width={100}
                          height={100}
                        />
                      </Center>
                      <Center mt="6" spacing="3">
                        <Heading size="md">{item.title}</Heading>
                      </Center>
                    </CardBody>
                  </Card>
                </motion.div>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>

      <Box w="100%">
        <TopHeading headings="Sell Old Monitors" />
        <HStack p="1rem">
          <Text fontSize="25px" color="gray">
            Available Brands
          </Text>
        </HStack>

        <SimpleGrid columns={[2, null, 4]} spacing={5}>
          {Monitor?.map((item, index) => {
            return (
              <Box key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.7 }}
                  key={item.id}
                >
                  <Card _hover={{ bgColor: COLORS.Aqua }}>
                    <CardBody>
                      <Center>
                        <Image
                          src={item.imgUrl}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          width={100}
                          height={100}
                        />
                      </Center>
                      <Center mt="6" spacing="3">
                        <Heading size="md">{item.title}</Heading>
                      </Center>
                    </CardBody>
                  </Card>
                </motion.div>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>

      <Box w="100%">
        <TopHeading headings="Build Your PC" />
        <HStack p="1rem">
          <Text fontSize="25px" color="gray">
            Available Brands
          </Text>
        </HStack>

        <SimpleGrid columns={[2, null, 3]} spacing={5}>
          {CPU?.map((item, index) => {
            return (
              <Box key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.7 }}
                  key={item.id}
                >
                  <Card _hover={{ bgColor: COLORS.Aqua }}>
                    <CardBody>
                      <Center>
                        <Image
                          src={item.imgUrl}
                          alt="Green double couch with wooden legs"
                          borderRadius="lg"
                          width={100}
                          height={100}
                        />
                      </Center>
                      <Center mt="6" spacing="3">
                        <Heading size="md">{item.title}</Heading>
                      </Center>
                    </CardBody>
                  </Card>
                </motion.div>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProductShell;
