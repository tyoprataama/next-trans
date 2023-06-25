'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import {SunIcon} from '@heroicons/react/24/solid'
import {MoonIcon} from '@heroicons/react/24/solid'

const ThemeBtn = () => {
  const {resolvedTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if(!mounted) {
    return null
  }
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 bg-none border-black"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
          <SunIcon className="h-5 w-5 text-orange-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-orange-300" />
      )}
    </button>
  );
}

export default ThemeBtn
