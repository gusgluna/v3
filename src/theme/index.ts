import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fontSizes: {
    xxl: '60px',
  },
  colors: {
    brand: {
      50: "#cbebff",
      80: "#97d8ff",
      100: "#1c4c96",
      200: "#144969",
    },
  }
})

export default theme