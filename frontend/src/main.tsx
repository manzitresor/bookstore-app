import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "gray.50",
      },
    }),
  },
});

createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <Provider store={store} >
      <RouterProvider router={router}/>
    </Provider>,
  </ChakraProvider>
)
