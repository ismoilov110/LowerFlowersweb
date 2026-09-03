import { PopularsProduct } from "@/Constants/Data";

export function getProductById(id: number) {
    return PopularsProduct.find((product) => product.id === id) || null
}