import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Head from "./head";
import Seo from "./components/Seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Near Computing",
  description:
    "Welcome to Near computing for old laptop ,second laptop,refurbished laptop,second hand laptop, buy second hand laptop, second hand laptop insurance, second hand laptop store near me, second hand laptop near me s,econd hand laptop price, second hand laptop for sale",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  mainfest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Seo
        title="Near Computing"
        description="Welcome to Near computing for old laptop ,second laptop,refurbished laptop,second hand laptop, buy second hand laptop, second hand laptop insurance, second hand laptop store near me, second hand laptop near me s,econd hand laptop price, second hand laptop for sale"
      />
      <body>
      
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
