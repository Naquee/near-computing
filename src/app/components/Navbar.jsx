"use client";
import { React, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  UnorderedList,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Input,
  Grid,
  Text,
  keyframes,
  Image,
  Center,
} from "@chakra-ui/react";

import Link from "next/link";
import { IoCaretDownSharp, IoChevronDownOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useBoolean, useDisclosure } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = ({ color = "blue" }) => {
  const [flag, setFlag] = useBoolean(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const navItems = [
    {
      name: "Home",
      url: "/",
      hasMenu: false,
    },
    {
      name: "About Us",
      url: "/about-us",
      hasMenu: false,
    },
    {
      name: "Our Services",
      url: "/services",
      hasMenu: true,
      menuItems: [
        {
          itemName: "Home",
          url: "/",
        },
        {
          itemName: "Repair",
          url: "./page/repair/page",
        },
        {
          itemName: "About Us",
          url: "#",
        },
        // {
        //   itemName: "Management",
        //   url: "/about-us/management",
        // },
        {
          itemName: "Term And Condition",
          url: "#",
        },
      
      ],
    },
    {
      name: "Contact Us",
      url: "/page/contact-us",
      hasMenu: false,
    },
  ];

  return (
    <>
      <Box w="full" zIndex="100" pos="fixed" boxShadow="2xl" background="white">
        <Flex
          width="full"
          justifyContent="space-between"
          p={5}
          display={{ base: "none", md: "flex" }}
        >
          <Box pl="3rem">
            <Link href="/">LOGO</Link>
          </Box>
          <Flex pr="2rem" gap="2rem">
            {navItems.map((item, index) => (
              <Box key={index}>
                {item.hasMenu ? (
                  <Menu color="#0A2A48" strategy="fixed">
                  <Flex justifyContent='center'>
                    <MenuButton display="flex" fontWeight="500">{item.name} </MenuButton>
                    <Text fontSize="25px" mt="0.12rem"><MdArrowDropDown /></Text> 
                    </Flex>
                    <MenuList>
                      {item.menuItems.map((menuItem, index) => (
                        <MenuItem color="#0A2A48" key={index}>
                          <Link href={menuItem.url}>{menuItem.itemName} </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Link href={item.url}>{item.name}</Link>
                )}
              </Box>
            ))}
          </Flex>
        </Flex>
        <IconButton
        float="right"
        m="0.5rem 0.5rem 0 0 "
          display={{ base: "flex", md: "none" }}
          justifyContent="center"
          icon={<AiOutlineMenu />}
          ref={btnRef}
          onClick={onOpen}
        ></IconButton>
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
          <Box pr="2rem" gap="2rem" textAlign="center"  mt="1.5rem" fontWeight="700" _hover="#0A2A48">
            {navItems.map((item, index) => (
              <Center key={index}  mb="2rem">
                {item.hasMenu ? (
                  <Menu color="#0A2A48" strategy="fixed">
                    <MenuButton fontWeight="500">{item.name}</MenuButton>
                    <MenuList>
                      {item.menuItems.map((menuItem, index) => (
                        <MenuItem color="#0A2A48" key={index}>
                          <Link href={menuItem.url}>{menuItem.itemName}</Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Link href={item.url}>{item.name}</Link>
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
