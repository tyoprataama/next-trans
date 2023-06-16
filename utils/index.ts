export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '876dd8756dmsh47b32e6f19b5b24p1be061jsn4d57a4832b11',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });
  const result = await response.json();
  return result;
}