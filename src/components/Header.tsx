import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  background,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import gusgluna_logo from "../assets/logos/gusgluna.svg";

type Props = {
  children: JSX.Element | string,
};

const Links = ['Home', 'About Me', 'Projects'];

const NavLink = ({ children }: Props) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={{ base: 'space-between', md: 'center' }}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NavLink >About</NavLink>
              <NavLink >Work</NavLink>
            </HStack>
            <Image src={gusgluna_logo} boxSize='60px' objectFit='cover' alt='gusgluna' />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NavLink >Skills</NavLink>
              <NavLink >Contact</NavLink>
            </HStack>
          </HStack>

        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} bg={'white'} zIndex={'10'}>
              <NavLink >About</NavLink>
              <NavLink >Work</NavLink>
              <NavLink >Skills</NavLink>
              <NavLink >Contact</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}



