import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function NavBar2() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box 
        className="navbar" // Añadimos la clase "navbar"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#141414', // Fondo oscuro
          padding: '10px 20px',
          color: '#fff', // Texto blanco
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', // Sombra difuminada
          backdropFilter: 'blur(10px)', // Efecto de desenfoque en el fondo
          background: 'rgba(20, 20, 20, 0.85)', // Fondo con transparencia
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Línea inferior sutil
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
        }}
      >
        {/* Sección izquierda con el logo y los links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo" 
            style={{ height: '32px', marginRight: '20px' }} 
          />
          <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', marginRight: '20px' }}>Contact</Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Profile</Typography>
        </Box>

        {/* Icono de usuario a la derecha */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{
              ml: 2,
              color: '#fff' // Color blanco del icono
            }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, border: '2px solid #e50914' }}>M</Avatar> {/* Borde rojo */}
          </IconButton>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            backgroundColor: '#333', // Fondo oscuro para el menú
            color: '#fff', // Color de texto blanco
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: '#333',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
            '& .MuiMenuItem-root:hover': {
              backgroundColor: '#e50914', // Efecto hover rojo
            }
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" sx={{ color: '#fff' }} />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" sx={{ color: '#fff' }} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: '#fff' }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
