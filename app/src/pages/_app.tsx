import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import '../global-styles/global-styles.scss'
import withLazyLoading from '../components/Utilities/withLazyLoading'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Adds simple support for background images:
    document.addEventListener('lazybeforeunveil', (e: Event) => {
      if (e && e.target) {
        const element = e.target as HTMLElement
        const bg = element.getAttribute('data-bg')
        if (bg) {
          element.style.backgroundImage = 'url(' + bg + ')'
        }
      }
    })
  }, [])

  return <Component {...pageProps} />
}

export default withLazyLoading(MyApp)
