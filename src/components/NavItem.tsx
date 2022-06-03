import React from 'react';
import { Link, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import '../styles/NavItem.css'

type Props = {
  text: string,
  delay: string
};

function NavItem(props: Props) {


  return (
    <Link
      className={`nav-item fadeInBottom ${props.delay}`}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        color: useColorModeValue("brand.100", "white"),
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={`#${props.text.toLocaleLowerCase()}`}
    >
      {props.text}
    </Link>
  );
}

export default NavItem;