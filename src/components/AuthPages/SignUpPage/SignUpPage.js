import React from 'react';
import { Typography, FormControl, InputLabel, InputAdornment, IconButton, Input, Button, FormHelperText } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, styled } from '@mui/system';
import { NavLink, Redirect } from 'react-router-dom';
import "../LoginPage/LoginPage.css";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import useUserContext from '../../../Firebase/useUserContext';

const SignUpPage = () => {
    const { googleLogin, facebookLogin, emailSignUp, error, setError, user } = useUserContext();
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        const { name, email, password, confirmPassword } = values;
        let err;
        password !== confirmPassword ? err = "Password didn't matched" :
            password.length < 6 ?
                err = "Password must be bigger than 6 characters" :
                email === '' ? err = "Email is required" :
                    name === '' ? err = "Name is required" :
                        emailSignUp(name, email, password);
        err && setError({ message: err });
    }

    const SignInButton = styled(Box)(({ theme }) => ({
        width: '100%', maxWidth: '400px', textAlign: 'center',
        display: 'flex', alignItems: 'center',
        padding: '10px', margin: '20px auto', cursor: 'pointer',
        border: '1px solid grey', borderRadius: '30px',
        '&:hover': { background: '#ED6C02', color: 'white' },
    }))

    return (
        <>{user ? <Redirect to="/profile" /> :
            <div className="signUp-container">
                <div className="form-container">
                    <Typography variant="h3" >Create an account</Typography>
                    <form style={{ margin: '20px 0 0' }}>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="signUp-name">Name</InputLabel>
                            <Input
                                id="signUp-name"
                                type='text'
                                defaultValue={values.name}
                                onChange={handleChange('name')} />
                        </FormControl>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="signUp-email">Email</InputLabel>
                            <Input
                                id="signUp-email"
                                type='email'
                                defaultValue={values.email}
                                onChange={handleChange('email')} />
                        </FormControl>
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="signUp-passwordField">Password</InputLabel>
                            <Input
                                id="signUp-passwordField"
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
                        <FormControl sx={{ m: 1 }} color="warning" variant="standard" fullWidth >
                            <InputLabel htmlFor="signUp-passwordField">Confirm Password</InputLabel>
                            <Input
                                id="signUp-passwordField"
                                type={values.showPassword ? 'text' : 'password'}
                                defaultValue={values.confirmPassword}
                                onChange={handleChange('confirmPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}>
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormHelperText sx={{ color: 'red', mx: 1 }}>{error && error.message}</FormHelperText>

                        <Button variant="contained" size="large" color="warning"
                            sx={{ width: '100%', margin: '30px 0' }}
                            onClick={handleSubmit}>Sign Up
                        </Button>
                        <Box>
                            <Typography sx={{ textAlign: 'center' }}>
                                Already have an account? <NavLink to="/login"
                                    style={{ color: 'orangered' }}>Login</NavLink>
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

export default SignUpPage;