import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Berkah Travel Trans',
  description: 'Build by love developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>{children}</body>
    </html>
  )
}
