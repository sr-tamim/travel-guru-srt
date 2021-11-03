import React from 'react';
import { Typography, FormControl, InputLabel, InputAdornment, IconButton, Input, Button, FormHelperText } from '@mui/material';
import "./LoginPage.css";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, styled } from '@mui/system';
import { NavLink, Redirect } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import useUserContext from '../../../Firebase/useUserContext';

const SignInButton = styled(Box)(({ theme }) => ({
    width: '100%', maxWidth: '400px', textAlign: 'center',
    display: 'flex', alignItems: 'center',
    padding: '10px', margin: '20px auto', cursor: 'pointer',
    border: '1px solid grey', borderRadius: '30px',
    '&:hover': { background: '#ED6C02', color: 'white' },
}))

const LoginPage = () => {
    const { user, googleLogin, facebookLogin,
        emailLogin, error, setError } = useUserContext();
    const [values, setValues] = React.useState({
        email: '',
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
    const handleSubmit = () => {
        const { email, password } = values;
        let err;
        email === '' ? err = "Email is required" :
            password === '' ? err = "Password is required" :
                emailLogin(email, password);

        err && setError({ message: err });
    }

    return (
        <>{user ? <Redirect to="/profile" /> :
            <div className="login-container">
                <div className="form-container">
                    <Typography variant="h3" >Login</Typography>
                    <form style={{ margin: '20px 0 0' }}>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="login-email">Email</InputLabel>
                            <Input
                                id="login-email"
                                type='email'
                                defaultValue={values.email}
                                onChange={handleChange('email')} />
                        </FormControl>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="login-passwordField">Password</InputLabel>
                            <Input
                                id="login-passwordField"
                                type={values.showPassword ? 'text' : 'password'}
                                defaultValue={values.password}
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

                        <FormHelperText sx={{ color: 'red', mx: 1 }}>{error && error.message}</FormHelperText>

                        <Box><Typography sx={{ textAlign: 'right' }}>Forgot Password</Typography></Box>


                        <Button variant="contained" size="large" color="warning"
                            sx={{ width: '100%', margin: '30px 0' }}
                            onClick={handleSubmit}>Login
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
                <SignInButton onClick={googleLogin}>
                    <GoogleIcon sx={{ mr: 1 }} />
                    <Typography sx={{ flexGrow: 1 }}>Sign in with Google</Typography>
                </SignInButton>
                <SignInButton onClick={facebookLogin}>
                    <FacebookRoundedIcon sx={{ mr: 1 }} />
                    <Typography sx={{ flexGrow: 1 }}>Sign in with Facebook</Typography>
                </SignInButton>
            </div>
        }</>
    );
};

export default LoginPage;