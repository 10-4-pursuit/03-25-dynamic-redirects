import React from 'react'
import { Alert, Box } from '@mui/material';


const Default = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100vh' }}>
          <Alert severity="error">
            <h1 sx={{ mb: 2 }}>ERROR</h1>
            <h2>User does not exist</h2>
          </Alert>
        </Box>
      );
}

export default Default