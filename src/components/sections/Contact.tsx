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
  Link,
  Icon
} from '@chakra-ui/react';
import { srConfig, socialNetworks } from '@/config';


const GitHubIcon = (props: any) => (
  <Icon viewBox='0 0 496 512' {...props}>
    <path
      fill='currentColor'
      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
    />
  </Icon>
);

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
          color={"brand.200"}
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
                key={network.title}
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
                  <Icon viewBox='0 0 496 512' boxSize={5}>
                    <path
                      fill='currentColor'
                      d={network.icon}
                    />
                  </Icon>

                  &nbsp;
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