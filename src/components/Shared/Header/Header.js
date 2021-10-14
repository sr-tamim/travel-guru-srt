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


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid white',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.2),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.4),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
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
            <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'initial' }}>
                <Toolbar sx={{
                    width: '100%', maxWidth: '1000px', margin: 'auto',
                    padding: '20px 10px'
                }}>
                    <Box sx={{
                        width: '130px', margin: '0 30px 0 0',
                        filter: 'brightness(100)'
                    }}>
                        <img src="./logo192.png" alt="" style={{ width: '100%' }} />
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search Your Destination…"
                            inputProps={{ 'id': 'searchField', 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1, display: { xs: 'none', sm: 'flex' },
                            justifyContent: 'flex-end', padding: '0 10px',
                            cursor: 'pointer',
                            '&:hover': { fontWeight: 'bold' }
                        }}>
                        <Typography sx={{
                            padding: '5px 10px'
                        }}>Blog</Typography>
                        <Typography sx={{
                            padding: '5px 10px'
                        }}>Contact</Typography>
                    </Box>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {true ? <Button variant="contained" color="warning">Login</Button> :
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
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
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;

