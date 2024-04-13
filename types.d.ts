import { MouseEventHandler } from "react";

type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
};

type SearchManufacturerProps = {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
};

type CarProps = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

type FilterProps = {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
};

type OptionProps = {
  title: string;
  value: string;
};

type CustomFilterProps = {
  title: string;
  options: OptionProps[];
};
