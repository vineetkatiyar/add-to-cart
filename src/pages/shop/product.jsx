import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function ProductPage({ id, productName, price, productImage }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="p-4">
        <img
          className="w-full h-40 object-cover mt-2 rounded-md"
          src={productImage}
          alt={productName}
        />
      </div>
      <div className="p-4 border-t">
        <p className="text-lg font-semibold text-gray-800">{productName}</p>
        <p className="text-gray-600 text-sm mt-1">{price}₹</p>
        <button
          className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
          onClick={() => addToCart(id)}
        >
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
}
