import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
  Image,
  VStack,
  Stack
} from "@chakra-ui/react";
import '../styles/Hero.css';

const Hero = () => {
  return (
    // <Flex px={4} py={8} mx="auto" id="about" mt={0}>
    //   <Box display={'flex'} mx="auto" pt={8} maxW={'1000px'} h={'100vh'} alignItems={'center'} justifyContent={'center'} border={'1px solid red'}>
    //     <Stack
    //       mx="auto" minW={{ lg: 1000 , xl: 1000 }}
    //       direction={{ base: 'column', md: 'row' }}
    //       align={{ base: 'center', md: 'space-between' }}
    //       className="fadeUp hero"
    //       px={4}
    //       // h={'100vh'}
    //       mt={0}
    //       border={'1px solid red'}
    //     >

    //       <VStack align={{ base: 'center', md: 'start' }}>
    //         <chakra.h1
    //           mb={0}
    //           fontSize={{ base: "4xl", md: "xxl" }}
    //           fontWeight="bold"
    //           // lineHeight="shorter"
    //           color={useColorModeValue("brand.100", "brand.100")}
    //         >
    //           gusgluna
    //         </chakra.h1>
    //         <chakra.p mb={5} color="gray.500" fontSize={{ md: "md" }}>
    //           Keep it simple, make it useful &amp; code it clean.
    //         </chakra.p>
    //         <chakra.p textAlign={{ base: 'center', md: 'start' }}>
    //           Hello world I'm gus, a full-stack developer starting my journey in development,
    //           i like both sides front-end or back-end, also i enjoy sharing the knowledge
    //           check out my channel to see my tutorials.
    //         </chakra.p>
    //       </VStack>
    //       <Image boxSize={{ base: '150px', md: '200px' }} src='https://bit.ly/dan-abramov' alt='Dan Abramov' borderRadius={'full'} />
    //     </Stack>
    //   </Box>
    // </Flex>
    <Flex  as={'section'}>

    </Flex>
  );
};

export default Hero;
