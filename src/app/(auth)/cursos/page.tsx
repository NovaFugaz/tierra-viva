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
import { ExpandLess, ExpandMore } from '@mui/icons-material';
const CURSOS = {
  '1° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
  '2° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
  '3° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
  '4° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
  '5° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
  '6° Básico': ['Lenguaje', 'Matemáticas', 'Ciencias Naturales', 'Historia'],
};

export default function Cursos() {
  const [openCurso, setOpenCurso] = useState<string | null>(null);

  const handleCursoClick = (curso: string) => {
    setOpenCurso(openCurso === curso ? null : curso);
  };

  return (    <Box sx={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          bgcolor: '#f5f5f5',
          p: 3,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Mis Cursos
        </Typography>        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
          {Object.entries(CURSOS).map(([curso, asignaturas]) => (
            <Box key={curso}>
              <Paper sx={{ mb: 2 }}>
                <ListItemButton onClick={() => handleCursoClick(curso)}>
                  <ListItemText 
                    primary={curso} 
                    primaryTypographyProps={{
                      variant: 'h6',
                      color: 'primary'
                    }}
                  />
                  {openCurso === curso ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openCurso === curso} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {asignaturas.map((asignatura) => (
                      <ListItem 
                        key={asignatura} 
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary={asignatura} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Paper>            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
