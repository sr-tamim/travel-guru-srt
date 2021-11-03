import React from 'react';
import './Header.css';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import useUserContext from '../../../Firebase/useUserContext';


const toggleHeaderVisibility = () => {
    document.getElementById('header-links').classList.toggle('show')
}



const Header = () => {
    const { user, logout } = useUserContext();

    const { pathname } = useLocation();
    const pageURL = pathname === '/' ? '/home' : pathname;
    const themeColor = pageURL === '/home' || pageURL.indexOf('/booking') !== -1 ? 'white' : 'black';

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        border: '1px solid white',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: pageURL === '/home' ? alpha(theme.palette.common.white, 0.25) : alpha(theme.palette.common.black, 0.25),
        '&:hover': {
            backgroundColor: pageURL === '/home' ? alpha(theme.palette.common.white, 0.2) : alpha(theme.palette.common.black, 0.2),
        },
        margin: '20px 20px 0',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
            margin: 0
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '28ch',
                '&:focus': {
                    width: '30ch',
                },
            },
        },
    }));


    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box>
            <AppBar position="fixed" id="header" sx={{
                background: 'transparent', boxShadow: 'initial'
            }}>
                <Toolbar sx={{
                    width: '100%', maxWidth: '1400px', margin: 'auto',
                    padding: '20px 10px'
                }}>
                    <NavLink to="/">
                        <Box id='header-logo'
                            sx={{ filter: themeColor === 'white' && 'brightness(100)' }}>
                            <img src="/logo192.png" alt="" style={{ width: '100%' }} />
                        </Box>
                    </NavLink>
                    <Box id="header-menu-toggler">
                        <IconButton size="large" edge="start"
                            sx={{ mr: 2, color: pageURL === '/home' && 'white' }}
                            aria-label="open drawer"
                            onClick={toggleHeaderVisibility}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search Your Destination…"
                            inputProps={{ 'id': 'searchField', 'aria-label': 'search' }} />
                    </Search>
                    <Box noWrap id="header-links" >
                        <NavLink to="/home"
                            activeClassName="active"
                            style={{
                                color: themeColor,
                                textDecoration: 'none'
                            }}>
                            <Typography sx={{
                                padding: '5px 10px'
                            }}>Home</Typography>
                        </NavLink>
                        <NavLink to="/blogs" activeClassName="active"
                            style={{
                                color: themeColor,
                                textDecoration: 'none'
                            }}>
                            <Typography sx={{
                                padding: '5px 10px'
                            }}>Blogs</Typography>
                        </NavLink>
                        <NavLink to="/contact" activeClassName="active"
                            style={{
                                color: themeColor,
                                textDecoration: 'none'
                            }}>
                            <Typography sx={{
                                padding: '5px 10px'
                            }}>Contact</Typography>
                        </NavLink>

                        {!user ?
                            <NavLink to="/login" style={{ textDecoration: 'none' }}><Button variant="contained" color="warning" sx={{ m: 1 }}>Login</Button></NavLink> :
                            <div>
                                <IconButton
                                    size="large" color="warning"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    sx={{
                                        padding: 0, margin: '0 15px',
                                        background: 'gray'
                                    }}
                                >
                                    {!user.photoURL ? <AccountCircle /> :
                                        <img src={user.photoURL} alt="" style={{
                                            width: '40px', borderRadius: '50%'
                                        }} />}
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}>
                                    <MenuItem onClick={handleClose}>
                                        <NavLink to="/profile" style={{
                                            textDecoration: 'none', color: 'inherit'
                                        }} >Profile</NavLink>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => { handleClose(); logout() }}>Logout</MenuItem>
                                </Menu>
                            </div>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;

