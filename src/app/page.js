"use client";
import Image from "next/image";
import styles from "./page.module.css";
import laptop from "../assets/laptop.jpg";
import { Box } from "@chakra-ui/react";
// import Repair from "./page/repair/page";
import Footer from "./components/Footer";
import LandingCard from "./components/LandingCard";
import LaptoRentalCard from "./components/LaptopRentalCard";
import RepairCard from "./components/RepairCard";
import { laptopsell } from "./services/api";
import UsedLaptop from "./components/UsedLaptop";

export default function Home() {
  // console.log("rent", rent);

  return (
    <main>
      <Box mt={["2rem","0"]}>
        {/* <CommingSoon/> */}
        {/* <Carasole/> */}
        <LandingCard />
        <LaptoRentalCard />
        <UsedLaptop/>
        <RepairCard />
        <Footer />
      </Box>
    </main>
  );
}
