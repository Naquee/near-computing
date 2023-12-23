import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const CardWithIcon = () => {
//    const navigate = useNavigate();
  return (
    <Box
      width={{ base: "100%", md: width }}
      bgColor={item.bgcolor}
      color={item.color}
      p={p}
      borderRadius="lg"
      mt={mt}
      
    >
      <Box
        fontSize={item?.fontSize}
        pl={item?.pl}
        gap={item?.gap}
        cursor="pointer"
        display={flex}
        justifyItems="center"
        flexFlow={flexFlow}
        flexDirection={column_reverse}
        onClick={() => navigate(`/${item.navigate?item.navigate:""}`)}
      >
        <Box>{item?.title}</Box>
        <Box mt="0.5rem" fontSize="18px">
          <Box p="0.5rem">{item?.title1}</Box>
          <Box p="0.25rem">{item?.title2}</Box>
        </Box>
        <Flex justifyContent="center">
          <Image src={item?.icon} alt="image is not support" width="3rem" />
        </Flex>
      </Box>
    </Box>
  )
}

export default CardWithIcon