"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DropDownProps } from '@/types';
import { useFilterContext } from '@/context/Filters';

const HousesDropDown: React.FC = (
  // {house,setHouse} : DropDownProps
  ) => {
    const {house,setHouse} = useFilterContext();

    const handleChange = (event: SelectChangeEvent) => {
        setHouse(event.target.value);

    };
  return (
    <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">House</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={house}
          label="House"
          onChange={handleChange}
        >
          <MenuItem value={"Gryffindor"}>Gryffindor</MenuItem>
          <MenuItem value={"Hufflepuff"}>Hufflepuff</MenuItem>
          <MenuItem value={"Ravenclaw"}>Ravenclaw</MenuItem>
          <MenuItem value={"Slytherin"}>Slytherin</MenuItem>
          <MenuItem value={"All Houses"}>All Houses</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default HousesDropDown
