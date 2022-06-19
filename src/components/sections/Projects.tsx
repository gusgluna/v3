import { useRef, useEffect } from 'react';
import React from 'react';
import sr from 'scrollreveal';
import { Stack } from '@chakra-ui/react';
import FullPageWrapper from '@/components/FullPageWrapper';
import { srConfig, projects } from '@/config';
import ProjectCard from '@/components/ProjectCard';



function Projects() {
  const revealItem: any = React.createRef();
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
        <ProjectCard
          ref={revealItem}
        // text="lorem ipsum dolo"
        />
      </Stack>
    </FullPageWrapper>
  );
}

export default Projects;