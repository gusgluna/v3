import React from 'react';
import { useRef, useEffect } from 'react';
import sr from 'scrollreveal';
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
import FullPageWrapper from './FullPageWrapper';
import { srConfig, projects } from '../config';
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';




function ProjectCard() {
  const revealItem: any = useRef(null);
  useEffect(() => {
    sr().reveal(revealItem.current, srConfig(350));
  }, []);

  return (
    <Box padding={2} ref={revealItem} border={'2px solid'} borderColor='brand.100' flex={'1 1 0'} borderRadius={16}>
      <chakra.h3 fontSize={{ base: 'lg', md: '2xl' }} color='brand.100'>Languages &amp; Frameworks</chakra.h3>
      <List spacing={{ base: -1, md: 0 }}>
        <ListItem fontSize={{ base: 'sm', md: 'md' }}>
          <ListIcon as={ChevronRightIcon} color='brand.100' />
          Lorem
        </ListItem>
      </List>
    </Box>
  );
}

export default ProjectCard;