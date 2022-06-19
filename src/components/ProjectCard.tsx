import React from 'react';
import { ReactNode } from 'react';
import {
  chakra,
  Flex,
  Box,
  Stack,
  VStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { projects } from '../config';

interface Props {
  children?: ReactNode;
  // text: string;
}

type Ref = HTMLDivElement;

const ProjectCard = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <Box padding={2} ref={ref} border={'2px solid'} borderColor='brand.100' flex={'1 1 0'} borderRadius={16}>
      <chakra.h3 fontSize={{ base: 'lg', md: '2xl' }} color='brand.100'>{projects[0].title}</chakra.h3>
      <chakra.p>
        {projects[0].description}
      </chakra.p>
    </Box>
  );
});

export default ProjectCard;