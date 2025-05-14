import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import JBLImg from "../../assets/jbl.jpg"; // Assuming the image is the same for demonstration
import HomeFooter from "../HomePage/home-footer";
import HeaderNavbar from "../HomePage/home-navbar";
const ProductDetailsPage = () => {
    const { brand, price } = useParams(); // Assuming brand and price are passed as URL parameters
    const navigate = useNavigate();

    // Mock data for demonstration purposes
    const productDetails = {
        description: "This is a detailed description of the product.",
        warranty: "2 years warranty",
        image: JBLImg, // Use the same image for demonstration
    };

    return (
        <>
        <Container sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <img src={productDetails.image} alt={brand} style={{ width: '100%', borderRadius: '8px' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ mb: 2 }}>{brand}</Typography>
                    <Typography variant="h6" sx={{ mb: 2 }}>Price: {price}</Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>{productDetails.description}</Typography>
                    <Typography variant="body2" sx={{ mb: 4 }}>{productDetails.warranty}</Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button variant="contained" sx={{ backgroundColor: '#E11E73', color: '#ffffff' }}>Add to Cart</Button>
                        <Button variant="contained" sx={{ backgroundColor: '#1EE18C', color: '#ffffff' }}>Buy Now</Button>
                    </Box>
                    <Button variant="text" sx={{ mt: 4 }} onClick={() => navigate(-1)}>Back to Products</Button>
                </Grid>
            </Grid>
        </Container>
        <HomeFooter/>
        </>
    );
};

export default ProductDetailsPage; 