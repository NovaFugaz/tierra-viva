'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const CURSOS: Record<string, string[]> = {
  '1° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
  '2° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
  '3° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
  '4° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
  '5° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
  '6° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
};

export default function CursosPage() {
  const [openCurso, setOpenCurso] = useState<string | null>(null);
  const theme = useTheme();

  const handleCursoClick = (curso: string) => {
    setOpenCurso(openCurso === curso ? null : curso);
  };

  return (
    <Box
      component="main"
      sx={{
        p: 4,
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Mis Cursos
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 3,
        }}
      >
        {Object.entries(CURSOS).map(([curso, asignaturas]) => (
          <Paper
            key={curso}
            elevation={0}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              transition: 'all 0.2s ease-in-out',
              bgcolor: 'background.paper',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow:
                  theme.palette.mode === 'dark'
                    ? '0 4px 12px rgba(0, 0, 0, 0.5)'
                    : '0 4px 12px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <ListItemButton
              onClick={() => handleCursoClick(curso)}
              sx={{
                py: 2,
                px: 3,
                borderLeft: 6,
                borderColor: 'primary.main',
                '&:hover': {
                  bgcolor:
                    theme.palette.mode === 'dark'
                      ? 'rgba(107, 155, 118, 0.08)'
                      : 'rgba(107, 155, 118, 0.04)',
                },
              }}
            >
              <ListItemText
                primary={curso}
                primaryTypographyProps={{
                  variant: 'h6',
                  sx: {
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  },
                }}
              />
              {openCurso === curso ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCurso === curso} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pb: 1 }}>
                {asignaturas.map((asignatura: string) => (
                  <ListItem key={asignatura} disablePadding sx={{ pl: 3 }}>
                    <ListItemButton
                      sx={{
                        pl: 4,
                        py: 1,
                        '&:hover': {
                          bgcolor:
                            theme.palette.mode === 'dark'
                              ? 'rgba(107, 155, 118, 0.08)'
                              : 'rgba(107, 155, 118, 0.04)',
                        },
                      }}
                    >
                      <ListItemText
                        primary={asignatura}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: '0.95rem',
                            fontWeight: 400,
                          },
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
