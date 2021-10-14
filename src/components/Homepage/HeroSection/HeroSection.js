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
import usePlaces from '../../../hooks/usePlaces';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const HeroContainer = styled('div')(({ theme }) => ({
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '200px 20px',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(2,1fr)'
    },
}));


const HeroSection = () => {
    const theme = useTheme();

    const places = usePlaces();
    const maxSteps = places && places.length;

    const [activeStep, setActiveStep] = React.useState(0);
    const [backgroundImg, setBanckgroundImg] = useState(0);
    useEffect(() => setBanckgroundImg(activeStep), [activeStep])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    return (<>{!places ? null :
        <Box id="hero-section" sx={{
            height: '100vh',
            minHeight: '600px',
            background: `url(${places[backgroundImg].imgPath}) center`,
            backgroundSize: 'cover',
            transition: 'background 300ms ease-in 300ms'
        }
        }>
            <Box position="absolute" sx={{
                width: '100%', height: '100%', margin: 0,
                background: '#00000099'
            }}>
                <HeroContainer>
                    <Box component="div" sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center'
                    }}>
                        <Typography variant="h1" sx={{
                            textTransform: 'uppercase',
                            color: 'white', fontSize: '130px',
                            fontFamily: 'Bebas Neue'
                        }}>
                            {places[activeStep]?.label}
                        </Typography>
                        <p style={{
                            color: 'white', fontSize: '20px',
                            letterSpacing: '1px', padding: '10px',
                        }}>
                            {places[activeStep]?.shortDescription}
                        </p>
                        <Box component="div">
                            <Button size="large" variant="contained" color="warning" sx={{
                                fontSize: '20px', fontWeight: 'bold', margin: '20px'
                            }} >
                                Booking <ArrowRightAltIcon fontSize="large" />
                            </Button>
                        </Box>
                    </Box>
                    <Box component="div" sx={{
                        display: 'flex', justifyContent: 'flex-end'
                    }}>
                        <Box sx={{ maxWidth: 400, position: 'relative' }}>
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
                                        <div key={step.label} style={{ textAlign: 'center' }}>
                                            {Math.abs(activeStep - index) <= 2 ? (
                                                < Box
                                                    component="div"
                                                    sx={{
                                                        height: 500,
                                                        width: 400,
                                                        background: `url(${step.imgPath}) center`,
                                                        backgroundSize: 'cover'
                                                    }}
                                                />
                                            ) : null}
                                        </div>
                                    ))}

                                </AutoPlaySwipeableViews>
                                <Typography variant="h4"
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
                                    justifyContent: 'center', padding: '10px 0'
                                }}>
                                <Button onClick={handleBack} disabled={activeStep === 0} sx={{
                                    background: 'white', padding: 0,
                                    width: 40, height: 60,
                                    borderRadius: '50%', margin: '10px',
                                    '&:hover': { background: '#ffdddd' }
                                }}>
                                    <KeyboardArrowLeft fontSize="large" />
                                </Button>
                                <Button onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{
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
        </Box>}</>
    );
};

export default HeroSection;