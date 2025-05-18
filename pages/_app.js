import '../styles.css'
import { Callout } from '../components/Callout'
import { MDXProvider } from '@mdx-js/react'

const components = {
  Callout
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}