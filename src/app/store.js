import { configureStore } from "@reduxjs/toolkit";
import api from "../services/api.js";
import { setupListeners } from "@reduxjs/toolkit/query";
export const Store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
});

setupListeners(Store.dispatch);
