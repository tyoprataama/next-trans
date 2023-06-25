'use client'
import { ThemeProvider } from 'next-themes'
import React, {ReactNode} from 'react'

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const Providers = ({children}:Props) => {
  return (
    <ThemeProvider attribute='class'>
      {children}
    </ThemeProvider>
  )
}

export default Providers
