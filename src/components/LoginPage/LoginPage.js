import React from 'react';
import { Typography, FormControl, InputLabel, InputAdornment, IconButton, Input, Button } from '@mui/material';
import "./LoginPage.css";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    const [values, setValues] = React.useState({
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
            <div className="login-container">
                <div>
                    <Typography variant="h3" >Login</Typography>
                    <form>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="login-email">Email</InputLabel>
                            <Input
                                id="login-email"
                                type='email'
                                value={values.password}
                                onChange={handleChange('email')} />
                        </FormControl>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="login-passwordField">Password</InputLabel>
                            <Input
                                id="login-passwordField"
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
                        <Box><Typography sx={{ textAlign: 'right' }}>Forgot Password</Typography></Box>
                        <Button variant="contained" size="large" color="warning"
                            sx={{ width: '100%', margin: '30px 0' }}>Login
                        </Button>
                        <Box>
                            <Typography sx={{ textAlign: 'center' }}>
                                Don't have account? <NavLink to="/signup"
                                    style={{ color: 'orangered' }}>
                                    Create account</NavLink>
                            </Typography>
                        </Box>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;