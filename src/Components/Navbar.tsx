// Importing necessary modules and components from Material-UI
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useAppStore } from '../appStore';

// Define the custom AppBarProps interface which extends MuiAppBarProps
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

// Styled AppBar component extending MuiAppBar
const AppBar = styled(MuiAppBar, {
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1, // Ensuring AppBar is above other elements
}));

// Styled Search component for the search functionality
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

// Styled SearchIconWrapper component for the search icon
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Styled InputBase component for the search input
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// Navbar functional component
export default function Navbar() {
  // State variables for menu and mobile menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // State variable for mobile menu
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  // Custom hook from appStore
  const updateOpen = useAppStore((state)=> state.updateOpen);
  const dOpen = useAppStore((state)=> state.dOpen);

  // Check if menu is open
  const isMenuOpen = Boolean(anchorEl);

  // Check if mobile menu is open
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // Open the profile menu
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the mobile menu
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // Close both menus
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // Open the mobile menu
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // ID for the primary search account menu
  const menuId = 'primary-search-account-menu';

  // Rendering the menu
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  // ID for the primary search account menu mobile
  const mobileMenuId = 'primary-search-account-menu-mobile';

  // Rendering the mobile menu
  // Define the renderMobileMenu component
const renderMobileMenu = (
  // Menu component for mobile devices
  <Menu
    // Anchor element for the menu
    anchorEl={mobileMoreAnchorEl}
    // Anchor origin for the menu
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    // Unique ID for the menu
    id={mobileMenuId}
    // Keep the menu mounted in the DOM
    keepMounted
    // Transform origin for the menu
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    // Open state of the menu
    open={isMobileMenuOpen}
    // Event handler for closing the mobile menu
    onClose={handleMobileMenuClose}
  >
    {/* Menu items */}
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
);

// Main Navbar functional component
return (
  <Box sx={{ flexGrow: 1 }}>
    {/* AppBar component */}
    <AppBar position="fixed" elevation={0} sx={{background : "white", color : "#2f2f2f"}}>
      {/* Toolbar component */}
      <Toolbar>
        {/* IconButton for opening the drawer */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={()=>updateOpen(!dOpen)}
        >
          <MenuIcon />
        </IconButton>
        {/* Typography component for the app title */}
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          MUI
        </Typography>
        {/* Search component */}
        <Search>
          {/* SearchIconWrapper component */}
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          {/* StyledInputBase component for search input */}
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        {/* Box for flexible space */}
        <Box sx={{ flexGrow: 1 }} />
        {/* Box for larger screen icons */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {/* IconButton for mail */}
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          {/* IconButton for notifications */}
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          {/* IconButton for user profile */}
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        {/* Box for smaller screen icons */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          {/* IconButton for more options */}
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    {/* Render mobile menu */}
    {renderMobileMenu}
    {/* Render primary menu */}
    {renderMenu}
  </Box>
);

}
