import React, { useState, useContext, createContext } from "react";
import axios from "axios";

const DataContext = createContext({});

export const useData = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(null);

    const getData = async () => {

        const response = await axios(`http://localhost:8080/ad/d1508053-0982-401d-985d-e9660d2a0cbc`, {
            method: "GET",
            mode: "cors",
        })
        .catch(error => {
            console.log("Something went wrong", error);
        });
        setData(response.data);
    };

    const state = {
        getData,
        data
    };

    return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};