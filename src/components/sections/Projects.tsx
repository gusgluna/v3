import { useRef, useEffect, useState } from 'react';
import React from 'react';
import sr from 'scrollreveal';
import { chakra, Stack, VStack, useColorModeValue, Box, Flex } from '@chakra-ui/react';
import FullPageWrapper from '@/components/FullPageWrapper';
import { srConfig, projects } from '@/config';
import ProjectCard from '@/components/ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import '@/styles/Projects.css';


function Projects() {
  const revealItem: any = useRef(null);
  const revealItem2: any = useRef(null);

  useEffect(() => {
    sr().reveal(revealItem.current, srConfig(350));
    sr().reveal(revealItem2.current, srConfig(350));
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
          color={"brand.200"}
        > My Projects</chakra.h2>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 2, md: 4 }}
          maxW='1000px'
          ref={revealItem2}
          overflow={'hidden'}
          padding={4}
          display={{ base: 'none', md: 'flex' }}
        >
          {projects.map((project) => {
            return (
              <ProjectCard project={project} key={project.title} />
            );
          })}
        </Stack>
        <Stack
          display={{ base: 'block', md: 'none' }}
          spacing={{ base: 2, md: 4 }}
          maxW='1000px'
          ref={revealItem}
          overflow={'hidden'}
        >
          <Box
            w={'350px'}
            display={{ base: 'block', md: 'none' }}
          >
            <Swiper
              spaceBetween={1}
              centeredSlides={true}
              slidesPerView={1}
              modules={[Pagination]}
              pagination={{
                dynamicBullets: true,
              }}
            >
              {projects.map((project) => {
                return (
                  <SwiperSlide key={project.title}>
                    <ProjectCard project={project} />
                  </SwiperSlide>
                );
              })}
            </Swiper>

          </Box>

        </Stack>

      </VStack>
    </FullPageWrapper>
  );
}

export default Projects;