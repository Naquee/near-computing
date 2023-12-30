"use client";
import Footer from "@/app/components/Footer";
import LaptoRentalCard from "@/app/components/LaptopRentalCard";
import TopHeading from "@/app/components/TopHeading";
import { rent } from "@/app/services/api";
import { Box } from "@chakra-ui/react";
import React from "react";
import Seo from "../components/Seo";

const RentalService = () => {
  return (
    <Box>
    <Seo title="Laptop Rental" description="Welcome to our Near Computing , if you are Rental Laptop you can connect with us we are provide all types of laptop,desktop in afforable price"/>
      <LaptoRentalCard />
      <Footer />
    </Box>
  );
};

export default RentalService;
