import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { Navbar } from '../../../UI/Components/Navar';
import { NavarRRHH } from '../Components/NavarRRHH';

export const RRHHLayout = ({ children }) => {

  const drawerWidth = 240;
  return (
    <Box>
      <Navbar data={"RECURSOS HUMANOS"} />
      <NavarRRHH />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '50px' }}>
        {children}
      </Box>
    </Box>
  );
};
