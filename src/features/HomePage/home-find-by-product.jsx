import HeadphoneIcon from "../../assets/headphone-icon.png";
import EarPhones from "../../assets/earphone-icon.png";
import Speakers from "../../assets/speaker-vectors.png";
import HomeTheater from "../../assets/home-theater-icon.png";
import { Card, Typography, CardMedia, Box, Grid, Container, CardContent, CardActionArea } from "@mui/material";

const HomeFindByProduct = () => {
    const products = [
        {
            name: "Headphones",
            img: HeadphoneIcon,
            description: "Premium sound quality headphones"
        },
        {
            name: "Earphones",
            img: EarPhones,
            description: "Wireless & wired earphones"
        },
        {
            name: "Speakers",
            img: Speakers,
            description: "Powerful audio speakers"
        },
        {
            name: "Home Theater",
            img: HomeTheater,
            description: "Immersive sound systems"
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography 
                variant="h4" 
                component="h2" 
                align="center" 
                gutterBottom 
                sx={{ 
                    fontWeight: 'bold',
                    mb: 4,
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: '60px',
                        height: '3px',
                        background: 'primary.main',
                        bottom: '-10px',
                        left: 'calc(50% - 30px)'
                    }
                }}
            >
                Find by Product Category
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {products.map((product, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Card 
                            elevation={2}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: 6,
                                }
                            }}
                        >
                            <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Box 
                                    sx={{ 
                                        p: 3, 
                                        display: 'flex', 
                                        justifyContent: 'center',
                                        width: '100%'
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={product.img}
                                        alt={product.name}
                                        sx={{ 
                                            width: '80px',
                                            height: '80px',
                                            objectFit: 'contain',
                                            transition: 'transform 0.3s',
                                            '&:hover': {
                                                transform: 'scale(1.1)',
                                            }
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomeFindByProduct;