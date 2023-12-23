"use client";
import Image from "next/image";
import styles from "./page.module.css";
import laptop from "../assets/laptop.jpg";
import {
  Box,
  Card,
  Heading,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import TopHeading from "./components/TopHeading";
import Repair from "./page/repair/page";
import Footer from "./components/Footer";
import { rent } from "./services/api";
import { motion } from "framer-motion";
import Link from "next/link";
import Carasole from "./components/Carasole";
import LandingCard from "./components/LandingCard";
import { useState } from "react";
import CommingSoon from "./components/CommingSoon";

export default function Home() {
  // console.log("rent", rent);
  return (
    <main>
      <Box mt="3rem">

      {/* <CommingSoon/> */}



      {/* <Carasole/> */}
      <LandingCard/>
        <Box>
        <TopHeading headings="OUR RENTAL PRODUCTS" />
          <SimpleGrid
          mt={["0","1rem"]}
            columns={[1, 2, 3]}
            spacing="20px"
            justifyContent="center"
            w="95%"
            m="auto"
          >
            {rent?.map((item) => {
              return (
                <motion.div 
                whileHover={{ scale: 1.1 }}
                 key={item.id}
                >
                  <Card
                  // minH="30rem"
                  // maxH="35rem"
                    maxW="md"
                    shadow="2xl"
                    rounded="lg"
                    whileHover={{ scale: 1.1 }}
                    p={{base:"0",md:"0 1rem 0 1rem"}}
                    cursor="pointer"
                  >
                    <CardBody>
                      <Image
                        src={item.ImageUrl}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                        width="100px"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading fontSize="25px" size="md" color="#5b5bbf">
                          {item.name}
                        </Heading>
                      </Stack>
                      <Text mt="1rem" color="gray.600" fontSize="18px">
                        {item.title}
                      </Text>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing="2">
                      <Link href={`details/${item.id}`}>
                        <Button variant="solid" colorScheme="blue">
                          Read More...
                        </Button>
                        </Link>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </SimpleGrid>
        </Box>
        {/* </Box> */}

        <Repair />
        <Footer />
      </Box>
    </main>
  );
}
