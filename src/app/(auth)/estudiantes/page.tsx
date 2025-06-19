'use client';
import { useState } from 'react';
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const courses = [
  {
    id: 1,
    name: '1° Básico',
    students: [
      'Ana García',
      'Carlos López',
      'Diana Pérez',
      'Eduardo Soto',
      'Francisca Rojas'
    ]
  },
  {
    id: 2,
    name: '2° Básico',
    students: [
      'Gabriel Torres',
      'Hugo Martínez',
      'Isabel Núñez',
      'Jorge Muñoz',
      'Karla Vega'
    ]
  },
  {
    id: 3,
    name: '3° Básico',
    students: [
      'Laura Silva',
      'Marco Bravo',
      'Natalia Castro',
      'Oscar Morales',
      'Paula Vargas'
    ]
  }
];

export default function EstudiantesPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Estudiantes
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
        {courses.map((course) => (
          <Card
            key={course.id}
            sx={{
              cursor: 'pointer',
              bgcolor: selectedCourse === course.id ? 'primary.light' : 'background.paper',
              '&:hover': { bgcolor: 'primary.light' }
            }}
            onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {course.name}
              </Typography>
              {selectedCourse === course.id && (
                <>
                  <Divider sx={{ my: 1 }} />
                  <List>
                    {course.students.map((student, index) => (
                      <ListItem key={index}>
                        <PersonIcon sx={{ mr: 1 }} />
                        <ListItemText primary={student} />
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
