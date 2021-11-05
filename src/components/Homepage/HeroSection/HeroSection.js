import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "./HeroSection.css";
import changeHeaderBack from '../../../utilities/changeHeader';
import { NavLink } from 'react-router-dom';
import usePlacesContext from '../../../utilities/usePlacesContext';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const HeroContainer = styled('div')(({ theme }) => ({
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


const HeroSection = () => {
    const theme = useTheme();

    const { places } = usePlacesContext();
    const maxSteps = places && places.length;

    const [activeStep, setActiveStep] = React.useState(0);
    const [backgroundImg, setBackgroundImg] = useState(0);
    useEffect(() => setBackgroundImg(activeStep), [activeStep])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    return (<>{places &&
        <Box sx={{
            height: '100vh',
            background: `url(${places[backgroundImg].imgPath}) center`,
            backgroundSize: 'cover', backgroundAttachment: 'fixed',
            transition: 'background 300ms ease-in 300ms'
        }}>
            <Box position="absolute" onScroll={changeHeaderBack} sx={{
                width: '100%', height: '100%', margin: 0, overflow: 'auto',
                background: '#00000099', backgroundAttachment: 'fixed',
            }}>
                <HeroContainer id="hero-container">
                    <Box component="div" className="hero-details">
                        <Typography variant="h1" className="place-name">
                            {places[activeStep]?.label}
                        </Typography>
                        <p className="place-description">
                            {places[activeStep]?.shortDescription}
                        </p>
                        <Box component="div"
                            sx={{ marginBottom: 10 }}>
                            <NavLink to={`/booking/${places[activeStep].id}`}
                                style={{ textDecoration: 'none' }}>
                                <Button size="large" variant="contained" color="warning" className="booking">
                                    Booking <ArrowRightAltIcon fontSize="large" />
                                </Button></NavLink>
                        </Box>
                    </Box>
                    <Box component="div" className="hero-carousel">
                        <Box sx={{ position: 'relative', marginBottom: '100px' }}>
                            <Box component="div" style={{
                                border: '5px solid orange',
                                borderRadius: '15px',
                                overflow: 'hidden', position: 'relative'
                            }}>
                                <AutoPlaySwipeableViews
                                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                    index={activeStep}
                                    interval={5000}
                                    onChangeIndex={handleStepChange}
                                    enableMouseEvents
                                >
                                    {places.map((step, index) => (
                                        <div key={step.id} style={{ textAlign: 'center' }}>
                                            {Math.abs(activeStep - index) <= 2 ? (
                                                < Box
                                                    component="div"
                                                    sx={{
                                                        height: 500,
                                                        width: '100%',
                                                        background: `url(${step.imgPath}) center`,
                                                        backgroundSize: 'cover'
                                                    }}
                                                />
                                            ) : null}
                                        </div>
                                    ))}

                                </AutoPlaySwipeableViews>
                                <Typography variant="h3"
                                    sx={{
                                        fontFamily: 'Bebas Neue',
                                        width: '100%',
                                        position: 'absolute',
                                        bottom: 0, color: 'white',
                                        background: 'linear-gradient(#00000000,#00000099,#000000)',
                                        padding: '100px 20px 30px',
                                        zIndex: 10
                                    }}
                                >{places[activeStep].label}
                                </Typography>
                            </Box>
                            <Box component="div"
                                sx={{
                                    position: 'absolute', top: '100%',
                                    display: 'flex', width: '100%',
                                    justifyContent: 'center', padding: '10px 0 100px'
                                }}>
                                <Button onClick={handleBack} disabled={activeStep === 0} sx={{
                                    background: 'white', padding: 0,
                                    width: 40, height: 60,
                                    borderRadius: '50%', margin: '10px',
                                    '&:hover': { background: '#ffdddd' }
                                }}>
                                    <KeyboardArrowLeft fontSize="large" />
                                </Button>
                                <Button onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1} sx={{
                                        background: 'white', padding: 0,
                                        width: 40, height: 60,
                                        borderRadius: '50%', margin: '10px',
                                        '&:hover': { background: '#ffdddd' }
                                    }} >
                                    <KeyboardArrowRight fontSize="large" />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </HeroContainer>
            </Box>
        </Box>
    }</>
    );
};

export default HeroSection;