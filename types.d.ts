import { MouseEventHandler } from "react";

type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
};

type SearchManufacturerProps = {
  manufacturer: string,
  setManufacturer: (manufacturer: string) => void
}