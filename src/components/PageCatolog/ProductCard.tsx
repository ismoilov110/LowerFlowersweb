import type { CatalogProductType } from "@/Types/types";

interface ProductCardProps {
  product: CatalogProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      {/* Product Image */}
      <img
        className="aspect-[3/4] w-full h-[350px] rounded-2xl cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105"
        src={product.image} 
        alt={product.title}
      />

      {/* Product Info */}
      <div className="mt-4">
        {/* Product Title */}
        <h3 className="text-lg font-medium text-white">{product.title}</h3>

        {/* Product Category */}
        <p className="mt-1 text-sm text-white/60">{product.category}</p>

        {/* Product Price  */}
        <h2 className="mt-2 text-lg font-semibold text-white">
          ${product.price.toFixed(2)}
        </h2>

        {/* Product Add Cart Button  */}
        <button className="mt-4 w-full rounded-full border border-white bg-transparent py-2.5 px-6 text-sm font-medium text-white transition-all duration-300 group-hover:bg-[#7D2253] group-hover:text-white cursor-pointer group-hover:border-none">
          В корзину
        </button>
      </div>
    </div>
  );
}
