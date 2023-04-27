import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Header.module.scss";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header() {
  const [theme, setTheme] = useState();

  const prefersDarkSchemeRef = useRef();


  useEffect(() => {
    prefersDarkSchemeRef.current = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const currentTheme = localStorage.getItem("theme") !== null && localStorage.getItem("theme") !== 'undefined'
      ? localStorage.getItem("theme")
      : "light mode";

    
    if (currentTheme === "dark mode") {
      document.body.classList.add("dark-theme");
    } else if (currentTheme === "light mode") {
      document.body.classList.add("light-theme");
    }
    
    setTheme(currentTheme);

  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const handleTheme = () => {
    if (prefersDarkSchemeRef.current.matches) {
      if (document.body.classList.contains("light-theme")) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
      }

      setTheme(
        document.body.classList.contains("light-theme")
          ? "light mode"
          : "dark mode"
      );
    } else {
      if (document.body.classList.contains("dark-theme")) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
      } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
      }

      setTheme(
        document.body.classList.contains("dark-theme")
          ? "dark mode"
          : "light mode"
      );
    }
    
    // localStorage.setItem('theme', theme)
  };

  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <button onClick={handleTheme}>
        {theme === "light mode" ? (
          <MdOutlineLightMode />
        ) : (
          <MdOutlineDarkMode />
        )}
        {theme}
      </button>
    </header>
  );
}
