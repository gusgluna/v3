import React from 'react';
import { chakra, Box, ListItem, ListIcon, List, Link, useColorModeValue } from '@chakra-ui/react';
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';

interface Props {
  title: string;
  arrList: any[];
}

type Ref = HTMLDivElement;

const SkillsBox = React.forwardRef<Ref, Props>((props, ref) => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const boxShadow = "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;";

  return (
    <Box bg={bg} padding={2} ref={ref} borderColor='brand.100' flex={'1 1 0'} boxShadow={boxShadow}>
      <chakra.h3 fontSize={{ base: 'lg', md: '2xl' }} color='brand.100' textAlign={'center'} fontWeight='bold'>
        {props.title}
      </chakra.h3>

      <List spacing={{ base: -1, md: 0 }}>
        {
          props.arrList[0].title ?
            props.arrList.map((course: { title: string, link: string; }) => {
              return (
                <ListItem key={course.title} fontSize={{ base: 'sm', md: 'md' }}>
                  <ListIcon as={ChevronRightIcon} color='brand.100' />
                  {course.title}
                  <Link href={course.link} isExternal><ExternalLinkIcon mx='4px' /></Link>
                </ListItem>
              );
            })
            :
            props.arrList.map((tool: string) => {
              return (
                <ListItem key={tool} fontSize={{ base: 'sm', md: 'md' }}>
                  <ListIcon as={ChevronRightIcon} color='brand.100' />
                  {tool}
                </ListItem>
              );
            })
        }
      </List>
    </Box>

  );
});

export default SkillsBox;
