"use client";
import {
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopHeading from "./TopHeading";
import { rent } from "../services/api";

const LaptoRentalCard = () => {
  return (
    <Box mt={["-4rem", "-2rem"]}>
      <TopHeading headings="OUR RENTAL PRODUCTS" />
      <SimpleGrid
        mt={["0", "1rem"]}
        columns={[1, 2, 3]}
        spacing="20px"
        justifyContent="center"
        w={["95%", "85%"]}
        m="auto"
      >
        {rent?.map((item) => {
          return (
            <motion.div whileHover={{ scale: 1.03 }} key={item.id}>
              <Link href={`details/${item.id}`}>
                <Card
                  mt="2rem"
                  maxW="100%"
                  shadow="lg"
                  rounded="lg"
                  boxShadow="outline"
                  p="6"
                  cursor="pointer"
                  // whileHover={{ scale: 1.1 }}
                  // p={{ base: "0", md: "0 1rem 0 1rem" }}
                >
                  <CardBody>
                    <Image
                      src={item.ImageUrl}
                      alt="Near Computing"
                      borderRadius="lg"
                      width="50px"
                      height="100px"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading fontSize="25px" size="md" color="#5b5bbf">
                        {item.name}
                      </Heading>
                    </Stack>
                    <Text mt="1rem" color="gray.600" fontSize="16px">
                      {item.title.length > 100
                        ? item.title.slice(0, 180) + "..."
                        : item.title}
                    </Text>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant="solid" colorScheme="blue">
                        Read More...
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default LaptoRentalCard;
