import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from './Logo';
import { getBorderBottom } from './utils';

const navItems = ['PALVELUT', 'RENGASMYYNTI JA -HOTELLI', 'MEISTÄ', 'YHTEYSTIEDOT'];

const NavBar: React.FC = () => {
  const isRootPath = !!useMatch('/');

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component='nav'
        position='sticky'
        elevation={0}
        color='transparent'
        sx={{ borderBottom: getBorderBottom(isRootPath), borderBottomColor: '#d0d0d0', mb: 3 }}
      >
        <Toolbar disableGutters>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ml: -1, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: 'rgb(226,39,39)' }} />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Logo />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'rgb(226,39,39)' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '85%' },
          }}
        >
          <Box onClick={handleDrawerToggle}>
            <Box sx={{ ml: 2 }}>
              <Logo />
            </Box>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavBar;
