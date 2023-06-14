import { Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Berkah Travel Trans',
  description: 'Build with love by developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
