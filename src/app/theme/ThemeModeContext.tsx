'use client';

import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

type ThemeModeContextType = {
  toggleThemeMode: () => void;
  mode: 'light' | 'dark';
};

const ThemeModeContext = createContext<ThemeModeContextType>({
  toggleThemeMode: () => {},
  mode: 'light',
});

export function useThemeMode() {
  return useContext(ThemeModeContext);
}

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h6: {
            fontWeight: 600,
          },
          subtitle1: {
            fontWeight: 500,
          },
          subtitle2: {
            color: mode === 'light' ? '#94A3B8' : '#94A3B8',
            fontSize: '0.875rem',
          }
        },
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // Paleta clara
                primary: {
                  main: '#6B9B76',
                  light: '#8FB996',
                  dark: '#557C5F',
                  contrastText: '#ffffff',
                },
                secondary: {
                  main: '#2C3639',
                  light: '#3F4E4F',
                  dark: '#1F2937',
                  contrastText: '#ffffff',
                },
                background: {
                  default: '#F8FAF6',
                  paper: '#ffffff',
                },
                text: {
                  primary: '#1F2937',
                  secondary: '#6B7280',
                },
              }
            : {
                // Paleta oscura
                primary: {
                  main: '#8FB996',
                  light: '#A7C9B6',
                  dark: '#6B9B76',
                  contrastText: '#ffffff',
                },
                secondary: {
                  main: '#3F4E4F',
                  light: '#546A6B',
                  dark: '#2C3639',
                  contrastText: '#ffffff',
                },                background: {
                  default: '#0F1117',
                  paper: '#161821',
                },
                text: {
                  primary: '#F9FAFB',
                  secondary: '#9CA3AF',
                },
              }),
        },
        components: {
          MuiDrawer: {
            styleOverrides: {
              paper: {
                backgroundColor: mode === 'light' ? '#2C3639' : '#111827',
                color: '#ffffff',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: mode === 'light' ? '#ffffff' : '#1F2937',
                boxShadow: mode === 'light' 
                  ? '0px 2px 4px rgba(0, 0, 0, 0.05)'
                  : '0px 2px 4px rgba(0, 0, 0, 0.2)',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
          MuiListItemButton: {
            styleOverrides: {
              root: {
                '&:hover': {
                  backgroundColor: mode === 'light'
                    ? 'rgba(107, 155, 118, 0.08)'
                    : 'rgba(143, 185, 150, 0.08)',
                },
                '&.Mui-selected': {
                  backgroundColor: mode === 'light' ? '#6B9B76' : '#557C5F',
                  '&:hover': {
                    backgroundColor: mode === 'light' ? '#6B9B76' : '#557C5F',
                  },
                },
              },
            },
          },
          MuiChip: {
            styleOverrides: {
              root: {
                borderRadius: '6px',
                fontWeight: 500,
              },
              colorSuccess: {
                backgroundColor: mode === 'light' 
                  ? 'rgba(133, 183, 157, 0.1)'
                  : 'rgba(133, 183, 157, 0.2)',
                color: mode === 'light' ? '#557C5F' : '#A7C9B6',
              },
              colorWarning: {
                backgroundColor: mode === 'light'
                  ? 'rgba(230, 184, 156, 0.1)'
                  : 'rgba(230, 184, 156, 0.2)',
                color: mode === 'light' ? '#C17F59' : '#E6B89C',
              },
              colorInfo: {
                backgroundColor: mode === 'light'
                  ? 'rgba(165, 192, 221, 0.1)'
                  : 'rgba(165, 192, 221, 0.2)',
                color: mode === 'light' ? '#4B70A2' : '#A5C0DD',
              },
              colorError: {
                backgroundColor: mode === 'light'
                  ? 'rgba(216, 140, 154, 0.1)'
                  : 'rgba(216, 140, 154, 0.2)',
                color: mode === 'light' ? '#B55A6A' : '#D88C9A',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
