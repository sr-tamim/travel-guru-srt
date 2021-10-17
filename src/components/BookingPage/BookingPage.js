import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router';
import useUserContext from '../../Firebase/useUserContext';
import usePlaces from '../../hooks/usePlaces';
import changeHeaderBack from '../../utilities/changeHeaderBack';

const BookingContainer = styled('div')(({ theme }) => ({
    maxWidth: '1200px', height: '100%',
    display: 'grid', gridGap: '50px',
    gridTemplateColumns: '1fr',
    justifyItems: 'center', alignItems: 'center',
    padding: '180px 20px',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(2,1fr)', gridGap: '20px'
    },
}));

const BookingPage = () => {
    const { userLoading } = useUserContext();
    const places = usePlaces();
    const { id } = useParams();
    console.log(id);

    return (
        <>
            {!places ? null :
                <Box sx={{
                    height: '100vh', minHeight: '600px',
                    background: `url(${places[id].imgPath}) center`,
                    backgroundSize: 'cover', backgroundAttachment: 'fixed',
                    transition: 'background 300ms ease-in 300ms'
                }}>
                    <Box position="absolute" onScroll={changeHeaderBack}
                        sx={{
                            width: '100%', height: '100%', margin: 0, overflow: 'auto',
                            background: '#00000099', backgroundAttachment: 'fixed'
                        }}>
                        <BookingContainer id="hero-container">
                            <Box component="div" className="hero-details">
                                <Typography variant="h1" className="place-name">
                                    {places[id]?.label}
                                </Typography>
                                <p className="place-description">
                                    {places[id]?.description}
                                </p>
                            </Box>
                        </BookingContainer>
                    </Box>
                </Box>}
        </>
    );
};

export default BookingPage;