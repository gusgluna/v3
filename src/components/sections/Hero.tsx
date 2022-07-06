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
import FullPageWrapper from '@/components/FullPageWrapper';
import React, { useEffect, useRef } from 'react';
// import '@/styles/Hero.css';
import sr from 'scrollreveal';
import { srConfig } from "@/config";




const Hero = () => {
  const rev1: any = useRef(null);
  const rev2: any = useRef(null);
  const rev3: any = useRef(null);
  const rev4: any = useRef(null);
  const rev5: any = useRef(null);
  useEffect(() => {
    sr().reveal(rev1.current, srConfig(250));
    sr().reveal(rev2.current, srConfig(450));
    sr().reveal(rev3.current, srConfig(650));
    sr().reveal(rev4.current, srConfig(850));
    sr().reveal(rev5.current, srConfig(1050));
  }, []);

  return (
    <FullPageWrapper id='about'>
      <VStack
        maxW='1000px'
        alignItems={{ base: 'center', md: 'start' }}
        p={4}
      // ref={rev1}
      >
        <chakra.p color="gray.500" ref={rev1}>
          Hello World I am...
        </chakra.p>
        <chakra.h1
          mt={0}
          fontSize={{ base: "4xl", md: "xxl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.100", "brand.100")}
          ref={rev2}
        >
          gusgluna
        </chakra.h1>
        <chakra.p textAlign={{ base: 'center', md: 'start' }} maxW='750px' mt={4} py={4} fontSize='xl' ref={rev3}>
          I'm a full-stack developer starting my journey in development,
          i like both sides front-end and back-end, I have a YouTube chanel to share the knowledge
          check out my channel.
        </chakra.p>
        <Box ref={rev4}>
          <Button my={4} colorScheme='teal' variant='outline'>
            Checkout my Resume
          </Button>
        </Box>

        <Image
          boxSize={{ base: '150px', md: '200px' }}
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
          borderRadius={'full'}
          alignSelf='center'
          ref={rev5}
        />
      </VStack>
    </FullPageWrapper>

  );
};

export default Hero;
