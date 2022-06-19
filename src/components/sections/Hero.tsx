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
import '@/styles/Hero.css';

const Hero = () => {
  return (
    <FullPageWrapper id='about'>
      <VStack
        maxW='1000px'
        alignItems={{ base: 'center', md: 'start' }}
        p={4}
        className="fadeUp hero"
      >
        <chakra.p color="gray.500">
          Hello World I am...
        </chakra.p>
        <chakra.h1
          mt={0}
          fontSize={{ base: "4xl", md: "xxl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.100", "brand.100")}
        >
          gusgluna
        </chakra.h1>
        <chakra.p textAlign={{ base: 'center', md: 'start' }} maxW='750px' mt={4} py={4} fontSize='xl'>
          I'm a full-stack developer starting my journey in development,
          i like both sides front-end or back-end, also i enjoy sharing the knowledge
          check out my channel to see my tutorials.
        </chakra.p>
        <Button my={4} colorScheme='teal' variant='outline'>
          Checkout my Resume
        </Button>

        <Image
          boxSize={{ base: '150px', md: '200px' }}
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
          borderRadius={'full'}
          alignSelf='center'
        />
      </VStack>
    </FullPageWrapper>

  );
};

export default Hero;
