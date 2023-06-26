import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import React from 'react'

const Faq = () => {
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 dark:bg-neutral-900">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
              FAQ'S
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-white">
              Pertanyaan yang sering ditanyakan
            </p>
          </div>

          <div className="mx-auto w-full max-w-md rounded-2xl bg-white dark:bg-neutral-900 p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>
                      Apasaja jaminan yang harus disiapkan ketika menyewa mobil?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:bg-neutral-800 dark:text-gray-200">
                    Untuk pelanggan baru, Anda cukup menyediakan KTP dan KK{" "}
                    <span className="font-bold">Asli </span> sebagai jaminan.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>
                      Berapa biaya yang diperlukan jika hanya menyewa 12jam
                      saja?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:bg-neutral-800 dark:text-gray-200">
                    Untuk sewa 12jam, biaya sewa akan dikurangi 50-100rb
                    tergantung jenis mobil.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>
                      Apa yang terjadi jika unit terlambat untuk kembali?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:bg-neutral-800 dark:text-gray-200">
                    Customer yang terlambat mengembalikan unit akan terkena
                    denda 15-20rb per jam nya tergantung jenis mobil yang disewa.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>
                      Apakah terdapat fasilitas tambahan seperti sopir?
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 dark:bg-neutral-800 dark:text-gray-200">
                    Tentu saja, hubungi admin untuk detail lebih lanjut.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <p className="text-center text-gray-600 dark:text-white textbase mt-9">
          Tidak menemukan jawaban yang anda cari?{" "}
          <a
            href="https://api.whatsapp.com/send?phone=6281299090327&text=Halo%20Admin,%20saya%20mau%20bertanya%20terkait%20rental%20mobil"
            title="cs"
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Hubungi Admin
          </a>
        </p>
      </section>
    </div>
  );
}

export default Faq
