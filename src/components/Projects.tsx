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
import ProjectCard from './ProjectCard'



function Projects() {
  const revealItem: any = useRef(null);
  useEffect(() => {
    sr().reveal(revealItem.current, srConfig(350));
  }, []);
  return (
    <FullPageWrapper id='projects'>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 2, md: 4 }}
        maxW='1000px'
      >
        <ProjectCard></ProjectCard>
      </Stack>
    </FullPageWrapper>
  );
}

export default Projects;