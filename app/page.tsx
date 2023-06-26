"use client";
import Image from "next/image";
import {
  CarCard,
  CustomFilter,
  Hero,
  SearchBar,
  Testimonials,
} from "../components";
import { dataCars } from "@/utils";
import { ThemeProvider } from "next-themes";

export default async function Home() {
  const jsoncar = dataCars;
  const isDataEmpty = !Array.isArray(jsoncar) || jsoncar.length < 1 || !jsoncar;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold dark:text-white">
            Katalog Mobil
          </h1>
          <p className="dark:text-white">Cari mobil sesuai kebutuhan Anda</p>
        </div>

        {!isDataEmpty ? (
          <section id="card">
            <div className="home__cars-wrapper">
              {jsoncar.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, tidak ada hasil
            </h2>
          </div>
        )}
      </div>
      <div className="home__text-container px-8">
        <h1 className="text-4xl font-extrabold dark:text-white">Testimoni</h1>
        <p className="dark:text-white">Apa kata mereka tentang Berkah Travel Trans?</p>
      </div>
      <Testimonials />
    </main>
  );
}
