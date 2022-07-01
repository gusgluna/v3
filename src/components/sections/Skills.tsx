import React from 'react';
import { useEffect } from 'react';
import { Stack, chakra, useColorModeValue, VStack } from '@chakra-ui/react';
import { srConfig, languages, tools, courses } from '@/config';
import FullPageWrapper from '@/components/FullPageWrapper';
import SkillsBox from '@/components/SkillsBox';
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
      <VStack
        alignItems={{ base: 'center', md: 'start' }}
      >

        <chakra.h2
          mt={{base: 4, md: 0}}
          mb={{ base: 0, md: 4 }}
          fontSize={{ base: "4xl", md: "4xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.100", "brand.100")}
        >
          My Skills
        </chakra.h2>
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

      </VStack>
    </FullPageWrapper>
  );
}

export default Skills;