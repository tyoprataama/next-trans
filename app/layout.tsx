import { Footer, Navbar } from '@/components';
import './globals.css';
import Providers from './Providers';


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
    <html lang="en" suppressHydrationWarning>
      <body className="relative">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
