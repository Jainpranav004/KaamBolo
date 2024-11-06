import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();  // Initialize navigate function

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleServiceClick = (serviceName) => {
    // Navigate to the dynamic path based on the service
    navigate(`/find-a-service/${serviceName}`);
    handleClose();  // Close the menu after the item is clicked
  };

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          color: 'rgb(255 255 255 / 0.5)',
          textTransform: 'uppercase',
          fontSize: { xs: '1rem', lg: '0.75rem' },
          px: 6,
          mr: { lg: '-0.25rem' },
          transition: 'color 1s',
          '&:hover': {
            color: '#ffffff',
          },
        }}
      >
        Find a Service
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          ml: { xs: '1rem', lg: '2.7rem' },
        }}
      >
        <MenuItem onClick={() => handleServiceClick('plumbing')}>Plumbing</MenuItem>
        <MenuItem onClick={() => handleServiceClick('electrical')}>Electrical</MenuItem>
        <MenuItem onClick={() => handleServiceClick('carpentry')}>Carpentry</MenuItem>
        <MenuItem onClick={() => handleServiceClick('painting')}>Painting</MenuItem>
      </Menu>
    </div>
  );
}
