import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
  Image,
  VStack,
  Stack,
  Link
} from "@chakra-ui/react";
import FullPageWrapper from '@/components/FullPageWrapper';
import React, { useEffect, useRef } from 'react';
import sr from 'scrollreveal';
import { srConfig } from "@/config";
import gus from "../../assets/img/gus-removebg.png";




const Hero = () => {
  const rev1: any = useRef(null);
  const rev2: any = useRef(null);
  const rev3: any = useRef(null);
  const rev4: any = useRef(null);
  const rev5: any = useRef(null);
  useEffect(() => {
    sr().reveal(rev1.current, srConfig(250));
    sr().reveal(rev2.current, srConfig(450));
    sr().reveal(rev3.current, srConfig(650));
    sr().reveal(rev4.current, srConfig(850));
    sr().reveal(rev5.current, srConfig(1050));
  }, []);

  return (
    <FullPageWrapper id='about' bgColor>
      <Stack direction={['column', 'row']}>
        <VStack
          maxW='1000px'
          alignItems={{ base: 'center', md: 'start' }}
          p={4}
        // ref={rev1}
        >
          <chakra.p color="brand.200" ref={rev1}>
            Hello World I am...
          </chakra.p>
          <chakra.h1
            letterSpacing={"0.3rem"}
            mt={0}
            fontSize={{ base: "4xl", md: "xxl" }}
            fontWeight="bolder"
            color={useColorModeValue("brand.100", "brand.100")}
            ref={rev2}
          >
            {"Gus"}
          </chakra.h1>
          <chakra.p
            textAlign={{ base: 'center', md: 'start' }}
            maxW='600px'
            mt={4}
            py={4}
            fontSize={{ base: "lg", md: 'xl' }}
            ref={rev3}>
            A full-stack developer codding in
            <chakra.span color={"brand.200"} fontWeight={"bold"}> JavaScript</chakra.span>, building things for the internet
            using <chakra.span color={"brand.200"} fontWeight={"bold"}>React </chakra.span>
            and <chakra.span color={"brand.200"} fontWeight={"bold"}>Express </chakra.span>, I'm a self-taught developer, and I'm learning something new every day.
          </chakra.p>
          <Box ref={rev4}>
            <Link href="/gusgluna_cv.pdf" target={"_blank"}>
              <Button
                my={4}
                // colorScheme='teal'
                color={"brand.100"}
                borderColor={"brand.100"}
                variant='outline'
              >
                My Resume
              </Button>
            </Link>
          </Box>

        </VStack>
        <Image
          src={gus}
          alt='gusgluna'
          borderRadius={"2xl"}
          alignSelf='center'
          ref={rev5}
          height={{ base: "150px", md: "250px" }}
          mr={"4"}
        // background={useColorModeValue("brand.100", "#ffffff")}
        />
      </Stack>
    </FullPageWrapper>

  );
};

export default Hero;
