import { useRef, useEffect } from 'react';
import React from 'react';
import sr from 'scrollreveal';
import { chakra, Stack, VStack, useColorModeValue } from '@chakra-ui/react';
import FullPageWrapper from '@/components/FullPageWrapper';
import { srConfig, projects } from '@/config';
import ProjectCard from '@/components/ProjectCard';



function Projects() {
  const revealItem: any = useRef(null);
  useEffect(() => {
    sr().reveal(revealItem.current, srConfig(350));
  }, []);

  return (
    <FullPageWrapper id='projects'>
      <VStack
        alignItems={{ base: 'center', md: 'start' }}
      >
        <chakra.h2
          mt={{ base: 4, md: 0 }}
          mb={{ base: 0, md: 4 }}
          fontSize={{ base: "4xl", md: "4xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.100", "brand.100")}
        > My Projects</chakra.h2>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 2, md: 4 }}
          maxW='1000px'
          ref={revealItem}
        >
          <ProjectCard
            project={projects[0]}
          />
          <ProjectCard
            project={projects[0]}
          />
          <ProjectCard
            project={projects[0]}
          />
        </Stack>
      </VStack>
    </FullPageWrapper>
  );
}

export default Projects;