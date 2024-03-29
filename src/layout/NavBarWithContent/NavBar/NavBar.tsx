import { useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
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
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { bgColors } from 'theme/colors';

import Logo from './Logo';
import { getBorderBottom, getMarginBottom, getColor, getCursor, getDisableRipple, getTextShadow } from './utils';

const navItems = [
  { name: 'PALVELUT', path: '/services' },
  { name: 'RENGASMYYNTI JA -HOTELLI', path: '/wheels' },
  { name: 'YHTEYSTIEDOT', path: '/contacts' },
];
const NavBar: React.FC = () => {
  const isRootPath = !!useMatch('/');
  const { pathname } = useLocation();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerToggle = () => setIsOpen((prevState) => !prevState);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component='nav'
        position='sticky'
        elevation={0}
        color='transparent'
        sx={{
          borderBottom: getBorderBottom(isRootPath),
          borderBottomColor: bgColors.light,
          mb: getMarginBottom(isSmDown),
        }}
      >
        <Toolbar disableGutters>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{
              display: {
                sm: 'none',
              },
              mr: 2,
              ml: -1,
            }}
          >
            <MenuIcon
              sx={{
                color: getColor(isRootPath),
              }}
            />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            {navItems.map(({ name, path }) => {
              const isSelected = path === pathname;

              return (
                <Button key={name} component={Link} to={path} disableRipple={getDisableRipple(isSelected)}>
                  <Typography
                    variant='p3'
                    sx={{
                      color: getColor(isRootPath),
                      cursor: getCursor(isSelected),
                      textShadow: getTextShadow(isSelected, isOpen),
                    }}
                  >
                    {name}
                  </Typography>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // better open performance on mobile.
          }}
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '85%',
            },
          }}
        >
          <Box onClick={handleDrawerToggle}>
            <Box sx={{ m: 2 }}>
              <Logo isOpen={isOpen} />
            </Box>
            <Divider />
            <List>
              {navItems.map(({ name, path }) => {
                const isSelected = path === pathname;

                return (
                  <ListItem key={name} disablePadding>
                    <ListItemButton component={Link} to={path}>
                      <ListItemText
                        primary={name}
                        sx={{
                          color: 'typography.dark',
                          cursor: getCursor(isSelected),
                          textShadow: getTextShadow(isSelected, isOpen),
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavBar;
