import { useRef, useEffect } from 'react';
import sr from 'scrollreveal';
import {
  chakra,
  Flex,
  Box,
  Stack,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';

const srConfig: {} = {
  origin: 'bottom',
  distance: '20px',
  duration: 500,
  delay: 300,
  rotate: { x: 0, y: 0, z: 0 },
  opacity: 0,
  scale: 1,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.25,
  viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
};

function Contact() {
  const revealItem: any = useRef(null);
  useEffect(() => {
    sr().reveal(revealItem.current, srConfig);
  }, []);
  return (
    <Flex
      px={4}
      py={32}
      mx="auto"
      id="contact"
    >
      <Box mx="auto" >
        <Stack
          ref={revealItem}
          // bg={'brand.100'}
          // color={'whatsapp.100'}
          mx="auto"
          w={{ lg: 8 / 12, xl: 7 / 12 }}
          direction={{ base: 'column', md: 'column' }}
          align={{ base: 'center' }}
          h={'450px'}
          border={'1px solid red'}
        >
            <chakra.h1
              mb={0}
              fontSize={{ base: "4xl", md: "xxl" }}
              fontWeight="bold"
              color={useColorModeValue("brand.100", "brand.100")}
            >
              Contact
            </chakra.h1>
            <chakra.p mb={5} color="gray.500" fontSize={{ md: "md" }}>
              Keep it simple, make it useful &amp; code it clean.
            </chakra.p>
            <chakra.p textAlign={{ base: 'center', md: 'start' }}>
              Hello world I'm gus, a full-stack developer starting my journey in development,
              i like both sides front-end or back-end, also i enjoy sharing the knowledge
              check out my channel to see my tutorials.
            </chakra.p>
        </Stack>
      </Box>
    </Flex>
  );
}

export default Contact;