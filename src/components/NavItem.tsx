import React from 'react';
import { ReactNode } from 'react';
import { Link, useColorModeValue, useDisclosure, Box } from '@chakra-ui/react';

type Ref = HTMLDivElement;
type Props = {
  text: string,
};

const NavItem = React.forwardRef<Ref, Props>((props, ref) => {

  return (
    <Box ref={ref}>
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
    </Box>
  );
});





export default NavItem;