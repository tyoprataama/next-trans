'use client'
import Link from "next/link";
import Image from "next/image";
import ThemeBtn from './ThemeBtn';
import { useTheme } from "next-themes";



const Navbar = () => {
  const {resolvedTheme} = useTheme();
  const logoSrc =
    resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo.svg";

  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={logoSrc}
            alt="Berkah-Travel-Trans"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <ThemeBtn />
      </nav>
    </header>
  );
}

export default Navbar
