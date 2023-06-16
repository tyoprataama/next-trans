'use client'
import { Combobox, Transition } from '@headlessui/react'
import { SearchBrandProps } from '@/types'
import React from 'react'
import { useState, Fragment } from 'react'
import Image from 'next/image'
import { manufacturers } from '@/constants'

const SearchBrand = ({brand, setBrand}:SearchBrandProps) => {
  const [query, setQuery] = useState('');
  const filteredBrand = 
  query === ""
  ? manufacturers 
  : manufacturers.filter((item) => (
    item.toLocaleLowerCase()
    .replace(/\s+/g, "")
    .includes(query.toLowerCase().replace(/\s+/g, ""))
  ))
  return (
    <div className="search-manufacturer">
      <Combobox value={brand} onChange={setBrand}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Mitsubisi"
            displayValue={(brand: string) => brand}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredBrand.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  <span className="text-gray-400">
                    Tidak ada data untuk '{query}'
                  </span>
                </Combobox.Option>
              ) : (
                filteredBrand.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? "text-white"
                                : "text-pribg-primary-purple"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchBrand
