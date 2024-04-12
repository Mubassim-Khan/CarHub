import { CarProps } from "@/types";

const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=rs6";

export async function fetchCars() {
  try {
    const headers: HeadersInit = {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY || "",
      "X-RapidAPI-Host": process.env.RAPID_API_HOST || "",
    };

    const res = await fetch(url, {
      headers: headers,
      method: "GET",
    });

    const result = await res.json();
    return result;
  } catch (e) {
    console.error(e);
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const milleageFactor = 0.1;
  const ageFactor = 0.05;

  const milleageRate = city_mpg * milleageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + milleageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
