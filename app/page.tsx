"use client";
import Image from "next/image";
import {
  CarCard,
  Hero,
  Testimonials,
} from "../components";
import { dataCars } from "@/utils";
import Faq from "@/components/Faq";

export default async function Home() {
  const jsoncar = dataCars;
  const isDataEmpty = !Array.isArray(jsoncar) || jsoncar.length < 1 || !jsoncar;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
            Katalog Mobil
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-white">
            Cari mobil sesuai kebutuhan anda
          </p>
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
     
      <Testimonials />
      <Faq />
    </main>
  );
}
