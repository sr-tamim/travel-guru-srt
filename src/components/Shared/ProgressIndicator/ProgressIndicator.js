import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressIndicator = () => {
    return (
        <Box sx={{
            width: '100%', position: 'fixed', top: 0
        }}>
            <LinearProgress color="warning" sx={{ height: '8px' }} />
        </Box>
    );
};

export default ProgressIndicator;