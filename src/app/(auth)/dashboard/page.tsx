'use client';

import { Box, Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import {
  School as SchoolIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';

interface StatCardProps {
  title: string;
  value: number;
  icon: SvgIconComponent;
  color: string;
}

export default function DashboardPage() {
  const stats = {
    cursosActivos: 4,
    estudiantes: 120,
    tareasPendientes: 8,
    alertas: 3,
  };

  const StatCard = ({ title, value, icon: Icon, color }: StatCardProps) => (
    <Paper 
      elevation={2}
      sx={{ 
        p: 3, 
        display: 'flex', 
        alignItems: 'center', 
        bgcolor: 'background.paper',
        borderRadius: 2
      }}
    >
      <Box sx={{ mr: 2, bgcolor: color, p: 1, borderRadius: 1 }}>
        <Icon sx={{ color: 'white' }} />
      </Box>
      <Box>
        <Typography variant="h6">{value}</Typography>
        <Typography color="textSecondary" variant="body2">{title}</Typography>
      </Box>
    </Paper>
  );

  const actividades = [
    {
      curso: 'Ciencias 6°A',
      actividad: 'Proyecto Ecosistemas',
      estado: 'Completado',
      fecha: '10/11/2023'
    },
    {
      curso: 'Ciencias 5°B',
      actividad: 'Evaluación Ciclo del Agua',
      estado: 'En revisión',
      fecha: '08/11/2023'
    },
    {
      curso: 'Ciencias 4°A',
      actividad: 'Taller Huerto Escolar',
      estado: 'Programado',
      fecha: '15/11/2023'
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Panel Principal</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Cursos Activos"
            value={stats.cursosActivos}
            icon={SchoolIcon}
            color="#1a237e"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Estudiantes"
            value={stats.estudiantes}
            icon={GroupIcon}
            color="#2e7d32"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Tareas Pendientes"
            value={stats.tareasPendientes}
            icon={AssignmentIcon}
            color="#ed6c02"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Alertas"
            value={stats.alertas}
            icon={NotificationsIcon}
            color="#d32f2f"
          />
        </Grid>
      </Grid>      <Box sx={{ mt: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Actividades Recientes
          </Typography>
          <List>
            {actividades.map((item, index) => (
              <ListItem 
                key={index} 
                divider={index !== actividades.length - 1}
                sx={{ px: 2, py: 1.5 }}
              >
                <ListItemIcon>
                  <AssignmentIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">
                      {item.actividad} - {item.curso}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      Estado: {item.estado} • Fecha: {item.fecha}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
}
