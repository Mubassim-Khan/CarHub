import { CarProps, FilterProps } from "@/types";

const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, fuel, model, limit } = filters;

  // Appending the parameters, into URL using searchParams method. (Could also concatente in URL using string literals, but was hiding URL in this case)
  url.searchParams.append("make", manufacturer);
  url.searchParams.append("year", year.toString());
  url.searchParams.append("model", model);
  url.searchParams.append("limit", limit.toString());
  url.searchParams.append("fuel_type", fuel);

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

  url.searchParams.append("customer", process.env.NEXT_PUBLIC_IMAGIN_STUDIO_API || "");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

// Made this function as global, to access easily.
export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
