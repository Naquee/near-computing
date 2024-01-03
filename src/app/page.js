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
import Seo from "./components/Seo";
import Navbar from "./components/Navbar";

export default function Home() {
  // console.log("rent", rent);

  return (
    <main>
      <Box mt={["2rem", "0"]}>
        {/* <CommingSoon/> */}
        {/* <Carasole/> */}
        <Seo
          title="Near Computing"
          description="Welcome to Near computing for old laptop ,second laptop,refurbished laptop,second hand laptop, buy second hand laptop, second hand laptop insurance, second hand laptop store near me, second hand laptop near me s,econd hand laptop price, second hand laptop for sale"
        />
        <Box mt={["-2rem", "0"]}>
          <Navbar />
        </Box>
        <LandingCard />
        <LaptoRentalCard />
        <UsedLaptop />
        <RepairCard />
        <Footer />
      </Box>
    </main>
  );
}
