import React from 'react';
import { Typography, FormControl, InputLabel, InputAdornment, IconButton, Input, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import "../LoginPage/LoginPage.css";

const SignUpPage = () => {
    const [values, setValues] = React.useState({
        name: '',
        password: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="signUp-container">
                <div className="form-container">
                    <Typography variant="h3" >Create an account</Typography>
                    <form>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="signUp-name">Name</InputLabel>
                            <Input
                                id="signUp-name"
                                type='text'
                                value={values.password}
                                onChange={handleChange('name')} />
                        </FormControl>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="signUp-email">Email</InputLabel>
                            <Input
                                id="signUp-email"
                                type='email'
                                value={values.password}
                                onChange={handleChange('email')} />
                        </FormControl>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="signUp-passwordField">Password</InputLabel>
                            <Input
                                id="signUp-passwordField"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="signUp-passwordField">Confirm Password</InputLabel>
                            <Input
                                id="signUp-passwordField"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Button variant="contained" size="large" color="warning"
                            sx={{ width: '100%', margin: '30px 0' }}>Sign Up
                        </Button>
                        <Box>
                            <Typography sx={{ textAlign: 'center' }}>
                                Already have an account? <NavLink to="/login"
                                    style={{ color: 'orangered' }}>Login</NavLink>
                            </Typography>
                        </Box>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUpPage;