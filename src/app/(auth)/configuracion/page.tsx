'use client';

import {
  Container,
  Typography,
  Paper,
  Switch,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from '@mui/material';
import { DarkMode as DarkModeIcon } from '@mui/icons-material';
import { useThemeMode } from '@/app/theme/ThemeModeContext';

export default function ConfiguracionPage() {
  const { mode, toggleThemeMode } = useThemeMode();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Configuración
      </Typography>

      <Paper elevation={0} sx={{ 
        borderRadius: 2,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)'
      }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <DarkModeIcon color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Modo Oscuro" 
              secondary="Cambiar entre tema claro y oscuro"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={mode === 'dark'}
                onChange={toggleThemeMode}
                inputProps={{
                  'aria-label': 'Cambiar modo oscuro',
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </List>
      </Paper>
    </Container>
  );
}
