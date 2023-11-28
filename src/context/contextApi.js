import React, {createContext, useState, useEffect} from "react";
import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(null);
    const [selectCategories, setSelectCategories] = useState("nature");
    const [mobileMenu, setMobileMenu] = useState(null);

    useEffect(() => {
        
    }, []);

    const fetchSelectedCategoryData = async () => {
        setLoading(true);
        const data = await fetchDataFromApi(`search?q=${selectCategories}`);
        setSearchResults(data);
        setLoading(false);
    };


    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                setSearchResults,
                selectCategories,
                setSelectCategories,
                mobileMenu,
                setMobileMenu
            }}
        >
            {props.children}
        </Context.Provider>
    );
};