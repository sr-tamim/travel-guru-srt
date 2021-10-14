import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = places.length;
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


    return (
        <Box id="hero-section" sx={{
            height: '100vh',
            minHeight: '600px',
            background: `url(${places[backgroundImg].imgPath}) center`,
            backgroundSize: 'cover',
            transition: 'background 300ms ease-in 300ms'
        }}>
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
                                    threshold={5}
                                    index={activeStep}
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
        </Box>
    );
};

export default HeroSection;


const places = [
    {
        label: "COX'S BAZAR",
        imgPath: './image/coxs-bazar.png',
        shortDescription: "Cox's Bazar is a city, fishing port, tourism centre, and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy",
        description: "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island."
    },
    {
        label: 'SREEMANGAL',
        imgPath: './image/sreemangal.png',
        shortDescription: "Despite being a small administrative unit, an Upazilla, under Moulvibazar district of Sylhet, Sreemangal exists as a prime place for tourists’ attraction having earned the recognition of being a town under the British colonial era in the 19th century.",
        description: "There are loads of exciting destinations with fascinating scenic beauty scattered in or around the Srimangal upazilla of Maulvibazar district. Madhobpur Lake is one of the main tourist attractions in the area, and is home to the Great White-Bellied Heron, the only confirmed site in Bangladesh. The Baikka beel is also a nearby body of water and home to the Large-billed reed warbler."
    },
    {
        label: 'SUNDARBANS',
        imgPath: './image/sundarbans.png',
        shortDescription: "The Sundarbans is a cluster of low-lying islands in the Bay of Bengal, spread across India and Bangladesh, famous for its unique mangrove forests.",
        description: "Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh's division of Khulna. This active delta region is among the largest in the world, measuring about 40,000 sq km."
    },
    {
        label: 'SAJEK',
        imgPath: './image/sajek.png',
        shortDescription: "Sajek Valley, currently the most popular destination for pilgrims/travelers, is located in the biggest union of Bangladesh, Baghaichari Upazila of Rangamati district.",
        description: "Sajek Valley is one of the popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 2,000 feet above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati."
    },
];