import React from 'react'

import {
    Box,
    Flex,
    Text,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
    BsFillTelephoneFill,
    BsFacebook,
    BsTwitter,
    BsLinkedin,
    BsGoogle,
    BsInstagram,
} from "react-icons/bs";

const TopNav = () => {
    return (
        <Box background="#161616">
            <Flex
                p="0.5rem"
                justifyContent="space-between"
                w="90%"
                m="auto"
                display={{ base: "none", md: "node", lg: "flex" }}
                color="white"
            // overflow="hidden"
            >
                <Box display="flex" gap="1rem">
                    <a
                        href="https://maps.app.goo.gl/eQsMadngkh1BjSMc9"
                        target="_blank"
                        mt="0.25rem"
                    >
                        <FaMapMarkerAlt />
                    </a>
                    <Text>
                        Ashoka Bhawan Nehru Place New Delhi (110019) India
                    </Text>
                    <Flex gap="0.5rem" fontSize="16px">
                        <Box mt="0.25rem">
                            <BsFillTelephoneFill />
                        </Box>
                        <a href="tel:9874563217">+91 9871 608 330</a>
                    </Flex>
                </Box>
                <Flex gap="1rem">
                    <a href="#">
                        <BsFacebook />
                    </a>
                    <a href="#">
                        <BsTwitter />
                    </a>
                    <a href="#">
                        <BsLinkedin />
                    </a>
                    <a href="https://www.instagram.com/aliitservices/?igsh=ZjA3NGRoeGVnbjZv" target="_blank">
                        <BsInstagram />
                    </a>
                </Flex>
            </Flex>
        </Box>
    )
}

export default TopNav
