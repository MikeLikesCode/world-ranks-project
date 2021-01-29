import styles from "./Header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Brightness6Rounded } from "@material-ui/icons";

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark")
    } else {
      saveTheme("light")
    }
  };

  const saveTheme = (theme) =>{
    setTheme(theme);
    localStorage.setItem("theme",theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <div className={styles.container}>
      <Link href="/">
        <img className="link" src="/Logo.svg" />
      </Link>

      <button className={styles.themeSwitcher} onClick={switchTheme}>
        <Brightness6Rounded />
      </button>
    </div>
  );
}
