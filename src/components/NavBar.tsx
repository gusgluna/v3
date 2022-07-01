import { useColorMode, Button, Box, IconButton, Flex, Link, Image, useDisclosure, HStack, Stack, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { useEffect, useRef } from 'react';
import NavItem from './NavItem';
import gusgluna_logo from "@/assets/logos/gusgluna.svg";
import { navBarLinks, srConfig } from '@/config';
import sr from 'scrollreveal';

const navItemConfig = (delay: number) => {
  return ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay: delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    container: ".navBar",
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  });

};

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const rev1: any = useRef(null);
  const rev2: any = useRef(null);
  const rev3: any = useRef(null);
  const rev4: any = useRef(null);

  useEffect(() => {
    sr().reveal(rev1.current, navItemConfig(200));
    sr().reveal(rev2.current, navItemConfig(300));
    sr().reveal(rev3.current, navItemConfig(400));
    sr().reveal(rev4.current, navItemConfig(500));

  }, []);

  return (
    <>
      <Box as='header' position={'fixed'} w={'100vw'} zIndex={2} bg={`${colorMode === 'light' ? 'white' : 'gray.800'}`}>
        <Flex as='nav' h={16} alignItems={'center'} justifyContent={{ base: 'center', md: 'center' }} className={'navBar'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            position={'absolute'}
            top={2}
            left={2}
            zIndex={6}
          />

          <HStack
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <NavItem text={navBarLinks[0]} ref={rev1} />
            <NavItem text={navBarLinks[1]} ref={rev2} />
          </HStack>

          <Image src={gusgluna_logo} boxSize='60px' objectFit='cover' alt='gusgluna' ml={4} mr={4} />
          <HStack
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <NavItem text={navBarLinks[2]} ref={rev3} />
            <NavItem text={navBarLinks[3]} ref={rev4} />
          </HStack>

          <IconButton
            size={'md'}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            aria-label={'Open Menu'}
            onClick={toggleColorMode}
            position={'absolute'}
            top={2}
            right={{ base: 2, md: 6 }}
            zIndex={10}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ base: 'block', md: 'none' }} zIndex={4} height={'100vh'} width={'100vw'} position={'absolute'} top={0} bg={colorMode === 'light' ? 'white' : 'gray.800'}>
            <Stack as={'nav'} spacing={4} mt={16} padding={4}>
              {navBarLinks.map((link) => (
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    color: colorMode === 'light' ? 'brand.100' : 'white',
                    textDecoration: 'none',
                    bg: colorMode === 'light' ? 'gray.200' : 'gray.700',
                  }}
                  href={`#${link.toLowerCase()}`}
                  onClick={isOpen ? onClose : onOpen}
                  key={link}
                >
                  {link}
                </Link>
              ))}

            </Stack>
          </Box>
        ) : null}

      </Box>
    </>

  );
}

export default NavBar;