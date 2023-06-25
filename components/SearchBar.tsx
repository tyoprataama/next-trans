'use client';
import React from 'react'
import { useState } from 'react';
import SearchBrand from './SearchBrand';
import Image from 'next/image';

const SearchButton = ({otherClass}:{otherClass:string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClass}`}>
    <Image 
    src='/magnifying-glass.svg'
    alt='magnifying glass'
    width={40}
    height={40}
    className='object-contain'
    />
  </button>
)
const SearchBar = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(brand === '' && model === '') {
      return alert('Kolom pencarian tidak boleh kosong')
    }
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchBrand
        brand={brand}
        setBrand={setBrand}
        />
      </div>
      <SearchButton otherClass='max-sm:hidden' />
    </form>
  )
}

export default SearchBar
