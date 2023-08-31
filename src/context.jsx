import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getUserPreferredTheme = () => {
  const userPrevTheme = localStorage.getItem("darkTheme") === "true";
  const userPreferredTheme = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  return userPrevTheme || userPreferredTheme;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getUserPreferredTheme());
  const [searchTerm, setSearchTerm] = useState("website");

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("darkTheme", newTheme);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
