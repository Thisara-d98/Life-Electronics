import { useAddProductItemMutation } from "./adminSlice";

const useAdminAddItemLogic = () => {
	const [handleAddProductItem] = useAddProductItemMutation();

	const onSubmit = payload => {
		const { type, ...rest } = payload;
		const formattedData = { ...rest, type: Number(type.value) };
		console.log(formattedData);
		handleAddProductItem(formattedData);
	};

	return { onSubmit };
};

export default useAdminAddItemLogic;
