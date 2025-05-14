import {
	Box,
	Card,
	Typography,
	Button,
	Table,
	TableHead,
	TableCell,
	TableBody,
	TableRow,
	TableContainer,
	Grid,
	Paper,
	Divider,
	Avatar,
	Chip,
	IconButton,
	CardHeader,
	CardContent,
	useTheme,
	useMediaQuery
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import HomeFooter from "../../HomePage/home-footer";
import AdminAddItem from "./admin-add-item";
import { useGetAllItemsQuery } from "../hooks/adminSlice.js";
import Types from "../../../enums/item-types-enum.js";

const getItemStatus = (status) => {
	return Types[status] || "Unknown Status";
};

const AdminDashboard = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const { data: items } = useGetAllItemsQuery();
	const itemCount = items?.length ?? 0;
	return (
		<Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
			<Box sx={{ p: 3 }}>
				{/* Dashboard Header */}
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						mb: 3
					}}
				>
					<Typography variant="h4" sx={{ fontWeight: 600, color: "#333" }}>
						Admin Dashboard
					</Typography>
					<Box>
						<Button
							variant="contained"
							startIcon={<RefreshIcon />}
							sx={{
								mr: 2,
								backgroundColor: "#fff",
								color: "#555",
								boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
								"&:hover": { backgroundColor: "#f5f5f5" }
							}}
						>
							Refresh
						</Button>
						<Button
							variant="contained"
							startIcon={<AddIcon />}
							sx={{
								backgroundColor: "#E11E73",
								"&:hover": { backgroundColor: "#c01a68" }
							}}
						>
							New Product
						</Button>
					</Box>
				</Box>

				{/* Dashboard Content */}
				<Box
					sx={{
						display: "flex",
						flexDirection: isMobile ? "column" : "row",
						gap: 3
					}}
				>
					{/* Left Section */}
					<Box sx={{ width: isMobile ? "100%" : "50%" }}>
						{/* Summary Cards */}
						<Grid container spacing={3} sx={{ mb: 3 }}>
							<Grid item xs={12} md={4}>
								<Card
									elevation={0}
									sx={{
										borderRadius: 2,
										boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
										height: "100%",
										backgroundColor: "#fff",
										transition: "transform 0.3s",
										"&:hover": { transform: "translateY(-5px)" }
									}}
								>
									<CardContent>
										<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
											<Avatar sx={{ bgcolor: "#E8F5E9", mr: 2 }}>
												<ShoppingCartIcon sx={{ color: "#2E7D32" }} />
											</Avatar>
											<Typography variant="h6" sx={{ fontWeight: 600 }}>
												Products
											</Typography>
										</Box>
										<Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
											{itemCount}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											12 new this month
										</Typography>
									</CardContent>
								</Card>
							</Grid>

							<Grid item xs={12} md={4}>
								<Card
									elevation={0}
									sx={{
										borderRadius: 2,
										boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
										height: "100%",
										backgroundColor: "#fff",
										transition: "transform 0.3s",
										"&:hover": { transform: "translateY(-5px)" }
									}}
								>
									<CardContent>
										<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
											<Avatar sx={{ bgcolor: "#E3F2FD", mr: 2 }}>
												<ReceiptIcon sx={{ color: "#1565C0" }} />
											</Avatar>
											<Typography variant="h6" sx={{ fontWeight: 600 }}>
												Transactions
											</Typography>
										</Box>
										<Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
											50
										</Typography>
										<Typography variant="body2" color="text.secondary">
											8 completed today
										</Typography>
									</CardContent>
								</Card>
							</Grid>

							<Grid item xs={12} md={4}>
								<Card
									elevation={0}
									sx={{
										borderRadius: 2,
										boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
										height: "100%",
										backgroundColor: "#fff",
										transition: "transform 0.3s",
										"&:hover": { transform: "translateY(-5px)" }
									}}
								>
									<CardContent>
										<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
											<Avatar sx={{ bgcolor: "#FFF3E0", mr: 2 }}>
												<WarningAmberIcon sx={{ color: "#E65100" }} />
											</Avatar>
											<Typography variant="h6" sx={{ fontWeight: 600 }}>
												Complaints
											</Typography>
										</Box>
										<Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
											5
										</Typography>
										<Typography variant="body2" color="text.secondary">
											2 resolved today
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>

						{/* Featured Items */}
						<Card
							elevation={0}
							sx={{
								borderRadius: 2,
								boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
								mb: 3,
								overflow: "hidden"
							}}
						>
							<CardHeader
								title="Featured Products"
								action={
									<IconButton aria-label="settings">
										<MoreVertIcon />
									</IconButton>
								}
								sx={{
									backgroundColor: "#f8f9fa",
									borderBottom: "1px solid #eee"
								}}
							/>
							<TableContainer component={Paper} elevation={0}>
								<Table sx={{ minWidth: 650 }} aria-label="featured items table">
									<TableHead>
										<TableRow>
											<TableCell sx={{ fontWeight: 600 }}>
												Brand
											</TableCell>
											<TableCell align="right" sx={{ fontWeight: 600 }}>
												Description
											</TableCell>
											<TableCell align="right" sx={{ fontWeight: 600 }}>
												Price
											</TableCell>
											<TableCell align="right" sx={{ fontWeight: 600 }}>
												Type
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{items?.map(item =>
											<TableRow
												key={item.id}
												sx={{
													"&:last-child td, &:last-child th": { border: 0 }
												}}
											>
												<TableCell component="th" scope="row">
													{item.brand}
												</TableCell>
												<TableCell align="right">
													{item.description}
												</TableCell>
												<TableCell align="right">
													${item.price.toFixed(2)}
												</TableCell>
												<TableCell align="right">
													<Chip
														label={getItemStatus(item.type)}
														size="small"
														sx={{
															backgroundColor:
																item.status === "In Stock"
																	? "#E8F5E9"
																	: item.status === "Low Stock"
																		? "#FFF8E1"
																		: "#FFEBEE",
															color:
																item.status === "In Stock"
																	? "#2E7D32"
																	: item.status === "Low Stock"
																		? "#F57F17"
																		: "#C62828"
														}}
													/>
												</TableCell>
											</TableRow>
										)}
									</TableBody>
								</Table>
							</TableContainer>
							<Box
								sx={{
									p: 2,
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center"
								}}
							>
								<Typography variant="body2" color="text.secondary">
									Showing 4 of 100 products
								</Typography>
								<Button
									variant="outlined"
									size="small"
									sx={{
										color: "#E11E73",
										borderColor: "#E11E73",
										"&:hover": {
											borderColor: "#c01a68",
											backgroundColor: "rgba(225, 30, 115, 0.04)"
										}
									}}
								>
									View All
								</Button>
							</Box>
						</Card>
					</Box>

					{/* Right Section */}
					<Box sx={{ width: isMobile ? "100%" : "50%" }}>
						<AdminAddItem />
					</Box>
				</Box>
			</Box>

			<HomeFooter />
		</Box>
	);
};

export default AdminDashboard;
