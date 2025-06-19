'use client';

import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  DateRange as DateRangeIcon,
  Class as ClassIcon,
} from '@mui/icons-material';

export default function TareasPage() {
  const tareaEjemplo = {
    titulo: "Proyecto Ecosistemas",
    descripcion: "Crear una presentación sobre los diferentes tipos de ecosistemas y sus características principales.",
    curso: "Ciencias 6°A",
    fechaEntrega: "30 de junio, 2025",
    estado: "pendiente",
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Tareas Asignadas
      </Typography>
      
      <Grid container spacing={3}>
        {/* Tarea de ejemplo */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                  <AssignmentIcon />
                </Avatar>
                <Typography variant="h6">{tareaEjemplo.titulo}</Typography>
              </Box>
              
              <Typography variant="body2" color="text.secondary" paragraph>
                {tareaEjemplo.descripcion}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ClassIcon sx={{ fontSize: 20, mr: 0.5, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {tareaEjemplo.curso}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DateRangeIcon sx={{ fontSize: 20, mr: 0.5, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {tareaEjemplo.fechaEntrega}
                  </Typography>
                </Box>
              </Box>
              
              <Chip 
                label="Pendiente"
                color="warning"
                size="small"
                sx={{ mt: 1 }}
              />
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Ver Detalles
              </Button>
              <Button size="small" color="secondary">
                Revisar Entregas
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Card informativa */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', bgcolor: 'grey.50' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <AssignmentIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Más actividades próximamente
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nuevas tareas y actividades se añadirán en futuras actualizaciones.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
