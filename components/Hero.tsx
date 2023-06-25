"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
   const handleScroll = () => {
     // Handle scroll event here
     console.log("Scrolling...");
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
<Link href=''>

        <CustomButton
          title="Jelajahi"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
</Link>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" fill alt="hero" className="object-contain" />
        </div>
          <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
