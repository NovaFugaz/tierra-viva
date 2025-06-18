'use client';
import { useState } from 'react';
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText, Divider, LinearProgress } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

const courses = [
  {
    id: 1,
    name: '1° Básico',
    students: [
      { name: 'Ana García', progress: 85 },
      { name: 'Carlos López', progress: 92 },
      { name: 'Diana Pérez', progress: 78 },
      { name: 'Eduardo Soto', progress: 88 },
      { name: 'Francisca Rojas', progress: 95 }
    ]
  },
  {
    id: 2,
    name: '2° Básico',
    students: [
      { name: 'Gabriel Torres', progress: 82 },
      { name: 'Hugo Martínez', progress: 89 },
      { name: 'Isabel Núñez', progress: 94 },
      { name: 'Jorge Muñoz', progress: 77 },
      { name: 'Karla Vega', progress: 91 }
    ]
  },
  {
    id: 3,
    name: '3° Básico',
    students: [
      { name: 'Laura Silva', progress: 87 },
      { name: 'Marco Bravo', progress: 83 },
      { name: 'Natalia Castro', progress: 90 },
      { name: 'Oscar Morales', progress: 86 },
      { name: 'Paula Vargas', progress: 93 }
    ]
  }
];

export default function ReportesPage() {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Reportes
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
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BarChartIcon sx={{ mr: 1 }} />
                <Typography variant="h6">
                  {course.name}
                </Typography>
              </Box>
              {selectedCourse === course.id && (
                <>
                  <Divider sx={{ my: 1 }} />
                  <List>
                    {course.students.map((student, index) => (
                      <ListItem key={index}>
                        <Box sx={{ width: '100%' }}>
                          <Typography variant="body2" gutterBottom>
                            {student.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ width: '100%', mr: 1 }}>
                              <LinearProgress 
                                variant="determinate" 
                                value={student.progress} 
                                color={student.progress >= 90 ? "success" : student.progress >= 80 ? "primary" : "warning"}
                              />
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              {student.progress}%
                            </Typography>
                          </Box>
                        </Box>
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
