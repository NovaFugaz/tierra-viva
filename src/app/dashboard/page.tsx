'use client';

import { Box, Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import {
  School as SchoolIcon,
  Group as GroupIcon,
  Assignment as AssignmentIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import Sidebar from '../components/Sidebar';
function Dashboard() {
  const stats = {
    cursosActivos: 4,
    estudiantes: 120,
    tareasPendientes: 8,
    alertas: 3,
  };

  const StatCard = ({ title, value, icon: Icon, color }: { title: string; value: number; icon: any; color: string }) => (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: color,
        color: 'white',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Icon sx={{ fontSize: 40, opacity: 0.8 }} />
      </Box>
      <Typography variant="h3" component="div" sx={{ mb: 1 }}>
        {value}
      </Typography>
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
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
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
        <Container maxWidth={false}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
            Panel Principal
          </Typography>          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: 'repeat(4, 1fr)'
            },
            gap: 3,
            mb: 4
          }}>
            <StatCard
              title="Cursos Activos"
              value={stats.cursosActivos}
              icon={SchoolIcon}
              color="#2196f3"
            />
            <StatCard
              title="Estudiantes"
              value={stats.estudiantes}
              icon={GroupIcon}
              color="#4caf50"
            />
            <StatCard
              title="Tareas Pendientes"
              value={stats.tareasPendientes}
              icon={AssignmentIcon}
              color="#ff9800"
            />
            <StatCard
              title="Alertas"
              value={stats.alertas}
              icon={NotificationsIcon}
              color="#f44336"
            />
          </Box>          <Box sx={{ mt: 3 }}>
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
      </Box>
    </Box>
  );
}

export default Dashboard;
