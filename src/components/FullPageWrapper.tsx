import { Flex } from "@chakra-ui/react";

function FullPageWrapper({ id, children, bgColor }: any) {
  return (
    <Flex
      as={'section'}
      className={`fullPage ${bgColor ? "bgColor" : ""}`}
      mx="auto"
      w={'100%'}
      h={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
      id={id}
    >
      {children}
    </Flex>
  );
}

export default FullPageWrapper;