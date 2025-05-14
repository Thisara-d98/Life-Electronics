import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8080/",
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth?.token;

			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}

			return headers;
		}
	}),
	tagTypes: ["Admin", "Products", "Items"],
	endpoints: () => ({})
});

export default api;
