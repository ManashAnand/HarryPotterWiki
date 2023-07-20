'use client';

import { createContext, useContext, useState } from "react";

const FilterContext = createContext()

export const FilterContextProvider = ({ children }) => {

    const [house, setHouse] = useState('All Houses');
    const [role,setRole] = useState('');

    return (
        <FilterContext.Provider value={{ house, setHouse, role, setRole }}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext = () => useContext(FilterContext);