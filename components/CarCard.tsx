'use client'
import { JsonProps } from '@/types'
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import CustomButton from './CustomButton';
import CardDetails from './CardDetails';

interface CarCardProps {
  car: JsonProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {city_kml, model, transmission, drive, price} = car;
  const [isOpen, setIsOpen] =useState(false);
  return (
    <div className="car-card group dark:bg-zinc-800">
      <div className="car-card__content">
        <h2 className="car-card__content-title dark:text-white">{model}</h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold dark:text-white">
        <span className="self-start text-[14px] font-semibold">Rp</span>
        {price}
        <span className="self-end text-[14px] font-medium">.000/hari</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={car.img}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] dark:text-white">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px] dark:text-white">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px] dark:text-white">{city_kml} Km/l</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Lihat lebih detail"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CardDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CarCard
