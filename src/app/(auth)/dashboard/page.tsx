'use client';

import { Box, Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import {
  School as SchoolIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';
import ProximasActividades from '@/app/components/ProximasActividades';

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
      elevation={0}
      sx={{ 
        p: 3, 
        display: 'flex', 
        alignItems: 'center', 
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)'
      }}
    >
      <Box sx={{ mr: 2, bgcolor: color, p: 1.5, borderRadius: 1.5 }}>
        <Icon sx={{ color: 'white' }} />
      </Box>
      <Box>
        <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 600 }}>{value}</Typography>
        <Typography color="text.secondary" variant="subtitle2">{title}</Typography>
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
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5" sx={{ mb: 3 }}>Panel Principal</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Cursos Activos"
                value={stats.cursosActivos}
                icon={SchoolIcon}
                color="primary.main"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Estudiantes"
                value={stats.estudiantes}
                icon={GroupIcon}
                color="success.main"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Tareas Pendientes"
                value={stats.tareasPendientes}
                icon={AssignmentIcon}
                color="warning.main"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                title="Alertas"
                value={stats.alertas}
                icon={NotificationsIcon}
                color="error.main"
              />
            </Grid>
            {/* Aquí irían más componentes del dashboard */}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <ProximasActividades />
        </Grid>
      </Grid>
    </Container>
  );
}
