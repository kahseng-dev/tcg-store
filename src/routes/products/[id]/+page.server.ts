import { error } from "@sveltejs/kit";
import { products } from "$lib/data/products";

export function load({ params }) {
	const productDetails = products.find((product) => product.id.toString() === params.id);

	if (!productDetails) error(404);

	return {
		productDetails
	};
}
