'use client';
import React from 'react'
import { useState } from 'react';
import SearchBrand from './SearchBrand';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(brand === '' && model === '') {
      return alert('Kolom pencarian tidak boleh kosong')
    }
    updateSearchParams(model.toLowerCase(), brand.toLowerCase());
  }
  const updateSearchParams = (model: string, brand: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if(model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }
    if (brand) {
      searchParams.set('brand', brand)
    } else {
      searchParams.delete('brand')
    }

    const newPath = `${window.location.pathname}?${searchParams.toString}`
    router.push(newPath);
  }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchBrand
        brand={brand}
        setBrand={setBrand}
        />
        <SearchButton otherClass='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image 
        src='/model-icon.png'
        width={25}
        height={25}
        className='absolute w-[20px] h-[20px] ml-4'
        alt='car model'
        />
        <input 
        type='text'
        name='model'
        value={model}
        onChange={(e)=> setModel(e.target.value)}
        placeholder='Xpander'
        className='searchbar__input'
        />
        <SearchButton otherClass='sm:hidden' />
      </div>
      <SearchButton otherClass='max-sm:hidden' />
    </form>
  )
}

export default SearchBar
