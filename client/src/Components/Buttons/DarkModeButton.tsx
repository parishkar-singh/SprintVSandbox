import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuSunMoon } from "react-icons/lu";

const DarkModeButton = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = (e:any) => {
        e.stopPropagation();
        e.preventDefault();
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <motion.button
            onClick={handleThemeSwitch}
            className={`dark:bg-neutral-900 rounded-full bg-red-500 hover:text-yellow-500 hover:bg-neutral-800 h-12 w-12 flex justify-center items-center`}
            whileHover={{ scale: 1.17 }}
            whileTap={{ scale: 0.9 }}>
            <LuSunMoon size={26} />
        </motion.button>
    );
};

export default DarkModeButton;
