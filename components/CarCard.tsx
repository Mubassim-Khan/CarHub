"use client";

import { CarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CarDetails from "./CarDetails";

type CarCardProps = {
  car: CarProps;
};

export default function CarCard({ car }: CarCardProps) {
  // De-structuring the properties from 'car'
  const { city_mpg, year, make, model, transmission, drive, cylinders } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car, "1")}
          alt="car"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          {/* If property 'cylinders' is null from JSON data, display 'EV' in place of it */}
          {!cylinders ? (
            <>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/leaf.png" width={22} height={22} alt="piston" />
                <p className="text-[14px]">{"EV"}</p>
              </div>
              {/* Changing the unit for EVs from MPG to kWh */}
              <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/charger.png" width={20} height={20} alt="gas" />
                <p className="text-[14px]">{city_mpg} kWh</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/piston.png" width={22} height={22} alt="piston" />
                <p className="text-[14px]">{cylinders}</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image src="/gas.svg" width={20} height={20} alt="gas" />
                <p className="text-[14px]">{city_mpg} MPG</p>
              </div>
            </>
          )}
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            btnType="button"
            handleClick={() => setIsOpen(true)}
            rightIcon="/right-arrow.svg"
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}
