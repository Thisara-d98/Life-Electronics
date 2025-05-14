import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JBLImg from "../../assets/jbl.jpg";
import { 
  Card, Typography, CardMedia, CardActionArea, CardContent, 
  Button, CardActions, Box, Container, Grid, Rating, 
  Chip, Divider, IconButton, Tooltip, Badge
} from "@mui/material";
import { 
  ShoppingCart as CartIcon, 
  Favorite as FavoriteIcon, 
  FavoriteBorder as FavoriteBorderIcon, 
  LocalOffer as TagIcon 
} from '@mui/icons-material';

const HomeFeaturedProducts = () => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState({});

    const featuredItems = [
        {
            id: 1,
            brand: "JBL X123",
            model: "Premium Wireless Headphones",
            image: JBLImg,
            price: "12,750.00",
            discount: "15%",
            rating: 4.5,
            reviewCount: 127,
            isNew: true
        },
        {
            id: 2,
            brand: "Huawei X123",
            model: "True Wireless Earbuds",
            image: JBLImg,
            price: "10,000.00",
            discount: "10%",
            rating: 4.2,
            reviewCount: 89,
            isNew: false
        },
        {
            id: 3,
            brand: "JBL XX2",
            model: "Noise Cancelling Headphones",
            image: JBLImg,
            price: "32,750.00",
            discount: "",
            rating: 4.8,
            reviewCount: 203,
            isNew: true
        },
        {
            id: 4,
            brand: "Sony WH-1000XM4",
            model: "Premium Soundbar",
            image: JBLImg,
            price: "32,750.00",
            discount: "8%",
            rating: 4.7,
            reviewCount: 175,
            isNew: false
        }
    ];

    const handleViewClick = (item) => {
        navigate(`/product/${item.id}/${item.brand.replace(/\s+/g, '-').toLowerCase()}`);
    };

    const toggleFavorite = (id, event) => {
        event.stopPropagation();
        setFavorites(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const addToCart = (item, event) => {
        event.stopPropagation();
        // Add to cart functionality here
        console.log(`Added ${item.brand} to cart`);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 8 }}>
                <Typography 
                    variant="h3" 
                    component="h2" 
                    sx={{ 
                        fontWeight: 700, 
                        textAlign: "center",
                        mb: 2,
                        background: 'linear-gradient(45deg, #E11E73 30%, #D5E11E 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Featured Products
                </Typography>
                <Typography 
                    variant="subtitle1" 
                    component="p" 
                    sx={{ 
                        textAlign: "center", 
                        mb: 6,
                        maxWidth: "700px",
                        mx: "auto",
                        color: "text.secondary"
                    }}
                >
                    Explore our hand-picked selection of premium audio devices guaranteed to elevate your listening experience
                </Typography>
                
                <Grid container spacing={3} justifyContent="center">
                    {featuredItems.map((item) => (
                        <Grid item xs={12} sm={6} md={3} key={item.id}>
                            <Card 
                                sx={{ 
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    transition: "all 0.3s ease",
                                    '&:hover': { 
                                        transform: "translateY(-8px)",
                                        boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                                    }
                                }}
                            >
                                {item.isNew && (
                                    <Chip 
                                        label="NEW" 
                                        size="small"
                                        sx={{ 
                                            position: 'absolute', 
                                            top: 10, 
                                            left: 10, 
                                            backgroundColor: '#E11E73', 
                                            color: 'white',
                                            zIndex: 1
                                        }}
                                    />
                                )}
                                
                                {item.discount && (
                                    <Chip 
                                        icon={<TagIcon />} 
                                        label={`SAVE ${item.discount}`} 
                                        size="small"
                                        sx={{ 
                                            position: 'absolute', 
                                            top: 10, 
                                            right: 10, 
                                            backgroundColor: '#D5E11E', 
                                            color: 'black',
                                            zIndex: 1
                                        }}
                                    />
                                )}
                                
                                <CardActionArea 
                                    onClick={() => handleViewClick(item)}
                                    sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
                                >
                                    <Box sx={{ position: 'relative', pt: '100%', width: '100%' }}>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.brand}
                                            sx={{ 
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                p: 2
                                            }}
                                        />
                                    </Box>
                                    
                                    <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                                        <Typography 
                                            variant="subtitle2" 
                                            color="text.secondary"
                                            sx={{ fontWeight: 500 }}
                                        >
                                            {item.brand}
                                        </Typography>
                                        <Typography 
                                            gutterBottom 
                                            variant="h6" 
                                            component="div"
                                            sx={{ 
                                                fontWeight: 700,
                                                height: '3.6em',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                            }}
                                        >
                                            {item.model}
                                        </Typography>
                                        
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <Rating 
                                                value={item.rating} 
                                                precision={0.1} 
                                                size="small" 
                                                readOnly 
                                            />
                                            <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
                                                ({item.reviewCount})
                                            </Typography>
                                        </Box>
                                        
                                        <Typography 
                                            variant="h6" 
                                            color="primary"
                                            sx={{ 
                                                fontWeight: 700,
                                                color: '#E11E73'
                                            }}
                                        >
                                            ₱{item.price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                
                                <Divider />
                                
                                <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
                                    <Button 
                                        variant="contained"
                                        startIcon={<CartIcon />}
                                        onClick={(e) => addToCart(item, e)}
                                        sx={{ 
                                            backgroundColor: "#E11E73", 
                                            color: "white", 
                                            fontWeight: 600,
                                            px: 2,
                                            '&:hover': { 
                                                backgroundColor: "#C10E63" 
                                            } 
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                                    
                                    <Tooltip title={favorites[item.id] ? "Remove from Wishlist" : "Add to Wishlist"}>
                                        <IconButton 
                                            color="primary" 
                                            onClick={(e) => toggleFavorite(item.id, e)}
                                            sx={{ color: favorites[item.id] ? '#E11E73' : 'grey.400' }}
                                        >
                                            {favorites[item.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                        </IconButton>
                                    </Tooltip>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button 
                        variant="outlined" 
                        size="large"
                        onClick={() => navigate('/products')}
                        sx={{ 
                            borderColor: '#E11E73', 
                            color: '#E11E73',
                            px: 4,
                            fontWeight: 600,
                            '&:hover': {
                                borderColor: '#C10E63',
                                backgroundColor: 'rgba(225, 30, 115, 0.04)'
                            }
                        }}
                    >
                        View All Products
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default HomeFeaturedProducts;