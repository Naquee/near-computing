"use client";
import Footer from "@/app/components/Footer";
import LaptoRentalCard from "@/app/components/LaptopRentalCard";
import TopHeading from "@/app/components/TopHeading";
import { rent } from "@/app/services/api";
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
  ButtonGroup
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RentalService = () => {
  return (
    <Box>
     <LaptoRentalCard/>
      <Footer/>
    </Box>
  );
};

export default RentalService;
