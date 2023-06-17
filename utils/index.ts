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
      id: 0,
      city_mpg:12.2,
      price: 550,
      class:"compact car",
      combination_mpg:26,
      cylinders:4,
      displacement:1.6,
      drive:"fwd",
      fuel_type:"gas",
      highway_mpg:31,
      make:"toyota",
      model:"innova reborn",
      transmission:"m",
      year:2017,
    },
    {
      id: 1,
      city_mpg:23,
      price: 350,
      class:"compact car",
      combination_mpg:26,
      cylinders:4,
      displacement:1.6,
      drive:"fwd",
      fuel_type:"gas",
      highway_mpg:31,
      make:"daihatsu",
      model:"xenia",
      transmission:"a",
      year:2022,
    },
    {
      id: 2,
      city_mpg:23,
      price: 450,
      class:"compact car",
      combination_mpg:26,
      cylinders:4,
      displacement:1.6,
      drive:"fwd",
      fuel_type:"gas",
      highway_mpg:31,
      make:"nissan",
      model:"grand livina",
      transmission:"m",
      year:2016,
    },
    {
      id: 3,
      city_mpg:22,
      price: 550,
      class:"compact car",
      combination_mpg:23,
      cylinders:4,
      displacement:1.7,
      drive:"fwd",
      fuel_type:"gas",
      highway_mpg:32,
      make:"honda",
      model:"hrv",
      transmission:"m",
      year:2021,
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
