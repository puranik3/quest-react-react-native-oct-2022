import { createContext, useContext } from "react";

const WorkshopContext = createContext();

const useWorkshop = () => useContext( WorkshopContext );

export {
    WorkshopContext as default,
    useWorkshop
};