import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'hok-home3' | 'classic';

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'codemario_theme_mode';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'classic' || saved === 'hok-home3') {
        return saved;
      }
    } catch (e) {
      console.error('Failed to read theme mode from localStorage', e);
    }
    return 'hok-home3'; // Default to Hok Home-3 theme
  });

  const setThemeMode = (mode: ThemeMode) => {
    setThemeState(mode);
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {
      console.error('Failed to save theme mode to localStorage', e);
    }
  };

  const resetTheme = () => {
    setThemeMode('classic');
  };

  // Listen for 'reset my theme' keyword events or keyboard trigger
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Shortcut Ctrl+Alt+R to trigger "Reset my theme"
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'r') {
        resetTheme();
      }
    };

    const handleCustomResetEvent = (e: CustomEvent) => {
      if (e.detail && typeof e.detail === 'string' && e.detail.toLowerCase().includes('reset my theme')) {
        resetTheme();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    window.addEventListener('codemario_reset_theme' as any, handleCustomResetEvent);

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
      window.removeEventListener('codemario_reset_theme' as any, handleCustomResetEvent);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, resetTheme }}>
      <div className={`theme-${themeMode} min-h-screen transition-colors duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
