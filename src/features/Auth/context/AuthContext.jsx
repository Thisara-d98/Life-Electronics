import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			try {
				const userData = JSON.parse(localStorage.getItem("user"));
				setUser(userData);
			} catch (error) {
				localStorage.removeItem("token");
				localStorage.removeItem("user");
			}
		}

		setLoading(false);
	}, []);

	const login = async (email, password) => {
		try {
			const response = await axios.post(
				"http://localhost:8080/api/auth/signin",
				{
					email,
					password
				}
			);

			const { token, id, email: userEmail, role } = response.data;

			localStorage.setItem("token", token);
			localStorage.setItem(
				"user",
				JSON.stringify({ id, email: userEmail, role })
			);

			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

			setUser({ id, email: userEmail, role });

			return { success: true, role };
		} catch (error) {
			return {
				success: false,
				message:
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					"Login failed"
			};
		}
	};

	const register = async userData => {
		try {
			const response = await axios.post(
				"http://localhost:8080/api/auth/signup",
				userData
			);

			return {
				success: true,
				message: response.data.message || "Registration successful"
			};
		} catch (error) {
			return {
				success: false,
				message:
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					"Registration failed"
			};
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		setUser(null);
		delete axios.defaults.headers.common["Authorization"];
	};

	const isAuthenticated = () => {
		return !!user;
	};

	const isAdmin = () => {
		return user && user.role === "ADMIN";
	};

	const isClient = () => {
		return user && user.role === "CLIENT";
	};

	const value = {
		user,
		login,
		register,
		logout,
		isAuthenticated,
		isAdmin,
		isClient,
		loading
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
