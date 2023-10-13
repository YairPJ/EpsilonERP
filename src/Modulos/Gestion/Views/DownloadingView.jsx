import { Box } from '@mui/system';
import { LinearProgress, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

export const DownloadingView = () => {
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(false);
      console.log("si");
    }, 1000); // 30 segundos

    // Limpia el temporizador si el componente se desmonta antes de que se complete
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {showProgress ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        ) : (
          <Typography variant="h5">Error</Typography>
        )}
      </div>
    </>
  );
};
