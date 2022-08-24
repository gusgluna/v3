import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fontSizes: {
    xxl: '60px',
  },
  colors: {
    brand: {
      50: "#cbebff",
      80: "#97d8ff",
      100: "#00bfb2",
      200: "#f58a07",
    },
  }
});

export default theme;