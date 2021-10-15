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
import { NavLink } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid white',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.2),
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

const toggleHeaderVisibility = () => {
    document.getElementById('header-links').classList.toggle('show')
}



const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" id="header" sx={{
                background: 'transparent', boxShadow: 'initial'
            }}>
                <Toolbar sx={{
                    width: '100%', maxWidth: '1000px', margin: 'auto',
                    padding: '20px 10px'
                }}>
                    <NavLink to="/">
                        <Box id='header-logo'>
                            <img src="./logo192.png" alt="" style={{ width: '100%' }} />
                        </Box>
                    </NavLink>
                    <Box id="header-menu-toggler">
                        <IconButton size="large" edge="start"
                            color="inherit" sx={{ mr: 2 }}
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
                    <Box noWrap id="header-links" component="div" >
                        <NavLink to="/home"
                            activeStyle={{ color: 'orange' }}
                            style={{ color: 'white', textDecoration: 'none' }}>
                            <Typography sx={{
                                padding: '5px 10px'
                            }}>Home</Typography>
                        </NavLink>
                        <NavLink to="/blogs"
                            activeStyle={{ color: 'orange' }}
                            style={{ color: 'white', textDecoration: 'none' }}>
                            <Typography sx={{
                                padding: '5px 10px'
                            }}>Blogs</Typography>
                        </NavLink>
                        <NavLink to="/contact"
                            activeStyle={{ color: 'orange' }}
                            style={{ color: 'white', textDecoration: 'none' }}>
                            <Typography sx={{
                                padding: '5px 10px'
                            }}>Contact</Typography>
                        </NavLink>

                        {false ? <Button variant="contained" color="warning">Login</Button> :
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit" >
                                    <AccountCircle />
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
                                    onClose={handleClose} >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
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

