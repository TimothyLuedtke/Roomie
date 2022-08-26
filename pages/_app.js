
import { ChakraProvider } from "@chakra-ui/react"

import { extendTheme } from "@chakra-ui/react"

// const theme = extendTheme({
//   styles: {
//     global: {
//       body: {
//         bg: "#0000",
//         // bg: "#f1f9e6",
//         color: "#000",
//         // color: '#7b8573',      
//       },
//     },
//   },
// })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
