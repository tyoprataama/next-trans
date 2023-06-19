// export async function fetchCars() {
//   const headers = {
//     'X-RapidAPI-Key': '876dd8756dmsh47b32e6f19b5b24p1be061jsn4d57a4832b11',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   }
//   const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
//     headers: headers,
//   });
//   const result = await response.json();
//   return result;
// }

export const dataCars = 
  [
    {
      city_kml:12.2,
      price: 550,
      class:2500,
      combination_mpg:"y",
      cylinders:4,
      displacement:1.6,
      drive:"fwd",
      fuel_type:"diesel",
      highway_mpg:31,
      make:"toyota",
      model:"innova reborn",
      transmission:"m",
      year:2017,
      img: "/car-innova.png",
      img2: "/car-innova-1.png",
      img3: "/car-innova-2.png",
    },
    {
      city_kml:23,
      price: 350,
      class:1500,
      combination_mpg:"n",
      cylinders:4,
      displacement:1.6,
      drive:"fwd",
      fuel_type:"bensin",
      highway_mpg:31,
      make:"daihatsu",
      model:"xenia",
      transmission:"a",
      year:2022,
      img: '/car-xenia.png',
      img2: '/car-xenia-1.png',
      img3: '/car-xenia-2.png',
    },
    {
      city_kml:23,
      price: 450,
      class:1500,
      combination_mpg:"n",
      cylinders:4,
      displacement:1.6,
      drive:"fwd",
      fuel_type:"bensin",
      highway_mpg:31,
      make:"nissan",
      model:"livina",
      transmission:"m",
      year:2016,
      img: '/car-livina.png',
      img2: '/car-livina-1.png',
      img3: '/car-livina-2.png',
    },
    {
      city_kml:22,
      price: 550,
      class:2000,
      combination_mpg:"y",
      cylinders:4,
      displacement:1.7,
      drive:"fwd",
      fuel_type:"bensin",
      highway_mpg:32,
      make:"honda",
      model:"hrv",
      transmission:"m",
      year:2021,
      img: '/car-hrv.png',
      img2: '/car-hrv-1.png',
      img3: '/car-hrv-2.png',
    },
    {
      city_kml:12,
      price: 350,
      class:1500,
      combination_mpg:"n",
      cylinders:4,
      displacement:1.7,
      drive:"fwd",
      fuel_type:"bensin",
      highway_mpg:32,
      make:"mitsubisi",
      model:"xpander",
      transmission:"a",
      year:2022,
      img: '/car-xpander.png',
      img2: '/car-xpander-1.png',
      img3: '/car-xpander-2.png',
    }
  ]

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 345; // Base rental price per day in dollars
  const mileageFactor = 13; // Additional rate per mile driven
  const ageFactor = 55; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
