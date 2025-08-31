import React, { useState } from 'react';
import { 
    Box, 
    Button, 
    TextField, 
    Typography, 
    Container, 
    Paper,
    InputAdornment,
    IconButton,
    Divider,
    Stepper,
    Step,
    StepLabel,
    LinearProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeFooter from "../HomePage/home-footer";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useAuth } from './context/AuthContext';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        userName: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const {register,isAuthenticated} = useAuth();
    
    // Password strength state
    const [passwordStrength, setPasswordStrength] = useState(0);
    
    const steps = ['Account Info', 'Set Password', 'Complete'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Calculate password strength when password field changes
        if (name === 'password') {
            calculatePasswordStrength(value);
        }
    };
    
    const calculatePasswordStrength = (password) => {
        let strength = 0;
        
        if (password.length >= 8) strength += 25;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 25;
        if (password.match(/[0-9]/)) strength += 25;
        if (password.match(/[^a-zA-Z0-9]/)) strength += 25;
        
        setPasswordStrength(strength);
    };
    
    const getPasswordStrengthColor = () => {
        if (passwordStrength < 50) return '#f44336';
        if (passwordStrength < 75) return '#ff9800';
        return '#4caf50';
    };
    
    const getPasswordStrengthLabel = () => {
        if (passwordStrength < 50) return 'Weak';
        if (passwordStrength < 75) return 'Medium';
        return 'Strong';
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleNext = () => {
        if (activeStep === 0) {
            if (!formData.email || !formData.userName) {
                setError('Please fill in all fields');
                return;
            }
            setError('');
        } else if (activeStep === 1) {
            if (!formData.password || !formData.confirmPassword) {
                setError('Please fill in all fields');
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                return;
            }
            setError('');
        }
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSignUp = async event => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        // Add registration logic here
        try {
            const result = await register(formData);
            if (result.success) {
				// Navigate based on user role
				if (result.role === "ADMIN") {
					navigate("/admin-dashboard");
				} else {
					navigate("/home");
				}
			} else {
				setError(result.message || "Login failed");
			}
        } catch(err){
            setError("An unexpected error occurred");
        }
        navigate('/home'); // Navigate to home page after successful registration
    };
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formData.email}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ mb: 3 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="Username"
                            name="userName"
                            autoComplete="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </>
                );
            case 1:
                return (
                    <>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="new-password"
                            value={formData.password}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon color="action" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            sx={{ mb: 1 }}
                        />
                        
                        {formData.password && (
                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Password strength:
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: getPasswordStrengthColor(), fontWeight: 'bold' }}>
                                        {getPasswordStrengthLabel()}
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={passwordStrength}
                                    sx={{
                                        height: 8,
                                        borderRadius: 4,
                                        backgroundColor: '#e0e0e0',
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: getPasswordStrengthColor(),
                                        }
                                    }}
                                />
                                
                                <Box sx={{ mt: 1.5, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        {formData.password.length >= 8 ? 
                                            <CheckCircleOutlineIcon fontSize="small" color="success" /> :
                                            <ErrorOutlineIcon fontSize="small" color="error" />
                                        }
                                        <Typography variant="caption" color="text.secondary">
                                            At least 8 characters
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        {formData.password.match(/[a-z]/) && formData.password.match(/[A-Z]/) ?
                                            <CheckCircleOutlineIcon fontSize="small" color="success" /> :
                                            <ErrorOutlineIcon fontSize="small" color="error" />
                                        }
                                        <Typography variant="caption" color="text.secondary">
                                            Upper & lowercase
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        {formData.password.match(/[0-9]/) ? 
                                            <CheckCircleOutlineIcon fontSize="small" color="success" /> :
                                            <ErrorOutlineIcon fontSize="small" color="error" />
                                        }
                                        <Typography variant="caption" color="text.secondary">
                                            At least 1 number
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        {formData.password.match(/[^a-zA-Z0-9]/) ?
                                            <CheckCircleOutlineIcon fontSize="small" color="success" /> :
                                            <ErrorOutlineIcon fontSize="small" color="error" />
                                        }
                                        <Typography variant="caption" color="text.secondary">
                                            Special character
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                        
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon color="action" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            edge="end"
                                        >
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            error={formData.password !== formData.confirmPassword && formData.confirmPassword !== ''}
                            helperText={formData.password !== formData.confirmPassword && formData.confirmPassword !== '' ? 'Passwords do not match' : ''}
                        />
                    </>
                );
            case 2:
                return (
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 80, color: '#E11E73', mb: 2 }} />
                        <Typography variant="h5" gutterBottom>
                            Almost there!
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            Your account has been created successfully. Click the button below to get started with your new account.
                        </Typography>
                    </Box>
                );
            default:
                return 'Unknown step';
        }
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(135deg, #fff0f5 0%, #f8f9fa 100%)'
        }}>
            <Container component="main" maxWidth="sm" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                py: 5
            }}>
                <Paper elevation={6} sx={{
                    width: '100%',
                    p: { xs: 3, sm: 5 },
                    borderRadius: 3,
                    background: '#ffffff',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
                }}>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography
                            component="h1"
                            variant="h4"
                            fontWeight="bold"
                            sx={{
                                color: '#E11E73',
                                mb: 1
                            }}
                        >
                            Create Account
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Join our community today
                        </Typography>
                    </Box>
                    
                    <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    
                    <Box component="form" onSubmit={handleSignUp}>
                        {getStepContent(activeStep)}
                        
                        {error && (
                            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
                                {error}
                            </Typography>
                        )}
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, mb: 2 }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant="outlined"
                                sx={{
                                    borderColor: '#dbdfe2',
                                    color: '#5f6368'
                                }}
                            >
                                Back
                            </Button>
                            
                            {activeStep === steps.length - 1 ? (
                                <Button
                                    type="submit"
                                    variant="contained"
                                    onClick={handleSignUp}
                                    sx={{
                                        backgroundColor: '#E11E73',
                                        color: '#ffffff',
                                        '&:hover': {
                                            backgroundColor: '#c4145d'
                                        }
                                    }}
                                >
                                    Get Started
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ 
                                        backgroundColor: '#E11E73', 
                                        color: '#ffffff',
                                        '&:hover': {
                                            backgroundColor: '#c4145d'
                                        }
                                    }}
                                >
                                    Next
                                </Button>
                            )}
                        </Box>
                        
                        {activeStep === 0 && (
                            <>
                                <Divider sx={{ my: 3 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        OR
                                    </Typography>
                                </Divider>
                                
                                <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        startIcon={<GoogleIcon />}
                                        sx={{ 
                                            py: 1.5,
                                            borderColor: '#dbdfe2',
                                            color: '#5f6368',
                                            borderRadius: 2,
                                            '&:hover': {
                                                backgroundColor: '#f1f3f4',
                                                borderColor: '#d2d5d9'
                                            }
                                        }}
                                    >
                                        Google
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        startIcon={<FacebookIcon />}
                                        sx={{ 
                                            py: 1.5,
                                            borderColor: '#dfe3f0',
                                            color: '#3b5998',
                                            borderRadius: 2,
                                            '&:hover': {
                                                backgroundColor: '#f5f7fa',
                                                borderColor: '#d4d9e8'
                                            }
                                        }}
                                    >
                                        Facebook
                                    </Button>
                                </Box>
                            </>
                        )}
                        
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary" display="inline">
                                Already have an account?
                            </Typography>{' '}
                            <Button
                                variant="text"
                                sx={{ 
                                    color: '#1EE18C', 
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    p: 0,
                                    mx: 1,
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        textDecoration: 'underline'
                                    }
                                }}
                                onClick={() => navigate('/')}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
            <HomeFooter />
        </Box>
    );
};

export default SignUpPage;