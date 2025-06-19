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
          bgcolor: '#1a237e', // Color azul oscuro
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          TierraViva
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => router.push(item.path)}
              sx={{
                color: 'white',
                bgcolor: pathname === item.path ? 'rgba(255,255,255,0.12)' : 'transparent',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
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
            sx={{
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configuración" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => router.push('/')}
            sx={{
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
