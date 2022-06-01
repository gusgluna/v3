import React from 'react';
import { useColorMode, Button, Box, IconButton, Flex, Link, Image, useDisclosure, HStack, Stack, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import NavItem from './NavItem';
import gusgluna_logo from "../assets/logos/gusgluna.svg";

const Links: string[] = ['About', 'Work', 'Skills', 'Contact'];

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as='header'>
        <Flex as='nav' h={16} alignItems={'center'} justifyContent={{ base: 'center', md: 'center' }}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            position={'absolute'}
            top={2}
            left={2}
            zIndex={10}
          />

          <HStack
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <NavItem text={Links[0]} />
            <NavItem text={Links[1]} />
          </HStack>

          <Image src={gusgluna_logo} boxSize='60px' objectFit='cover' alt='gusgluna' ml={4} mr={4} />
          <HStack
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <NavItem text={Links[2]} />
            <NavItem text={Links[3]} />
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
          <Box pb={4} display={{ base: 'block', md: 'none' }} zIndex={5} height={'100vh'} width={'100vw'} position={'absolute'} top={0} bg={colorMode === 'light' ? 'white' : 'gray.800'}>
            <Stack as={'nav'} spacing={4} mt={16} padding={4}>
              {Links.map((link) => (
                <Link
                  px={2}
                  py={1}
                  rounded={'md'}
                  _hover={{
                    color: colorMode === 'light' ? 'brand.100' : 'white',
                    textDecoration: 'none',
                    bg: colorMode === 'light' ?'gray.200': 'gray.700',
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