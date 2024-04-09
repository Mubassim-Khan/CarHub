"use client";

import { useState } from "react";
import {SearchManufacturer} from "./";

export default function SearchBar() {
    const [manufacturer, setManufacturer] = useState('')

    const handleSearch = () => {}

  return (
    <form className='seachbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
        </div>
    </form>
  )
}
