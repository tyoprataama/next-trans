"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";
import { scroller } from "react-scroll";
import { useTheme } from "next-themes";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "dark" ? "/hero.png" : "/hero-light.png";
   const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const isMobile: boolean = window.innerWidth <= 768; // Adjust the breakpoint as needed
      const mobileOffset: number = 1350; // Offset value for mobile devices
      const desktopOffset: number = 300; // Offset value for desktop devices

      // Set the offset based on the device type
      setOffset(isMobile ? mobileOffset : desktopOffset);
    };

    // Call the handleResize function on initial load and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
   const scrollToElement = () => {
     scroller.scrollTo("scrollElement", {
       duration: 800,
       delay: 0,
       smooth: "easeInOutQuart",
       offset: offset,
     });
   };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Cari atau sewa mobil - cepat dan mudah!</h1>
        <p className="hero__subtitle dark:text-white">
          Mau sewa unit? LCGC, MPV, SUV? semua ada dan fasilitas lengkap.
          Hubungi kami! rental mobil Kediri dan sewa mobil Kediri nomor 1.
          Berkah Travel Trans <br/> <span className="font-bold">#MobilBerkah Perjalanan Tanpa Batas</span>
        </p>
        <CustomButton
          title="Jelajahi"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={scrollToElement}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={logoSrc} fill alt="hero" className="object-contain" />
        </div>
          <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
