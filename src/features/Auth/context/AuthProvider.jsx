// context/AuthProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Check if user is authenticated on app load
	useEffect(() => {
		const token = localStorage.getItem("token");
		const userData = localStorage.getItem("user");

		if (token && userData) {
			setUser(JSON.parse(userData));
		}
		setLoading(false);
	}, []);

	const login = async (email, password) => {
		try {
			// Your login API call here
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ email, password })
			});

			if (response.ok) {
				const data = await response.json();
				setUser(data.user);
				localStorage.setItem("token", data.token);
				localStorage.setItem("user", JSON.stringify(data.user));
				return { success: true, role: data.user.role };
			} else {
				const error = await response.json();
				return { success: false, message: error.message };
			}
		} catch (error) {
			return { success: false, message: "Network error" };
		}
	};

	const logout = () => {
		console.log("set it");
		setUser(null);
		localStorage.removeItem("token");
		localStorage.removeItem("user");
	};

	const isAuthenticated = () => {
		return !!user;
	};

	const value = {
		user,
		login,
		logout,
		isAuthenticated,
		loading
	};

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

export { useAuth };
