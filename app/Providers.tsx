'use client'
import { ThemeProvider } from 'next-themes'
import React, {ReactNode} from 'react'
import { Element } from "react-scroll";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}
const Providers = ({children}:Props) => {
  return (
    <ThemeProvider attribute="class">
      <Element name="scrollElement" className="scrollable-element">
      {children}
      </Element>
    </ThemeProvider>
  );
}

export default Providers
