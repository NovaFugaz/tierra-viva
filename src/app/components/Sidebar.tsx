'use client';

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  Avatar,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  MenuBook as MenuBookIcon,
  CalendarMonth as CalendarIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';

const drawerWidth = 240;

const menuItems = [
  { text: 'Panel Principal', icon: DashboardIcon, path: '/dashboard' },
  { text: 'Mis Cursos', icon: SchoolIcon, path: '/cursos' },
  { text: 'Estudiantes', icon: MenuBookIcon, path: '/estudiantes' },
  { text: 'Tareas', icon: AssignmentIcon, path: '/tareas' },
  { text: 'Calendario', icon: CalendarIcon, path: '/calendario' },
  { text: 'Reportes', icon: AssessmentIcon, path: '/reportes' },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          TierraViva
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          Panel del Docente
        </Typography>
      </Box>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            width: 40,
            height: 40,
          }}
        >
          <PersonIcon />
        </Avatar>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: 'white', fontWeight: 500 }}
          >
            Profesor
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Asignatura de Ejemplo
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => router.push(item.path)}
              selected={pathname === item.path}
            >
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => router.push('/configuracion')}
            selected={pathname === '/configuracion'}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configuración" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
