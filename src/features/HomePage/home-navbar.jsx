import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Badge,
  InputBase,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  useScrollTrigger,
  Slide,
  Fade,
  useMediaQuery,
  useTheme,
  Collapse
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as CartIcon,
  Notifications as NotificationsIcon,
  Favorite as FavoriteIcon,
  AccountCircle,
  Login as LoginIcon,
  Home as HomeIcon,
  Headphones as HeadphonesIcon,
  Info as InfoIcon,
  SupportAgent as SupportIcon,
  Help as HelpIcon,
  ArrowDropDown as ArrowDropDownIcon,
  ExpandMore as ExpandMoreIcon,
  HeadsetMic as HeadsetMicIcon,
  MusicNote as MusicNoteIcon,
  Person as PersonIcon,
  ExitToApp as LogoutIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
  ShoppingBag as ShoppingBagIcon,
  PointOfSale as PointOfSaleIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon
} from "@mui/icons-material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { alpha } from "@mui/material/styles";

// Hide AppBar on scroll down
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const CATEGORIES = [
  { name: "Headphones", icon: <HeadsetMicIcon />, path: "/category/headphones" },
  { name: "Earphones", icon: <MusicNoteIcon />, path: "/category/earphones" },
  { name: "Speakers", icon: <HeadphonesIcon />, path: "/category/speakers" },
  { name: "Accessories", icon: <ShoppingBagIcon />, path: "/category/accessories" },
];

const NAV_ITEMS = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Shop", path: "/shop", icon: <ShoppingBagIcon />, hasSubmenu: true },
  { name: "Features", path: "/features", icon: <HeadphonesIcon /> },
  { name: "About Us", path: "/about", icon: <InfoIcon /> },
  { name: "Support", path: "/support", icon: <SupportIcon /> },
  { name: "FAQ", path: "/faq", icon: <HelpIcon /> },
];

