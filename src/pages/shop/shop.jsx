import { PRODUCTS } from "../products";
import { ProductPage } from "./product";

export function ShopPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          🛍️ Vineet's Shop
        </h1>
        <p className="text-gray-600 mt-2 text-lg">Find the best products at great prices!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.map(({ id, productName, price, productImage }) => (
          <ProductPage
            key={id}
            id={id}
            productName={productName}
            price={price}
            productImage={productImage}
          />
        ))}
      </div>
    </div>
  );
}
