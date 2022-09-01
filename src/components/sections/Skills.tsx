import React from 'react';
import { useEffect } from 'react';
import { Stack, chakra, useColorModeValue, VStack, Box, Tag, Icon, Link } from '@chakra-ui/react';
import { srConfig, languages, tools, courses, languagesAndIcons, toolsAndIcons } from '@/config';
import FullPageWrapper from '@/components/FullPageWrapper';
import SkillsBox from '@/components/SkillsBox';
import sr from 'scrollreveal';
import { notDeepStrictEqual } from 'assert';
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';

function Skills() {
  const reveal1: any = React.createRef();
  const reveal2: any = React.createRef();
  const reveal3: any = React.createRef();

  useEffect(() => {
    sr().reveal(reveal1.current, srConfig(250));
    sr().reveal(reveal2.current, srConfig(350));
    sr().reveal(reveal3.current, srConfig(450));
  }, []);

  return (
    <FullPageWrapper id='skills'>
      <VStack
        alignItems={{ base: 'center', md: 'start' }}
      >

        <chakra.h2
          mt={{ base: 4, md: 0 }}
          mb={{ base: 0, md: 4 }}
          fontSize={"4xl"}
          fontWeight="bold"
          color="brand.200"
        >
          My Skills
        </chakra.h2>
        <Stack
          direction={{ base: 'column', md: 'column' }}
          spacing={{ base: 2, md: 4 }}
          maxW='1000px'
          padding={4}
        >

          {/* <SkillsBox
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
          /> */}

          <Box>
            <Stack direction={{ base: "column", md: "row" }}
              border="1px solid"
              borderColor={"brand.100"}
              ref={reveal1}
              borderRadius={4}
            >
              <Box
                padding={{ base: 1, md: 4 }}
                borderRight={{ md: "1px solid" }}
                borderBottom={{ base: "1px solid", md: "0px" }}
                borderColor={{ base: "brand.100", md: "brand.100" }}
                display="grid"
                placeContent={"center"}
                textAlign="center"
                color={"brand.100"}
                fontWeight="bold"
                flex={"30%"}
              >
                <chakra.p as='h5'>
                  Languages &amp; <chakra.span color={"brand.200"}> Frameworks</chakra.span>
                </chakra.p>
              </Box>
              <Box
                padding={{ base: 0, md: 4 }}
                display="flex"
                flexWrap={"wrap"}
                justifyContent={"space-evenly"}
                flex={"70%"}
              >
                {languagesAndIcons.map((item) => {
                  return <Tag
                    key={item.name}
                    margin={1}
                    color={"brand.100"}
                    variant="outline"
                    boxShadow={"inset 0 0 0px 1px #00bfb2"}
                    padding={1}
                  >
                    <Icon viewBox='0 0 496 512' boxSize={5}>
                      <path
                        fill='currentColor'
                        d={item.path}
                      />
                    </Icon>
                    &nbsp;
                    {item.name}</Tag>;
                })}
              </Box>
            </Stack>



            <Stack direction={{ base: "column", md: "row" }}
              border="1px solid"
              borderColor={"brand.100"}
              mt={{ base: 2, md: 4 }}
              ref={reveal2}
              borderRadius={4}
            >
              <Box
                padding={{ base: 1, md: 4 }}
                borderRight={{ md: "1px solid" }}
                borderBottom={{ base: "1px solid", md: "0px" }}
                borderColor={{ base: "brand.100", md: "brand.100" }}
                display="grid"
                placeContent={"center"}
                textAlign="center"
                color={"brand.100"}
                fontWeight="bold"
                flex={"30%"}
              >
                <chakra.p as='h5'>
                  Tools &amp; <chakra.span color={"brand.200"}>   Technologies</chakra.span>
                </chakra.p>
              </Box>
              <Box
                padding={{ base: 0, md: 4 }}
                display="flex"
                flexWrap={"wrap"}
                justifyContent={"space-around"}
                flex={"70%"}
              >
                {toolsAndIcons.map((item) => {
                  return <Tag
                    key={item.name}
                    margin={1}
                    color={"brand.100"}
                    variant="outline"
                    boxShadow={"inset 0 0 0px 1px #00bfb2"}
                    padding={1}
                  >
                    {item.path && <Icon viewBox='0 0 496 512' boxSize={5}>
                      <path
                        fill='currentColor'
                        d={item.path}
                      />
                    </Icon>}&nbsp;
                    {item.name}</Tag>;
                })}
              </Box>
            </Stack>



            <Stack direction={{ base: "column", md: "row" }}
              border="1px solid"
              borderColor={"brand.100"}
              mt={{ base: 2, md: 4 }}
              ref={reveal3}
              borderRadius={4}
            >
              <Box
                padding={{ base: 1, md: 4 }}
                borderRight={{ md: "1px solid" }}
                borderBottom={{ base: "1px solid", md: "0px" }}
                borderColor={{ base: "brand.100", md: "brand.100" }}
                display="grid"
                placeContent={"center"}
                textAlign="center"
                color={"brand.100"}
                fontWeight="bold"
                flex={"30%"}
              >
                <chakra.p as='h5'>
                  Courses &amp; <chakra.span color={"brand.200"}> Certifications</chakra.span>
                </chakra.p>
              </Box>
              <Box
                padding={{ base: 0, md: 4 }}
                display="flex"
                flexWrap={"wrap"}
                justifyContent={"space-evenly"}
                flex={"70%"}
              >
                {courses.map((item) => {
                  return <Link isExternal href={item.link}>
                    <Tag
                      key={item.title}
                      margin={1}
                      color={"brand.100"}
                      variant="outline"
                      boxShadow={"inset 0 0 0px 1px #00bfb2"}
                      padding={1}
                    >
                      {item.title}
                      &nbsp;
                      <ExternalLinkIcon />
                    </Tag>
                  </Link>;
                })}
              </Box>
            </Stack>


          </Box>
        </Stack>

      </VStack >
    </FullPageWrapper >
  );
}

export default Skills;