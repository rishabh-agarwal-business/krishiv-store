'use client';

import { useThemeStore } from '@/store/zustand/theme.store';
import { useEffect } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
    const theme = useThemeStore((state) => state.theme);
    const setTheme = useThemeStore((state) => state.setTheme);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const root = document.documentElement;

        const mediaQuery = window.matchMedia(
            '(prefers-color-scheme: dark)'
        );

        const applyTheme = () => {
            root.classList.remove('light', 'dark');

            let resolvedTheme: 'light' | 'dark';

            if (theme === 'system') {
                resolvedTheme = mediaQuery.matches ? 'dark' : 'light';
            } else {
                resolvedTheme = theme;
            }

            root.classList.add(resolvedTheme);
        };

        applyTheme();

        const handleChange = () => {
            if (theme === 'system') {
                applyTheme();
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [theme]);

    // Load saved theme on mount
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const savedTheme =
            (localStorage.getItem('theme') as Theme) || 'system';

        setTheme(savedTheme);
    }, [setTheme]);

    return {
        theme,
        setTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light',
        isSystem: theme === 'system',
    };
}