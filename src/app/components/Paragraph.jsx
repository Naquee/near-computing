import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Paragraph = ({para,width}) => {
  return (
    <Flex w={{base:"95%",md:"70%"}} justifyContent="center" p="1rem">
    <Text  fontSize="20px">{para}</Text>
    </Flex>
  )
}

export default Paragraph