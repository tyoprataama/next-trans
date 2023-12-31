'use client'
import { JsonProps } from '@/types';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: JsonProps;
}
const CardDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 dark:bg-zinc-800">
                <button
                  type="button"
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  onClick={closeModal}
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
                <div className="flex-1 flex flex-col gap-3">
                  <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src={car.img}
                      alt="car model"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg dark:bg-zinc-700">
                      <Image
                        src={car.img2}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg dark:bg-zinc-700">
                      <Image
                        src={car.img3}
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>
                  <h4 className="mt-2 text-grey dark:text-white">
                    Spesifikasi:
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-4">
                    <div className="flex justify-between gap-5 w-full text-left">
                      <div className="col-span-1">
                        <h4 className="text-grey dark:text-white">Mesin</h4>
                        <h4 className="text-grey mt-3 dark:text-white">
                          Bahan Bakar
                        </h4>
                        <h4 className="text-grey mt-3 dark:text-white">
                          Transmisi
                        </h4>
                        <h4 className="text-grey mt-3 dark:text-white">
                          Turbo
                        </h4>
                        <h4 className="text-grey mt-3 dark:text-white">
                          Tahun
                        </h4>
                        <h4 className="text-grey mt-3 dark:text-white">
                          Harga
                        </h4>
                      </div>
                      <div className="col-span-1">
                        <p className="text-black-100 font-semibold dark:text-white">
                          : {car.class} cc
                        </p>
                        <p className="text-black-100 font-semibold capitalize mt-3 dark:text-white">
                          : {car.fuel_type}
                        </p>
                        <p className="text-black-100 font-semibold capitalize mt-3 dark:text-white">
                          : {car.transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                        <p className="text-black-100 font-semibold capitalize mt-3 dark:text-white">
                          : {car.combination_mpg === "y" ? "Ya" : "Tidak"}
                        </p>
                        <p className="text-black-100 font-semibold capitalize mt-3 dark:text-white">
                          : {car.year}
                        </p>
                        <p className="text-black-100 font-semibold capitalize mt-3 dark:text-white">
                          : Rp.{car.price}.000/hari
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href={car.link}>
                  <CustomButton
                    title="Cek ketersediaan"
                    containerStyles="w-full py-[16px] rounded-full bg-primary-blue text-white"
                  />
                </Link>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default CardDetails
