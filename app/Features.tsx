import React from 'react'
import {Box , Flex , HStack , Icon , Text} from "@chakra-ui/react"
import Icon1 from './Icon1'
import Icon2 from './Icon2'
import Icon3 from './Icon3'
export default function Features() {
  return <>
  <Box maxW={"850px"} m="auto" mt={"30px"} pl="25px">
<Flex direction={{base: "column" , md: "column" , lg: "row"}}>
<HStack mb={"15px"}>
    <Icon as={Icon1}></Icon>
    <Text> 30 days money back Guarantee</Text>

</HStack>

<HStack mb={"15px"}>
    <Icon as={Icon2}></Icon>
    <Text>
    No setup fees
100% hassle-free
    </Text>

</HStack>

<HStack mb={"15px"}>
    <Icon as={Icon3}></Icon>
    <Text> No monthly subscription
Pay once and for all</Text>

</HStack>
</Flex>

  </Box>
  
  
  </>
}
