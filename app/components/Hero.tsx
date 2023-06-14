"use client";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Cari atau sewa mobil - cepat dan mudah!</h1>
        <p className="hero__subtitle">
          Mau sewa unit? LCGC, MPV, SUV? semua ada dan fasilitas lengkap.
          Hubungi kami! rental mobil Kediri dan sewa mobil Kediri nomor 1.
          Berkah Travel Trans #MobilBerkahPerjalananTanpaBatas{" "}
        </p>
        <CustomButton
          title="Jelajahi"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
