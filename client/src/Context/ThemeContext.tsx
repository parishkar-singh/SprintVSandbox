import React, { createContext, useContext, useState } from 'react';

// Create a context for managing dark mode state
const DarkThemeContext = createContext();

export const useDarkTheme = () => useContext(DarkThemeContext);

// DarkThemeContextProvider component to wrap your application and manage the dark mode state
export const DarkThemeContextProvider = ({ children }) => {
  // State to track the dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    // You can also save the dark mode preference in local storage for persistence
    // localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <DarkThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
