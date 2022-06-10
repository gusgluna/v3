import { useRef, useEffect, useId } from 'react';
import sr from 'scrollreveal';
import {
  chakra,
  Flex,
  Box,
  Stack,
  HStack,
  VStack,
  OrderedList,
  ListItem,
  ListIcon,
  List,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import FullPageWrapper from './FullPageWrapper';
import { srConfig, languages, tools, courses } from '../config'



function Skills() {
  const revealCard1: any = useRef(null);
  const revealCard2: any = useRef(null);
  const revealCard3: any = useRef(null);

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
        <Box padding={2} ref={revealCard1} border={'2px solid'} borderColor='brand.100' flex={'1 1 0'} borderRadius={16}>
          <chakra.h3 fontSize={{ base: 'lg', md: '2xl' }} color='brand.100'>Languages &amp; Frameworks</chakra.h3>
          <List spacing={{base:-1, md:0}}>
            {languages.map((lang: string) => {
              return (
                <ListItem key={lang} fontSize={{ base: 'sm', md: 'md' }}>
                  <ListIcon as={ChevronRightIcon} color='brand.100' />
                  {lang}
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Box padding={2} ref={revealCard2} border={'2px solid'} borderColor='brand.100' flex={'1 1 0'} borderRadius={16}>
          <chakra.h3 fontSize={{ base: 'lg', md: '2xl' }} color='brand.100' textAlign={'center'}>Tools</chakra.h3>
          <List spacing={{base:-1, md:0}}>
            {tools.map((tool: string) => {
              return (
                <ListItem key={tool} fontSize={{ base: 'sm', md: 'md' }}>
                  <ListIcon as={ChevronRightIcon} color='brand.100' />
                  {tool}
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Box padding={2} ref={revealCard3} border={'2px solid'} borderColor='brand.100' flex={'1 1 0'} borderRadius={16}>
          <chakra.h3 fontSize={{ base: 'lg', md: '2xl' }} color='brand.100' textAlign={'center'}>Courses and Certifications</chakra.h3>
          <List spacing={{base:-1, md:0}}>
            {courses.map((course: { title: string, link: string; }) => {
              return (
                <ListItem key={course.title} fontSize={{ base: 'sm', md: 'md' }}>
                  <ListIcon as={ChevronRightIcon} color='brand.100' />
                  {course.title}
                  <Link href={course.link} isExternal><ExternalLinkIcon mx='4px' /></Link>
                </ListItem>
              );
            })}
          </List>
        </Box>

      </Stack>
    </FullPageWrapper>
  );
}

export default Skills;