import { useRef, useEffect } from 'react';
import sr from 'scrollreveal';
import FullPageWrapper from '@/components/FullPageWrapper';
import {
  chakra,
  Flex,
  Box,
  Badge,
  Stack,
  VStack,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { srConfig, socialNetworks } from '@/config';

function Contact() {
  const revealItem: any = useRef(null);
  useEffect(() => {
    sr().reveal(revealItem.current, srConfig(350));
  }, []);
  return (
    <FullPageWrapper id='contact'>
      <VStack
        maxW='1000px'
        alignItems={{ base: 'center', md: 'start' }}
        p={4}
        ref={revealItem}
      >

        <chakra.h1
          mt={0}
          fontSize={"4xl"}
          fontWeight="bold"
          color={useColorModeValue("brand.100", "brand.100")}
        >
          Contact
        </chakra.h1>
        <chakra.p textAlign={{ base: 'center', md: 'start' }} maxW='750px' mt={4} py={4} fontSize='xl'>
          I am looking for my first professional job you can connect with me at:
        </chakra.p>
        <Flex w={'100%'} alignItems={'center'} justifyContent={'space-evenly'}

          borderRadius={6}
          boxShadow={'lg'}
          p={2} border={'1px solid'} borderColor={'brand.100'} direction={{ base: 'column', md: 'row' }}>
          {socialNetworks.map((network) => {
            return (
              <Box p={4}
              >
                <Link
                  borderRadius={4}
                  padding={3}
                  fontSize={'lg'}
                  isExternal
                  href={network.link}
                  _hover={{
                    color: useColorModeValue("brand.100", "white"),
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                >
                  {network.title}
                </Link>
              </Box>
            );
          })}
        </Flex>
      </VStack>
      <chakra.p position={'absolute'} bottom={'2vh'} textAlign={'center'} w={'100%'}> coded with ❤ by gusgluna © 2022</chakra.p>

    </FullPageWrapper>
  );
}

export default Contact;