"use client";

import React, { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

// A local component to display Search icon
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

export default function SearchBar() {
  // 2 states to keep track of input bars 
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  // Searches for a car using SSR 
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const clearSearch = () => {
    setManufacturer("");
    setModel("");
  };

  // A local component to clear input fields & display cross icon
  const ClearButton = ({ otherClasses }: { otherClasses: string }) => (
    <button
      type="button"
      className={`ml-2 mr-5 z-10 ${otherClasses}`}
      onClick={clearSearch}>
      <Image
        src="/remove.png"
        alt="remove"
        width={20}
        height={20}
        className="object-contain"
      />
    </button>
  );

  // Updates the parameters of URL by taking input from fields  
  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${window.location.pathname
      }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <ClearButton otherClasses="sm:hidden" />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
          autoComplete="off"
        />

        <ClearButton otherClasses="sm:hidden" />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <ClearButton otherClasses="max-sm:hidden" />
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}
