import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface  SearchBrandProps {
  brand: string;
  setBrand: (brand:string) => void;
}

export interface CarProps {
  city_kml:number;
  class:string;
  combination_mpg:number;
  cylinders:number;
  displacement:number;
  drive:string;
  fuel_type:string;
  highway_mpg:number;
  make:string;
  model:string;
  transmission:string;
  year:number;
}

export interface JsonProps {
  id: number;
  city_kml:number;
  price: number;
  class:number;
  combination_mpg:string;
  cylinders:number;
  displacement:number;
  drive:string;
  fuel_type:string;
  highway_mpg:number;
  make:string;
  model:string;
  transmission:string;
  year:number;
  img: string;
  img2: string;
  img3: string
}