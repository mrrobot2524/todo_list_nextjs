'use client'
import { useEffect, useState } from "react";
import Button from "./UI/Button";
import ThemeBtn from "./UI/ThemeBtn";


const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if(saved){
            setTheme(saved);
            document.body.classList.toggle("dark", saved === "dark");
            document.documentElement.classList.toggle("dark", saved === "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        document.body.classList.toggle("dark", newTheme === "dark");
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    return (
        <Button onClick={toggleTheme} variant="cleanBtn" sizeBtn="sm" className="flex justify-center items-center">
            <ThemeBtn theme={theme} />
            {theme === "light" ? "Dark mode" : "Light mode"}
        </Button>
    );
}
export default ThemeToggle;