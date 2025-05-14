import React from "react";
import { 
  Box, Typography, Card, Grid, Link, IconButton, Container, 
  Divider, TextField, Button, Stack, InputAdornment 
} from "@mui/material";
import { 
  Facebook, Twitter, Instagram, LinkedIn, Email, 
  Phone, LocationOn, Send, ArrowForward, Copyright
} from "@mui/icons-material";

const HomeFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box component="footer" sx={{ mt: 8 }}>
      {/* Newsletter Section */}
      <Box sx={{ bgcolor: "#18BF74", py: 4 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>
                Subscribe to Our Newsletter
              </Typography>
              <Typography variant="body1" sx={{ color: "white", mt: 1, opacity: 0.9 }}>
                Get the latest news, promotions and updates delivered to your inbox.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="form" sx={{ display: 'flex' }}>
                <TextField
                  fullWidth
                  placeholder="Your email address"
                  variant="outlined"
                  size="medium"
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "transparent" },
                      "&:hover fieldset": { borderColor: "transparent" },
                      "&.Mui-focused fieldset": { borderColor: "transparent" }
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="primary" />
                      </InputAdornment>
                    )
                  }}
                />
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                  sx={{
                    ml: -1,
                    zIndex: 1,
                    bgcolor: "#0F7A4C",
                    "&:hover": { bgcolor: "#0C6A41" }
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Footer */}
      <Box sx={{ bgcolor: "#1EE18C", color: "#fff", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Musicly
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, mb: 3, opacity: 0.9, lineHeight: 1.8 }}>
                Your premier destination for high-quality audio equipment and accessories. 
                We provide the best sound experience for music enthusiasts and audiophiles.
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOn fontSize="small" />
                <Typography variant="body2">
                  No 15/A, Highlevel Road, Maharagama
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                <Phone fontSize="small" />
                <Typography variant="body2">
                  +94 112 850 950
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                <Email fontSize="small" />
                <Typography variant="body2">
                  info@musicly.com
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1.5}>
                <Link href="/" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} /> Home
                </Link>
                <Link href="/shop" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} /> Shop
                </Link>
                <Link href="/products" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} /> Products
                </Link>
                <Link href="/about" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} /> About Us
                </Link>
                <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} /> Contact
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Support
              </Typography>
              <Stack spacing={1.5}>
                <Link href="/faq" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} /> FAQ
                </Link>
                <Link href="/shipping" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} /> Shipping
                </Link>
                <Link href="/returns" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} /> Returns
                </Link>
                <Link href="/warranty" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} /> Warranty
                </Link>
                <Link href="/privacy" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                  <ArrowForward sx={{ fontSize: 14, mr: 1 }} /> Privacy Policy
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Connect With Us
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                Follow us on social media for the latest updates, promotions, and product releases.
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                <IconButton 
                  href="https://facebook.com" 
                  target="_blank" 
                  sx={{ 
                    color: "white", 
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" }
                  }}
                  aria-label="Facebook"
                >
                  <Facebook />
                </IconButton>
                <IconButton 
                  href="https://twitter.com" 
                  target="_blank" 
                  sx={{ 
                    color: "white", 
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" }
                  }}
                  aria-label="Twitter"
                >
                  <Twitter />
                </IconButton>
                <IconButton 
                  href="https://instagram.com" 
                  target="_blank" 
                  sx={{ 
                    color: "white", 
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" }
                  }}
                  aria-label="Instagram"
                >
                  <Instagram />
                </IconButton>
                <IconButton 
                  href="https://linkedin.com" 
                  target="_blank" 
                  sx={{ 
                    color: "white", 
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" }
                  }}
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
              
              <Typography variant="body2" sx={{ mt: 2 }}>
                Download Our App
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                <Link href="#" underline="none">
                  <img 
                    src="/api/placeholder/135/40" 
                    alt="App Store" 
                    style={{ height: 40, borderRadius: 6 }}
                  />
                </Link>
                <Link href="#" underline="none">
                  <img 
                    src="/api/placeholder/135/40" 
                    alt="Google Play" 
                    style={{ height: 40, borderRadius: 6 }}
                  />
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom Copyright Bar */}
      <Box sx={{ bgcolor: "#18BF74", color: "#fff", py: 2 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Copyright fontSize="small" />
                <Typography variant="body2">
                  {currentYear} Musicly Electronics PVT LTD. All rights reserved.
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={2}>
                <Link href="/terms" color="inherit" underline="hover" variant="body2">
                  Terms of Service
                </Link>
                <Link href="/privacy" color="inherit" underline="hover" variant="body2">
                  Privacy Policy
                </Link>
                <Link href="/sitemap" color="inherit" underline="hover" variant="body2">
                  Sitemap
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeFooter;