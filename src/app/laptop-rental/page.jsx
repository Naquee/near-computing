"use client";
import Footer from "@/app/components/Footer";
import LaptoRentalCard from "@/app/components/LaptopRentalCard";
import TopHeading from "@/app/components/TopHeading";
import { rent } from "@/app/services/api";
import { Box } from "@chakra-ui/react";
import React from "react";

const RentalService = () => {
  return (
    <Box>
      <LaptoRentalCard />
      <Footer />
    </Box>
  );
};

export default RentalService;