const USER_SETTINGS = [
  { name: "Profile", icon: <PersonIcon />, path: "/profile" },
  { name: "My Orders", icon: <ShoppingBagIcon />, path: "/orders" },
  { name: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { name: "Logout", icon: <LogoutIcon />, path: "/logout" },
];

function HeaderNavbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElShop, setAnchorElShop] = useState(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isAuthenticated = true; // Replace with actual auth check

  // Cart and notification counts
  const cartCount = 3;
  const notificationCount = 2;

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
    setMobileDrawerOpen(false);
  };

  const handleOpenShopMenu = (event) => {
    setAnchorElShop(event.currentTarget);
  };

  const handleCloseShopMenu = () => {
    setAnchorElShop(null);
  };

  const toggleMobileDrawer = (open) => () => {
    setMobileDrawerOpen(open);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleSubmenu = (item) => {
    setExpandedSubmenu(expandedSubmenu === item ? "" : item);
  };

  const mobileDrawer = (
    <Box sx={{ width: 280 }} role="presentation">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          bgcolor: "#1EE18C",
          color: "white",
        }}
      >
        <Typography variant="h6" component="div">
          Musicly
        </Typography>
        <IconButton color="inherit" onClick={toggleMobileDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ py: 0 }}>
        {NAV_ITEMS.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem
              button
              onClick={
                item.hasSubmenu
                  ? () => toggleSubmenu(item.name)
                  : () => handleNavigate(item.path)
              }
              sx={{ py: 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
              {item.hasSubmenu && (
                <ExpandMoreIcon
                  sx={{
                    transform: expandedSubmenu === item.name ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s",
                  }}
                />
              )}
            </ListItem>
            {item.hasSubmenu && (
              <Collapse in={expandedSubmenu === item.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {CATEGORIES.map((category) => (
                    <ListItem
                      button
                      key={category.name}
                      onClick={() => handleNavigate(category.path)}
                      sx={{ pl: 4 }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>{category.icon}</ListItemIcon>
                      <ListItemText primary={category.name} />
                      <ChevronRightIcon fontSize="small" />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
            <Divider variant="middle" component="li" />
          </React.Fragment>
        ))}
      </List>
      <Divider />
      {isAuthenticated ? (
        <List>
          {USER_SETTINGS.map((item) => (
            <ListItem
              button
              key={item.name}
              onClick={() => handleNavigate(item.path)}
              sx={{ py: 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      ) : (
        <List>
          <ListItem button onClick={() => handleNavigate("/login")} sx={{ py: 1.5 }}>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Login / Sign Up" />
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: isScrolled ? "rgba(30, 225, 140, 0.95)" : "#1EE18C",
            boxShadow: isScrolled ? 3 : 0,
            transition: "all 0.3s ease-in-out",
            backdropFilter: isScrolled ? "blur(8px)" : "none",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* Logo for desktop */}
              <MusicNoteIcon
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                  fontSize: 32,
                  color: "#fff",
                }}
              />
              <Typography
                variant="h5"
                noWrap
                component={RouterLink}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                MUSICLY
              </Typography>

              {/* Mobile Menu Icon */}
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-mobile"
                  aria-haspopup="true"
                  onClick={toggleMobileDrawer(true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              {/* Logo for mobile */}
              <MusicNoteIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component={RouterLink}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                MUSICLY
              </Typography>

              {/* Desktop navigation menu */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {NAV_ITEMS.map((item) =>
                  item.hasSubmenu ? (
                    <Box key={item.name}>
                      <Button
                        onClick={handleOpenShopMenu}
                        endIcon={<ArrowDropDownIcon />}
                        sx={{
                          my: 2,
                          px: 2,
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          position: "relative",
                          "&:after": {
                            content: '""',
                            position: "absolute",
                            width: 0,
                            height: "2px",
                            bottom: 10,
                            left: "50%",
                            backgroundColor: "#fff",
                            transition: "all 0.3s",
                          },
                          "&:hover": {
                            "&:after": {
                              width: "50%",
                              left: "25%",
                            },
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                      <Menu
                        id="menu-shop"
                        anchorEl={anchorElShop}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        open={Boolean(anchorElShop)}
                        onClose={handleCloseShopMenu}
                        sx={{
                          "& .MuiPaper-root": {
                            mt: 1.5,
                            py: 1,
                            borderRadius: 2,
                            minWidth: 220,
                          },
                        }}
                      >
                        {CATEGORIES.map((category) => (
                          <MenuItem
                            key={category.name}
                            onClick={() => {
                              handleNavigate(category.path);
                              handleCloseShopMenu();
                            }}
                            sx={{
                              py: 1.5,
                              gap: 2,
                              transition: "all 0.2s",
                              "&:hover": {
                                backgroundColor: alpha("#1EE18C", 0.1),
                                paddingLeft: 3,
                              },
                            }}
                          >
                            <ListItemIcon sx={{ color: "#1EE18C", minWidth: "auto" }}>
                              {category.icon}
                            </ListItemIcon>
                            <ListItemText>{category.name}</ListItemText>
                            <ChevronRightIcon
                              fontSize="small"
                              sx={{ opacity: 0.5, ml: 1 }}
                            />
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  ) : (
                    <Button
                      key={item.name}
                      onClick={() => handleNavigate(item.path)}
                      sx={{
                        my: 2,
                        px: 2,
                        color: "white",
                        display: "block",
                        position: "relative",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          width: 0,
                          height: "2px",
                          bottom: 10,
                          left: "50%",
                          backgroundColor: "#fff",
                          transition: "all 0.3s",
                        },
                        "&:hover": {
                          "&:after": {
                            width: "50%",
                            left: "25%",
                          },
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  )
                )}
              </Box>

              {/* Search bar */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 20,
                  backgroundColor: alpha("#fff", 0.15),
                  "&:hover": {
                    backgroundColor: alpha("#fff", 0.25),
                  },
                  mr: 2,
                  width: searchOpen ? 240 : 36,
                  transition: (theme) =>
                    theme.transitions.create("width", {
                      easing: theme.transitions.easing.easeInOut,
                      duration: theme.transitions.duration.shorter,
                    }),
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    pl: 1,
                    pr: searchOpen ? 0 : 1,
                  }}
                >
                  <SearchIcon />
                </Box>
                <InputBase
                  placeholder="Search…"
                  sx={{
                    width: "100%",
                    color: "inherit",
                    "& .MuiInputBase-input": {
                      p: 1,
                      paddingLeft: searchOpen ? 4 : 0,
                      paddingRight: 0.5,
                      width: "100%",
                      opacity: searchOpen ? 1 : 0,
                      transition: (theme) =>
                        theme.transitions.create("opacity", {
                          easing: theme.transitions.easing.easeInOut,
                          duration: theme.transitions.duration.shorter,
                        }),
                    },
                  }}
                  onClick={toggleSearch}
                  onBlur={() => {
                    if (!isMobile) return;
                    setSearchOpen(false);
                  }}
                />
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* Favorites */}
                <Tooltip title="Wishlist">
                  <IconButton
                    onClick={() => navigate("/wishlist")}
                    sx={{
                      color: "white",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </Tooltip>

                {/* Notifications */}
                <Tooltip title="Notifications">
                  <IconButton
                    onClick={() => navigate("/notifications")}
                    sx={{
                      color: "white",
                      mx: { xs: 0.5, md: 1 },
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  >
                    <Badge badgeContent={notificationCount} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>

                {/* Cart */}
                <Tooltip title="Cart">
                  <IconButton
                    onClick={() => navigate("/cart")}
                    sx={{
                      color: "white",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.1)" },
                    }}
                  >
                    <Badge badgeContent={cartCount} color="error">
                      <CartIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>

                {/* Cashier Button */}
                <Button
                  variant="contained"
                  startIcon={<PointOfSaleIcon />}
                  onClick={() => navigate("/cashier")}
                  sx={{
                    backgroundColor: "#D5E11E",
                    color: "#000000",
                    ml: 2,
                    px: 2,
                    fontWeight: 600,
                    boxShadow: 2,
                    textTransform: "none",
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: "#c5d00e",
                      transform: "translateY(-2px)",
                      boxShadow: 4,
                    },
                    "&:active": {
                      transform: "translateY(0)",
                    },
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  Cashier
                </Button>

                {/* User Profile */}
                <Box sx={{ ml: { xs: 1, sm: 2 } }}>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{
                        p: 0,
                        border: "2px solid white",
                        transition: "all 0.2s",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Avatar
                        alt="User Avatar"
                        src="/api/placeholder/40/40"
                        sx={{ width: 36, height: 36 }}
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{
                      mt: "45px",
                      "& .MuiPaper-root": {
                        borderRadius: 2,
                        minWidth: 220,
                        boxShadow: 5,
                      },
                    }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Box sx={{ px: 2, py: 1.5 }}>
                      <Typography variant="subtitle1" fontWeight={600}>
                        John Doe
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        john.doe@example.com
                      </Typography>
                    </Box>
                    <Divider />
                    {USER_SETTINGS.map((setting) => (
                      <MenuItem
                        key={setting.name}
                        onClick={() => {
                          handleNavigate(setting.path);
                          handleCloseUserMenu();
                        }}
                        sx={{
                          py: 1.5,
                          gap: 2,
                          transition: "all 0.2s",
                          "&:hover": {
                            backgroundColor: alpha("#1EE18C", 0.1),
                            paddingLeft: 3,
                          },
                        }}
                      >
                        <ListItemIcon sx={{ color: setting.name === "Logout" ? "#f44336" : "#1EE18C", minWidth: "auto" }}>
                          {setting.icon}
                        </ListItemIcon>
                        <Typography
                          textAlign="center"
                          color={setting.name === "Logout" ? "error" : "inherit"}
                        >
                          {setting.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Offset for fixed AppBar */}
      <Toolbar />

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileDrawerOpen}
        onClose={toggleMobileDrawer(false)}
      >
        {mobileDrawer}
      </Drawer>
    </>
  );
}

export default HeaderNavbar;