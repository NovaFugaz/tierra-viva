'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      color: '#94A3B8',
      fontSize: '0.875rem',
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#6B9B76', // Verde salvia suave
      light: '#8FB996',
      dark: '#557C5F',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2C3639', // Gris oscuro cálido
      light: '#3F4E4F',
      dark: '#1F2937',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8FAF6', // Beige muy claro
      paper: '#ffffff',
    },
    success: {
      main: '#85B79D', // Verde salvia claro
      light: '#A7C9B6',
    },
    warning: {
      main: '#E6B89C', // Terracota suave
      light: '#F4D0B3',
    },
    info: {
      main: '#A5C0DD', // Azul lavanda
      light: '#C4D7ED',
    },
    error: {
      main: '#D88C9A', // Rosa tierra
      light: '#E6B3BD',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#2C3639',
          color: '#ffffff',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          minWidth: '40px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
          },
          '&.Mui-selected': {
            backgroundColor: '#6B9B76',
            '&:hover': {
              backgroundColor: '#557C5F',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
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
          backgroundColor: 'rgba(133, 183, 157, 0.1)',
          color: '#85B79D',
        },
        colorWarning: {
          backgroundColor: 'rgba(230, 184, 156, 0.1)',
          color: '#E6B89C',
        },
        colorInfo: {
          backgroundColor: 'rgba(165, 192, 221, 0.1)',
          color: '#A5C0DD',
        },
        colorError: {
          backgroundColor: 'rgba(216, 140, 154, 0.1)',
          color: '#D88C9A',
        },
      },
    },
  },
});
