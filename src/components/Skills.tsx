import React from 'react';
import { useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import { srConfig, languages, tools, courses } from '../config';
import FullPageWrapper from './FullPageWrapper';
import SkillsBox from './SkillsBox';
import sr from 'scrollreveal';

function Skills() {
  const revealCard1: any = React.createRef();
  const revealCard2: any = React.createRef();
  const revealCard3: any = React.createRef();

  useEffect(() => {
    sr().reveal(revealCard1.current, srConfig(250));
    sr().reveal(revealCard2.current, srConfig(350));
    sr().reveal(revealCard3.current, srConfig(450));
  }, []);

  return (
    <FullPageWrapper id='skills'>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 2, md: 4 }}
        maxW='1000px'
      >

        <SkillsBox
          title="Languages &amp; Frameworks"
          arrList={languages}
          ref={revealCard1}
        />

        <SkillsBox
          title="Tools &amp; Technologies"
          arrList={tools}
          ref={revealCard2}
        />

        <SkillsBox
          title="Courses &amp; Certifications"
          arrList={courses}
          ref={revealCard3}
        />

      </Stack>
    </FullPageWrapper>
  );
}

export default Skills;