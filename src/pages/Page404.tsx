import React from 'react';
import FullPageWrapper from '@/components/FullPageWrapper';
import { chakra, VStack } from '@chakra-ui/react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <FullPageWrapper>
      <VStack textAlign={"center"}>
        <chakra.h2
          fontSize={"2xl"}
          color={"brand.200"}
          fontWeight={"bold"}
        >
          Sorry Something went wrong
        </chakra.h2>
        <chakra.h1
          fontSize={"4xl"}
          color={"brand.100"}
          fontWeight={"bolder"}
        >
          Error 404 Page Not Found
        </chakra.h1>

        <chakra.p
          fontSize={"x-large"}
          onClick={() => navigate('/')}
          fontWeight={"bold"}
          cursor={"pointer"}
          color={"brand.200"}
          border={"1px solid"}
          borderColor={"brand.100"}
          padding={2}
          borderRadius={10}
        >
          Go to Home...
        </chakra.p>

      </VStack>
    </FullPageWrapper >
  );
};

export default Page404;