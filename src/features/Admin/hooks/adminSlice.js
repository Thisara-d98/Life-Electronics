import api from "../../../services/api.js";

export const itemApi = api.injectEndpoints({
	endpoints: builder => ({
		getAllItems: builder.query({
			query: () => `items`
		}),

		AddProductItem: builder.mutation({
			query: payload => ({
				url: "items",
				method: "POST",
				body: payload
			})
		})
	})
});

export const { useGetAllItemsQuery, useAddProductItemMutation } = itemApi;
