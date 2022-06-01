import React from 'react';
import { Link, useColorModeValue, useDisclosure } from '@chakra-ui/react';

type Props = {
  text: string,
};

function NavItem(props: Props) {


  return (
    <Link
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