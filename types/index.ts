import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  value?: number
    // isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    // textStyles?: string;
    title: string | number;
    // rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

export interface DropDownProps{
  house: string,
  setHouse:  React.Dispatch<React.SetStateAction<string>>
}

export interface CharacterProps{
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}