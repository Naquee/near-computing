"use client";
import { React, useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Text,
  Center,
} from "@chakra-ui/react";

import Link from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import NClogo from "../../assets/Nlogo.png";
import Image from "next/image";
import TopNav from "./TopNav";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const navItems = [
    {
      name: "Home",
      url: "/",
      hasMenu: false,
    },
    // {
    //   name: "About Us",
    //   url: "/",
    //   hasMenu: false,
    // },
    {
      name: "Repair",
      url: "/repair",
    },
    {
      name: "Rental Services",
      url: "/laptop-rental",
    },
    {
      name: "Products Sell",
      url: "/product-sell",
    },
    // product-sell

    // {
    //   name: "Our Services",
    //   url: "/services",
    //   hasicon: <MdArrowDropDown />,
    //   hasMenu: true,
    //   menuItems: [
    //     {
    //       itemName: "Home",
    //       url: "/",
    //     },
    //     {
    //       itemName: "Repair",
    //       url: "/repair",
    //     },
    //     {
    //       itemName: "Rental Services",
    //       url: "/laptop-rental",
    //     },
    //     {
    //       itemName: "About Us",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      name: "Contact Us",
      url: "/contact-us",
      hasMenu: false,
    },
  ];

  return (
    <>
      <Box
        w="100%"
        zIndex="100"
        pos="fixed"
        boxShadow="2xl"
        background="white"
        top="0"
      >
        <TopNav />
        <Flex
          width="full"
          justifyContent="space-between"
          display={{ base: "none", md: "flex" }}
        >
          <Box p="0.25rem 0 0.25rem 2rem">
            <Link href="/">
              <Image src={NClogo} alt="Near Computing" />
            </Link>
          </Box>
          <Flex pr="2rem" gap="2rem" pt={5}>
            {navItems.map((item, index) => (
              <Box key={index}>
                {item.hasMenu ? (
                  <Menu color="#0A2A48" strategy="fixed">
                    <Flex justifyContent="center">
                      <MenuButton display="flex" fontWeight="500">
                        {item.name}
                      </MenuButton>
                      <Text fontSize="25px" mt="0.12rem">
                        <MdArrowDropDown />
                      </Text>
                    </Flex>
                    <MenuList>
                      {/* <Text fontSize="25px" mt="0.12rem"><MdArrowDropDown /></Text> */}
                      {item.menuItems.map((menuItem, index) => (
                        <MenuItem color="#0A2A48" key={index}>
                          <Link href={menuItem.url}>{menuItem.itemName} </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Box _hover={{ color: "red.300" }}>
                    <Link color="red" href={item.url}>
                      {item.name}
                    </Link>
                  </Box>
                )}
              </Box>
            ))}
          </Flex>
        </Flex>

        <Flex
          display={{ base: "flex", md: "none" }}
          justifyContent="space-between"
          align="center"
          p="0.25rem"
        >
          <Box p="0.25rem">
            <Link href="/">
              <Image src={NClogo} alt="Near Computing" />
            </Link>
          </Box>

          <IconButton
            float="right"
            justifyContent="center"
            icon={<AiOutlineMenu />}
            ref={btnRef}
            onClick={onOpen}
          ></IconButton>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent flexDir="column">
          <DrawerCloseButton />
          <Box
            pr="2rem"
            gap="2rem"
            textAlign="center"
            mt="1.5rem"
            fontWeight="700"
            _hover="#0A2A48"
          >
            {navItems.map((item, index) => (
              <Center key={index} mb="2rem">
                {item.hasMenu ? (
                  <Menu color="#0A2A48" strategy="fixed">
                    <Flex>
                      <MenuButton fontWeight="500">{item.name}</MenuButton>
                      <Text fontSize="25px" mt="0.12rem">
                        <MdArrowDropDown />
                      </Text>
                    </Flex>
                    <MenuList>
                      {item.menuItems.map((menuItem, index) => (
                        <MenuItem color="#0A2A48" key={index}>
                          <Link onClick={onClose} href={menuItem.url}>
                            {menuItem.itemName}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Box _hover={{ color: "red.300" }}>
                    <Link onClick={onClose} href={item.url}>
                      {item.name}
                    </Link>
                  </Box>
                )}
              </Center>
            ))}
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
