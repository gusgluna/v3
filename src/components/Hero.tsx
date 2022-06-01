import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
  Image,
  VStack
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex px={4} py={32} mx="auto" className="about">
      <Box mx="auto" w={{ lg: 8 / 12, xl: 7 / 12 }} border={'1px solid red'}>
        <HStack>
          <chakra.h1
            mb={3}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "white")}
          >
            gusgluna
          </chakra.h1>
          <chakra.p mb={5} color="gray.500" fontSize={{ md: "lg" }}>
            Keep it simple, make it useful & code it clean.
          </chakra.p>
          <chakra.p>
            Hello world I'm gus, a fullstack developer,
            I started my journey learning web dev in YouTube tutorials,
            later I complete my formation in educational platform Platzi,
            and since that, I never stop learning.
          </chakra.p>
          <Box boxSize='sm'>
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' borderRadius={'full'} />
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Hero;
