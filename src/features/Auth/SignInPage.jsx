import React, { useState } from "react";
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
	Checkbox,
	FormControlLabel,
	Alert,
	CircularProgress
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeFooter from "../HomePage/home-footer";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import {useAuth} from "./context/AuthContext";

const SignInPage = () => {
	const navigate = useNavigate();
	const { login, isAuthenticated } = useAuth();

	const [showPassword, setShowPassword] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});

	// Redirect if already authenticated
	React.useEffect(
		() => {
			if (isAuthenticated()) {
				navigate("/home");
			}
		},
		[isAuthenticated, navigate]
	);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		// Clear error when user starts typing
		if (error) setError("");
	};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleSignIn = async event => {
		event.preventDefault();
		setError("");

		const { email, password } = formData;
		if (!email || !password) {
			setError("Please fill in all fields");
			return;
		}

		setLoading(true);

		try {
			const result = await login(email, password);

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
		} catch (err) {
			setError("An unexpected error occurred");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				background: "linear-gradient(135deg, #f5f7fa 0%, #e4efe9 100%)"
			}}
		>
			<Container
				component="main"
				maxWidth="sm"
				sx={{
					mt: 4,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flex: 1
				}}
			>
				<Paper
					elevation={6}
					sx={{
						width: "100%",
						py: 5,
						px: { xs: 3, sm: 5 },
						borderRadius: 3,
						background: "#ffffff",
						backdropFilter: "blur(10px)",
						boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)"
					}}
				>
					<Box sx={{ textAlign: "center", mb: 4 }}>
						<Typography
							component="h1"
							variant="h4"
							fontWeight="bold"
							sx={{
								color: "#07863a",
								mb: 1
							}}
						>
							Welcome Back
						</Typography>
						<Typography variant="body1" color="text.secondary">
							Sign in to continue to your account
						</Typography>
					</Box>

					{error &&
						<Alert severity="error" sx={{ mb: 2 }}>
							{error}
						</Alert>}

					<Box component="form" onSubmit={handleSignIn} sx={{ mt: 2 }}>
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
							disabled={loading}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<EmailIcon color="action" />
									</InputAdornment>
								)
							}}
							sx={{ mb: 3 }}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type={showPassword ? "text" : "password"}
							id="password"
							autoComplete="current-password"
							value={formData.password}
							onChange={handleChange}
							variant="outlined"
							disabled={loading}
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
											disabled={loading}
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								)
							}}
							sx={{ mb: 1 }}
						/>

						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								mb: 3
							}}
						>
							<FormControlLabel
								control={
									<Checkbox
										checked={rememberMe}
										onChange={e => setRememberMe(e.target.checked)}
										name="rememberMe"
										color="primary"
										disabled={loading}
									/>
								}
								label="Remember me"
							/>
							<Button
								variant="text"
								color="primary"
								size="small"
								sx={{ textTransform: "none" }}
								disabled={loading}
							>
								Forgot password?
							</Button>
						</Box>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							size="large"
							disabled={loading}
							sx={{
								mt: 2,
								mb: 3,
								py: 1.5,
								backgroundColor: "#E11E73",
								color: "#ffffff",
								borderRadius: 2,
								fontSize: "1rem",
								"&:hover": {
									backgroundColor: "#c4145d"
								}
							}}
						>
							{loading
								? <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
										<CircularProgress size={20} color="inherit" />
										Signing In...
									</Box>
								: "Sign In"}
						</Button>

						<Divider sx={{ my: 3 }}>
							<Typography variant="body2" color="text.secondary">
								OR
							</Typography>
						</Divider>

						<Box sx={{ display: "flex", gap: 2, mb: 3 }}>
							<Button
								fullWidth
								variant="outlined"
								startIcon={<GoogleIcon />}
								disabled={loading}
								sx={{
									py: 1.5,
									borderColor: "#dbdfe2",
									color: "#5f6368",
									borderRadius: 2,
									"&:hover": {
										backgroundColor: "#f1f3f4",
										borderColor: "#d2d5d9"
									}
								}}
							>
								Google
							</Button>
							<Button
								fullWidth
								variant="outlined"
								startIcon={<FacebookIcon />}
								disabled={loading}
								sx={{
									py: 1.5,
									borderColor: "#dfe3f0",
									color: "#3b5998",
									borderRadius: 2,
									"&:hover": {
										backgroundColor: "#f5f7fa",
										borderColor: "#d4d9e8"
									}
								}}
							>
								Facebook
							</Button>
						</Box>

						<Box sx={{ textAlign: "center" }}>
							<Typography
								variant="body2"
								color="text.secondary"
								display="inline"
							>
								Don't have an account?
							</Typography>{" "}
							<Button
								variant="text"
								sx={{
									color: "#140fbf",
									fontWeight: "bold",
									textTransform: "none",
									p: 0,
									mx: 1,
									"&:hover": {
										backgroundColor: "transparent",
										textDecoration: "underline"
									}
								}}
								onClick={() => navigate("/signup")}
								disabled={loading}
							>
								Sign Up
							</Button>
						</Box>
					</Box>
				</Paper>
			</Container>
			<HomeFooter />
		</Box>
	);
};

export default SignInPage;
