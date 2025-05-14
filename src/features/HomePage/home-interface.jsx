import { useState } from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Box, 
  IconButton, 
  Tooltip, 
  useTheme, 
  Grid,
  Container,
  Paper,
  Button,
  Chip,
  Divider
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Carousel from 'react-material-ui-carousel';

const HomeInterface = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const carouselItems = [
    {
      name: "Exclusive Offer",
      description: "Get 20% off on your first purchase!",
      image: require("../../assets/electronic-items.jpg"),
      tag: "Limited Time"
    },
    {
      name: "New Arrivals",
      description: "Check out the latest products in our store.",
      image: require("../../assets/electronic-items.jpg"),
      tag: "New"
    }
  ];

  const features = [
    { icon: <ShoppingCartIcon />, title: "Easy Shopping", description: "Simple and intuitive shopping experience" },
    { icon: <LocalShippingIcon />, title: "Fast Delivery", description: "Get your products delivered quickly" },
    { icon: <SupportAgentIcon />, title: "24/7 Support", description: "We're always here to help you" }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ 
        mb: 6, 
        textAlign: "center",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -10,
          left: "50%",
          transform: "translateX(-50%)",
          width: 60,
          height: 3,
          backgroundColor: "#E11E73",
          borderRadius: 2
        }
      }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 700, 
            mb: 2, 
            color: "#000000",
            fontSize: { xs: "2rem", md: "3rem" }
          }}
        >
          Welcome to Our Store
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: "#757575", 
            maxWidth: 600, 
            mx: "auto",
            fontSize: { xs: "1rem", md: "1.2rem" }
          }}
        >
          Discover a wide range of products and enjoy exclusive offers
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} md={5}>
          <Paper 
            elevation={3} 
            sx={{ 
              borderRadius: 2, 
              overflow: "hidden",
              height: "100%"
            }}
          >
            <Carousel
              animation="slide"
              navButtonsAlwaysVisible
              indicators={true}
              autoPlay
              interval={5000}
              sx={{ height: "100%" }}
            >
              {carouselItems.map((item, index) => (
                <Box key={index} sx={{ position: "relative" }}>
                  <Box 
                    sx={{ 
                      position: "absolute", 
                      top: 16, 
                      right: 16, 
                      zIndex: 2 
                    }}
                  >
                    <Chip 
                      label={item.tag} 
                      color="secondary" 
                      size="small"
                      sx={{ 
                        fontWeight: "bold",
                        backgroundColor: "#E11E73"
                      }}
                    />
                  </Box>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ 
                      width: "100%", 
                      height: "40vh", 
                      objectFit: "cover"
                    }} 
                  />
                  <Box 
                    sx={{ 
                      position: "absolute", 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      backgroundColor: "rgba(0,0,0,0.7)", 
                      color: "white", 
                      p: 3
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 1, ml:16 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body1" sx={{ml:16 }}>
                      {item.description}
                    </Typography>
                    <Button 
                      variant="contained" 
                      sx={{ 
                        mt: 2, 
                        ml:16 ,
                        backgroundColor: "#E11E73",
                        "&:hover": {
                          backgroundColor: "#c41c65",
                        }
                      }}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Paper>
          <Box sx={{width:"100%", height:"35vh"}}>
          
<Paper
  elevation={3}
  sx={{
    width: "100%",
    height: "35vh",
    mt: 4,
    borderRadius: 2,
    overflow: "hidden",
    position: "relative",
    background: "linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)"
  }}
>
  {/* Badge */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: "#E11E73",
      color: "white",
      py: 0.5,
      px: 2,
      borderBottomLeftRadius: 8,
      fontWeight: "bold",
      zIndex: 2,
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
    }}
  >
    <Typography variant="subtitle2">SPECIAL OFFER</Typography>
  </Box>

  <Grid container sx={{ height: "100%" }}>
    {/* Left side - Image */}
    <Grid item xs={5} sx={{ height: "100%", position: "relative" }}>
      <Box
        component="img"
        src={require("../../assets/electronic-items.jpg")}
        alt="Special Offer Product"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
      {/* Timer Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography variant="caption" sx={{ color: "white", mr: 1 }}>
          Ends in:
        </Typography>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {["05", "23", "47"].map((time, i) => (
            <Box
              key={i}
              sx={{
                backgroundColor: "white",
                color: "#E11E73",
                borderRadius: 1,
                px: 0.7,
                py: 0.3,
                fontWeight: "bold",
                fontSize: "0.7rem"
              }}
            >
              {time}
            </Box>
          ))}
        </Box>
      </Box>
    </Grid>

    {/* Right side - Content */}
    <Grid
      item
      xs={7}
      sx={{
        height: "100%",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <Box>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 0.5
          }}
        >
          Deal of the Day
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 1
          }}
        >
          Sony WH-1000XM5
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.8)",
            mb: 2
          }}
        >
          Premium noise cancelling headphones with exceptional sound quality and long battery life.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 2 }}>
          <Typography
            variant="h4"
            component="p"
            sx={{
              color: "white",
              fontWeight: 700,
              lineHeight: 1
            }}
          >
            $299
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: "rgba(255,255,255,0.7)",
              ml: 1,
              textDecoration: "line-through"
            }}
          >
            $399
          </Typography>
          <Chip
            label="25% OFF"
            size="small"
            sx={{
              ml: 2,
              backgroundColor: "#E11E73",
              color: "white",
              fontWeight: "bold"
            }}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#2C3E50",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#f5f5f5"
            }
          }}
        >
          View Details
        </Button>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          sx={{
            backgroundColor: "#E11E73",
            "&:hover": {
              backgroundColor: "#c41c65"
            }
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Grid>
  </Grid>
</Paper>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Paper 
            elevation={3} 
            sx={{ 
              borderRadius: 2, 
              p: 3, 
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                mb: 3, 
                fontWeight: 600,
                color: "#333333",
                position: "relative",
                pb: 1,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: 40,
                  height: 3,
                  backgroundColor: "#E11E73",
                  borderRadius: 2
                }
              }}
            >
              Why Shop With Us
            </Typography>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Box 
                    sx={{ 
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center",
                      textAlign: "center",
                      p: 2,
                      height: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)"
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        p: 1.5, 
                        borderRadius: "50%", 
                        backgroundColor: "rgba(225, 30, 115, 0.1)", 
                        color: "#E11E73",
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                mb: 2, 
                fontWeight: 600,
                color: "#333333"
              }}
            >
              About Us
            </Typography>

            <Accordion 
              expanded={expanded === 'panel1'} 
              onChange={handleChange('panel1')} 
              sx={{ 
                mb: 2,
                boxShadow: "none",
                "&:before": {
                  display: "none",
                },
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#E11E73" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ 
                  backgroundColor: "rgba(0,0,0,0.02)",
                  borderRadius: "8px"
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#333333" }}>
                  Our Mission
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  Our mission is to provide the best products at the best prices, ensuring customer satisfaction and a seamless shopping experience. We strive to make shopping enjoyable, efficient, and reliable for all our customers.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion 
              expanded={expanded === 'panel2'} 
              onChange={handleChange('panel2')}
              sx={{ 
                boxShadow: "none",
                "&:before": {
                  display: "none",
                },
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#E11E73" }} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{ 
                  backgroundColor: "rgba(0,0,0,0.02)",
                  borderRadius: "8px"
                }}
              >
                <Typography sx={{ fontWeight: 600, color: "#333333" }}>
                  Why Choose Us?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  We offer a diverse range of products, exceptional customer service, and a user-friendly shopping platform. Our commitment to quality and customer satisfaction sets us apart from others in the market. We ensure timely delivery and have a hassle-free return policy.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                mt: "auto",
                pt: 3,
                backgroundColor: "rgba(225, 30, 115, 0.05)",
                borderRadius: 2,
                p: 2
              }}
            >
              <Tooltip title="Click to learn more">
                <IconButton 
                  sx={{ 
                    color: "#E11E73", 
                    backgroundColor: "white",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    mr: 2,
                    "&:hover": {
                      backgroundColor: "#f5f5f5"
                    }
                  }}
                >
                  <InfoIcon />
                </IconButton>
              </Tooltip>
              <Typography variant="body2" sx={{ color: "#555555", fontWeight: 500 }}>
                Learn more about our services and exclusive offers
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeInterface;