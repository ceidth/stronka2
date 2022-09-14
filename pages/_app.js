import React, {useEffect, useState} from 'react'
import { SessionProvider } from 'next-auth/react'
import {Layout} from '../components'
import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps, session }) {
  return (
      <SessionProvider session={pageProps.session}>
        <Layout>
        <Component {...pageProps}/>
        </Layout>
      </SessionProvider>
  )
}

export default MyApp
