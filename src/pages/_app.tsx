import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../app/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
