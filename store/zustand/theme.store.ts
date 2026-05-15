'use client';

import { create } from 'zustand';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
    theme: 'system',

    setTheme: (theme) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }

        set({ theme });
    },
}));