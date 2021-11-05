import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressIndicator = () => {
    return (
        <Box sx={{
            width: '100%', position: 'fixed', top: 0
        }}>
            <LinearProgress color="primary" sx={{ height: '8px', background: 'orangered' }} />
        </Box>
    );
};

export default ProgressIndicator;