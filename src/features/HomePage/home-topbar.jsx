import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, alpha, useTheme } from "@mui/material/styles";
import homeTopbarImage from "../../assets/home-topbar-img.jpg";

const HomeTopBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "30px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    },
    marginLeft: 0,
    width: "100%",
    transition: "all 0.3s ease",
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#4BE7A3",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.text.primary,
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.5, 1, 1.5, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      fontSize: "1rem",
    },
  }));

  const SearchButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    right: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#4BE7A3",
    color: "#ffffff",
    borderRadius: "24px",
    padding: "8px 16px",
    "&:hover": {
      backgroundColor: "#3bc78b",
    },
  }));

  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        padding: { xs: "16px", md: "32px" },
        height: { xs: "auto", md: "580px" },
        borderRadius: "16px",
        background: "linear-gradient(145deg, #ffffff 0%, #f9fffe 100%)",
        overflow: "hidden",
      }}
    >
      <CardContent 
        sx={{ 
          width: { xs: "100%", md: "55%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { xs: "20px", md: "40px" }
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ 
            color: "#1a1a1a",
            fontSize: { xs: "28px", sm: "36px", md: "44px" },
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "24px"
          }}
        >
          Experience music like never before
        </Typography>
        
        <Typography
          variant="subtitle1"
          sx={{
            color: "#666666",
            fontSize: { xs: "16px", md: "18px" },
            marginBottom: "32px",
            lineHeight: 1.6
          }}
        >
          Your dream music experience is just fingertips away. Discover your perfect sound.
        </Typography>
        
        <Box sx={{ position: "relative", width: "100%", maxWidth: "500px" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for headphones, speakers..."
              inputProps={{ "aria-label": "search" }}
            />
            <SearchButton variant="contained" disableElevation>
              Search
            </SearchButton>
          </Search>
        </Box>
      </CardContent>

      <CardMedia
        component="img"
        sx={{
          width: { xs: "50%", md: "35%" },
          objectFit: "cover",
          borderRadius: { xs: "8px", md: "12px" },
          marginTop: { xs: "20px", md: 0 },
          transform: { md: "scale(1.05)" },
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: { md: "scale(1.08)" },
          },
        }}
        image={homeTopbarImage}
        alt="Premium headphones"
      />
    </Card>
  );
};

export default HomeTopBar;