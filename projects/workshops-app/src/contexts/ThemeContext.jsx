import { createContext, useContext } from 'react';

const ThemeContext = createContext();

// custom hooks to be used in the context consumers
export const useTheme = () => useContext( ThemeContext );

export default ThemeContext;