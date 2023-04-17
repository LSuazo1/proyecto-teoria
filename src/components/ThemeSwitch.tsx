import { useContext, useState } from "react";

interface Theme {
    theme: 'dark' | 'light';
    icon: '🌙' | '🌞';
}

export default function ThemeSwitch() {
    const [theme, setTheme] = useState('dark' || 'light')

    return (
        <div className="flex items-center">
            <button
                className="flex items-center justify-center text-3xl"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? '🌚' : '🌞'}
            </button>
        </div>
    );
}