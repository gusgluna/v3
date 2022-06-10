import React from 'react';
import { useColorMode, Button, Box, IconButton, Flex, Link, Image, useDisclosure, HStack, Stack, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import NavItem from './NavItem';
import gusgluna_logo from "../assets/logos/gusgluna.svg";

const Links: string[] = ['About', 'Skills', 'Projects', 'Contact'];

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as='header' position={'fixed'} w={'100vw'} zIndex={2} bg={`${colorMode === 'light' ? 'white': 'gray.800'}`}>
        <Flex as='nav' h={16} alignItems={'center'} justifyContent={{ base: 'center', md: 'center' }} className={'fadeUp'}>
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
            <NavItem text={Links[0]} delay={'delay0'}/>
            <NavItem text={Links[1]} delay={'delay1'}/>
          </HStack>

          <Image src={gusgluna_logo} boxSize='60px' objectFit='cover' alt='gusgluna' ml={4} mr={4} />
          <HStack
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <NavItem text={Links[2]} delay={'delay2'}/>
            <NavItem text={Links[3]} delay={'delay3'}/>
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