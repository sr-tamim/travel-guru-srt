import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useUserContext from '../../Firebase/useUserContext';

const UserProfile = () => {
    const { user } = useUserContext()
    return (
        <>
            <Box sx={{
                width: '100%', maxWidth: '1200px', textAlign: 'center',
                py: 25, mx: 'auto', fontFamily: 'Montserrat'
            }}>
                <Box sx={{
                    width: '200px', display: 'flex',
                    justifyContent: 'center', alignItems: 'center',
                    background: '#555555', borderRadius: '50%',
                    overflow: 'hidden', mx: 'auto', my: 5
                }}>{!user.photoURL ? <Typography>Img not found</Typography> :
                    <Box component="img" src={user.photoURL} alt=""
                        sx={{ width: '100%' }} />
                    }
                </Box>
                <Typography variant="h3" sx={{ fontFamily: 'Bebas Neue' }}>
                    {user.displayName}
                </Typography>
                <Typography variant="h6">
                    {user.email}
                </Typography>
            </Box>

        </>
    );
};

export default UserProfile;