import { useState, useEffect } from 'react';
import { Typography, Box, Grid, Paper, Divider, useTheme, useMediaQuery } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { motion } from 'framer-motion';

const HomeStats = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // For animated counting effect
  const [counts, setCounts] = useState({ brands: 10, categories: 30, products: 200 });
  const targetCounts = { brands: 10, categories: 10, products: 200 };
  
 // useEffect(() => {
   // const duration = 2000; // ms
    //const frameDuration = 1000 / 60; // 60fps
    //const totalFrames = Math.round(duration / frameDuration);
    //let frame = 0;
    
    //const counter = setInterval(() => {
      //frame++;
      //const progress = frame / totalFrames;
      
      //setCounts({
        //brands: Math.floor(progress * targetCounts.brands),
        //categories: Math.floor(progress * targetCounts.categories),
        //products: Math.floor(progress * targetCounts.products)
      //});
      
      //if (frame === totalFrames) {
       // clearInterval(counter);
     // }
    //}, frameDuration);
    
   // return () => clearInterval(counter);
  //}, []);
  
  const statItems = [
    { 
      icon: <StoreIcon sx={{ fontSize: { xs: "50px", md: "60px" }, color: "#E11E73" }} />,
      count: counts.brands,
      label: "Brands",
      description: "Premium partners"
    },
    { 
      icon: <CategoryIcon sx={{ fontSize: { xs: "50px", md: "60px" }, color: "#E11E73" }} />,
      count: counts.categories,
      label: "Categories",
      description: "Diverse selections"
    },
    { 
      icon: <ShoppingCartIcon sx={{ fontSize: { xs: "50px", md: "60px" }, color: "#E11E73" }} />,
      count: counts.products,
      label: "Products",
      description: "And growing daily"
    }
  ];

  return (
    <Paper 
      elevation={3}
      sx={{ 
        padding: { xs: "30px", md: "50px" }, 
        backgroundColor: "#ffffff", 
        borderRadius: "16px",
        background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
        overflow: "hidden",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "5px",
          background: "linear-gradient(90deg, #E11E73 0%, #F5A623 100%)",
        }
      }}
    >
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography 
          variant="h4"
          component="h2"
          sx={{ 
            fontWeight: 700, 
            color: "#333",
            mb: 2,
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -8,
              left: "30%",
              width: "40%",
              height: 3,
              backgroundColor: "#E11E73",
              borderRadius: 2
            }
          }}
        >
          Our Store at a Glance
        </Typography>
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          sx={{ maxWidth: "700px", mx: "auto" }}
        >
          Explore our growing collection of premium products across multiple categories
        </Typography>
      </Box>
      
      <Grid 
        container 
        spacing={isMobile ? 6 : 4} 
        justifyContent="center"
        sx={{ pt: 2 }}
      >
        {statItems.map((item, index) => {
				console.log("logging");
		return (
		
          <Grid item xs={12} sm={4} key={index}>
          
              <Box 
                sx={{ 
                  textAlign: "center",
                  p: 3,
                  height: "100%",
                  position: "relative",
                  "&:hover": {
                    "& .stat-icon": {
                      transform: "scale(1.1)",
                    }
                  }
                }}
              >
                <Box 
                  className="stat-icon"
                  sx={{ 
                    mb: 3,
                    transition: "transform 0.3s ease",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <Box 
                    sx={{
                      background: "rgba(225, 30, 115, 0.1)",
                      borderRadius: "50%",
                      width: { xs: "100px", md: "120px" },
                      height: { xs: "100px", md: "120px" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 20px rgba(225, 30, 115, 0.15)"
                    }}
                  >
                    {item.icon}
                  </Box>
                </Box>
                
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Typography 
                    variant="h2" 
                    sx={{ 
                      fontSize: { xs: "3rem", md: "3.5rem" }, 
                      fontWeight: 700, 
                      color: "#333",
                      lineHeight: 1.2
                    }}
                  >
                    {index === 2 ? `${item.count}+` : `${item.count}+`}
                  </Typography>
                  
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600, 
                      color: "#E11E73",
                      mb: 1 
                    }}
                  >
                    {item.label}
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: "text.secondary",
                      fontSize: "0.95rem"
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                
                {index !== statItems.length - 1 && !isMobile && (
                  <Divider 
                    orientation="vertical" 
                    sx={{ 
                      position: "absolute", 
                      right: 0, 
                      top: "20%", 
                      height: "60%",
                      borderColor: "rgba(0,0,0,0.1)" 
                    }} 
                  />
                )}
              </Box>
          
          </Grid>
        )})}
      </Grid>
    </Paper>
  );
};

export default HomeStats;