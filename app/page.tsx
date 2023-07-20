
import {
  CharCard,
  CustomButton,
  Filters,
  Hero,
  HousesDropDown,
} from "@/components";
import Image from "next/image";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { getAllCharacter } from "@/utils";
import { CharacterProps } from "@/types";
import AllCharacter from './../components/AllCharacter';

export default async function Home() {

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Character Catalogue</h1>
          <p>Explore characters you might .</p>
        </div> 
      
        <div className="  flex justify-center items-center mt-2">
          <div className="w-5/6   flex justify-between items-center">
            <HousesDropDown  />

              <Filters />
          </div>
        </div>

      <section>
        <div className=" sm:flex justify-center items-center mt-2">
          <AllCharacter/>
        </div>
      </section>
      </div>
    </main>
  );
}
