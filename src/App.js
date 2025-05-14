import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeFeaturedProducts from "./features/HomePage/home-view-featured-products";
import ProductDetailsPage from "./features/Product/ProductDetailsPage";
import SignInPage from "./features/Auth/SignInPage";
import SignUpPage from "./features/Auth/SignUpPage";
import HomePage from "./features/HomePage/home-page";
import HeaderNavbar from "./features/HomePage/home-navbar";
import BillPage from "./features/BillPage/BillPage";
import AdminDashboard from "./features/Admin/components/admin-dashboard";

function App() {
	const items = [
		{ name: "Item 1", price: 10 },
		{ name: "Item 2", price: 20 }
		// Add more items as needed
	];

	return (
		<Router>
			<HeaderNavbar />
			<Routes>
				<Route path="/" element={<SignInPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/product/:brand/:price" element={<ProductDetailsPage />} />
				<Route
					path="/bill"
					element={
						<BillPage
							items={items}
							onCancel={() => (window.location.href = "/")}
						/>
					}
				/>
				<Route path="/admin-dashboard" element={<AdminDashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
