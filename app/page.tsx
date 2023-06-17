import Image from 'next/image'
import { CarCard, CustomFilter, Hero, SearchBar } from '../components'
import { dataCars } from '@/utils'

export default async function Home() {
  const jsoncar = dataCars;
  const isDataEmpty = !Array.isArray(jsoncar) || jsoncar.length<1 || !jsoncar;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Katalog Mobil</h1>
          <p>Cari mobil sesuai kebutuhan Anda</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {jsoncar.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ): (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, tidak ada hasil</h2>
          </div>
        )}
      </div>
    </main>
  )
}
